from PIL import Image

src = Image.open(r"F:\opencode test\1\_build\icon-512.png")
for size, name in [(512, "favicon-512.png"), (192, "favicon-192.png"), (180, "apple-touch-icon.png")]:
    img = src.resize((size, size), Image.LANCZOS)
    img.save(rf"F:\opencode test\1\assets\icons\{name}", optimize=True)
    print(name, img.size)
