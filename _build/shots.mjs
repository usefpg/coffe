import fs from "node:fs";

const PORT = 9223;
const BASE = "http://127.0.0.1:4321/";
const OUT = "F:/opencode test/1/_build";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function connect() {
  const list = await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json());
  const page = list.find((target) => target.type === "page");
  if (!page) throw new Error("No page target");

  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });

  let nextId = 0;
  const pending = new Map();

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result);
    }
  };

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++nextId;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });

  return { socket, send };
}

async function main() {
  const { socket, send } = await connect();

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });

  await send("Page.navigate", { url: BASE });
  await sleep(2500);
  await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });

  async function evalJs(expression) {
    return send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  }

  async function shot(name) {
    const result = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(`${OUT}/${name}.png`, Buffer.from(result.data, "base64"));
    console.log("wrote", name);
  }

  async function scrollTo(id) {
    await evalJs(`(() => {
      const el = document.getElementById(${JSON.stringify(id)});
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: "instant" });
      return true;
    })()`);
    await sleep(1100);
  }

  await shot("cdp-desktop-top");

  for (const id of ["menu", "reviews", "gallery", "about", "visit", "contact"]) {
    await scrollTo(id);
    await shot(`cdp-desktop-${id}`);
  }

  // English menu
  await evalJs(`document.getElementById("langToggle").click()`);
  await sleep(700);
  await scrollTo("menu");
  await shot("cdp-desktop-menu-en");

  // Back to Arabic and open the lightbox
  await evalJs(`document.getElementById("langToggle").click()`);
  await sleep(700);
  await scrollTo("gallery");
  await evalJs(`document.querySelector(".gallery-item").click()`);
  await sleep(700);
  await shot("cdp-desktop-lightbox");
  await evalJs(`document.getElementById("lightbox").close()`);

  // Mobile layout
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await evalJs(`window.scrollTo(0, 0)`);
  await sleep(900);
  await shot("cdp-mobile-top");

  await evalJs(`document.getElementById("menuToggle").click()`);
  await sleep(500);
  await shot("cdp-mobile-nav");
  await evalJs(`document.getElementById("menuToggle").click()`);

  await scrollTo("menu");
  await shot("cdp-mobile-menu");

  await scrollTo("visit");
  await shot("cdp-mobile-visit");

  socket.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
