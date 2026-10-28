/* ============================================================
   BEST COFFEE — مقهى أحسن قهوة
   Vanilla HTML + CSS + JavaScript. No build step, no frameworks.

   EVERYTHING THE OWNER NEEDS TO EDIT IS AT THE TOP OF THIS FILE.
   Search for "TODO" to find the placeholders that must be replaced.
   ============================================================ */
"use strict";

/* ------------------------------------------------------------
   1. BUSINESS CONFIG — edit names, phone, hours and links here.
   ------------------------------------------------------------ */

// TODO: set the real opening time, e.g. "09:00".
// Until it is set, the site uses PROVISIONAL_OPEN_TIME below so the
// live "Open now / Closed" badge and hours table still work.
const OPEN_TIME = "TODO";

// Provisional value used only while OPEN_TIME is still "TODO".
// Public listings suggest 9:00 AM; confirm with the owner.
const PROVISIONAL_OPEN_TIME = "09:00";

const CONFIG = {
  name: { ar: "مقهى أحسن قهوة", en: "Best Coffee" },

  // TODO: replace both the display value and the tel: value.
  phone: {
    display: "+966 50 000 0000",
    tel: "+966500000000",
  },

  // TODO: WhatsApp number in international format, digits only.
  whatsapp: "966500000000",

  // TODO: replace with the shop's real Instagram account.
  instagram: {
    url: "https://www.instagram.com/bestcoffee.riyadh/",
    handle: "@bestcoffee.riyadh",
  },

  // TODO: replace with the exact Google Maps Place link for the shop.
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=24.6451875,46.7010625",
  googleDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=24.6451875,46.7010625",

  // TODO: for a one-tap "write a review" link, replace this with:
  // https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
  googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=24.6451875,46.7010625",

  mapEmbedUrl: "https://www.google.com/maps?q=24.6451875,46.7010625&z=16&output=embed",

  address: {
    ar: "طريق الملك سعود، الوشام، الرياض 12735، المملكة العربية السعودية",
    en: "King Saud Rd, Al Wisham, Riyadh 12735, Saudi Arabia",
  },
  plusCode: "JPW2+3C Al Wisham, Riyadh",
  geo: { lat: 24.6451875, lng: 46.7010625 },

  rating: 4.3,
  reviewCount: 2231,

  // Approximate star distribution from the Google rating (sums to 2,231).
  ratingDistribution: [
    { stars: 5, count: 1350 },
    { stars: 4, count: 520 },
    { stars: 3, count: 190 },
    { stars: 2, count: 80 },
    { stars: 1, count: 91 },
  ],

  priceRange: { ar: "1–20 ر.س للفرد", en: "SAR 1–20 per person" },
  currency: { ar: "ر.س", en: "SAR" },

  timezone: "Asia/Riyadh",

  // Hours are local Riyadh time. 0 = Sunday … 6 = Saturday.
  // Edit any row to give a day different hours. Close after midnight
  // is supported (02:00 means 2 AM the next morning).
  hours: [
    { day: 0, open: OPEN_TIME, close: "02:00" },
    { day: 1, open: OPEN_TIME, close: "02:00" },
    { day: 2, open: OPEN_TIME, close: "02:00" },
    { day: 3, open: OPEN_TIME, close: "02:00" },
    { day: 4, open: OPEN_TIME, close: "02:00" },
    { day: 5, open: OPEN_TIME, close: "02:00" },
    { day: 6, open: OPEN_TIME, close: "02:00" },
  ],
};

/* ------------------------------------------------------------
   2. MENU — add / remove / re-price items here.
   Prices are in SAR. cat must match a category id below.
   ------------------------------------------------------------ */

const CATEGORIES = [
  { id: "all", name: { ar: "الكل", en: "All" } },
  { id: "hot", name: { ar: "مشروبات ساخنة", en: "Hot Drinks" } },
  { id: "egyptian", name: { ar: "قهوة مصرية", en: "Egyptian Coffee" } },
  { id: "sahlab", name: { ar: "سهلب وخاص", en: "Sahlab & Specials" } },
  { id: "cold", name: { ar: "باردة وعصائر", en: "Cold Drinks & Juices" } },
  { id: "desserts", name: { ar: "حلويات", en: "Desserts" } },
];

const MENU = [
  // --- Hot Drinks ---
  {
    id: "espresso", cat: "hot", icon: "cup", price: 7, popular: false,
    name: { ar: "إسبريسو", en: "Espresso" },
    desc: {
      ar: "شوت مركّز من حبوب مختصة، بتوازن بين الحموضة والحلاوة.",
      en: "A concentrated shot of specialty beans with balanced acidity and sweetness.",
    },
  },
  {
    id: "americano", cat: "hot", icon: "cup", price: 9, popular: false,
    name: { ar: "أمريكانو", en: "Americano" },
    desc: {
      ar: "إسبريسو مع ماء ساخن، خفيف وواضح النكهة.",
      en: "Espresso lengthened with hot water — light, clean and aromatic.",
    },
  },
  {
    id: "cappuccino", cat: "hot", icon: "cup", price: 12, popular: true,
    name: { ar: "كابتشينو", en: "Cappuccino" },
    desc: {
      ar: "إسبريسو مع رغوة حليب حريرية ورشة كاكاو.",
      en: "Espresso under a silky milk foam, finished with a dusting of cocoa.",
    },
  },
  {
    id: "latte", cat: "hot", icon: "cup", price: 14, popular: false,
    name: { ar: "لاتيه", en: "Latte" },
    desc: {
      ar: "حليب مبخّر ناعم مع إسبريسو، حلاوة متوازنة وطبقة مخملية.",
      en: "Smooth steamed milk with espresso — mellow, balanced and velvety.",
    },
  },
  {
    id: "flat-white", cat: "hot", icon: "cup", price: 14, popular: false,
    name: { ar: "فلات وايت", en: "Flat White" },
    desc: {
      ar: "طبقة رقيقة من الحليب المخملي فوق قاعدة قهوة قوية.",
      en: "A thin layer of velvety milk over a stronger coffee base.",
    },
  },
  {
    id: "hot-chocolate", cat: "hot", icon: "cup", price: 13, popular: false,
    name: { ar: "شوكولاتة ساخنة", en: "Hot Chocolate" },
    desc: {
      ar: "شوكولاتة غنية بالحليب، تدفّئ جلسات المساء.",
      en: "Rich chocolate folded into hot milk — a warm evening treat.",
    },
  },
  {
    id: "mint-tea", cat: "hot", icon: "tea", price: 5, popular: true,
    name: { ar: "شاي بالنعناع", en: "Mint Tea" },
    desc: {
      ar: "شاي أسود مع نعناع طازج، يُقدّم في استكانة زجاجية.",
      en: "Black tea with fresh mint, served in a traditional glass.",
    },
  },
  {
    id: "karak", cat: "hot", icon: "tea", price: 6, popular: false,
    name: { ar: "شاي كرك", en: "Karak Tea" },
    desc: {
      ar: "شاي بالحليب والهيل والزعفران، وصفة خليجية دافئة.",
      en: "Milk tea scented with cardamom and saffron — a Gulf classic.",
    },
  },

  // --- Egyptian Coffee ---
  {
    id: "egyptian-coffee", cat: "egyptian", icon: "cezve", price: 8, popular: true,
    name: { ar: "قهوة مصرية", en: "Egyptian Coffee" },
    desc: {
      ar: "قهوة تُحضّر على الرمل ببطء، بنكهة قوية ورغوة ذهبية.",
      en: "Slow-brewed on hot sand for a bold cup with a golden foam.",
    },
  },
  {
    id: "turkish-coffee", cat: "egyptian", icon: "cezve", price: 9, popular: true,
    name: { ar: "قهوة تركية", en: "Turkish Coffee" },
    desc: {
      ar: "مطحونة ناعم مع هيل، تُقدّم مع قطعة حلقوم.",
      en: "Finely ground with cardamom and served with a piece of Turkish delight.",
    },
  },
  {
    id: "arabic-coffee", cat: "egyptian", icon: "dallah", price: 10, popular: false,
    name: { ar: "قهوة عربية", en: "Arabic Coffee" },
    desc: {
      ar: "بن فاتح مع زعفران وهيل، يُقدّم مع التمر.",
      en: "Light-roast beans with saffron and cardamom, served with dates.",
    },
  },
  {
    id: "cardamom-coffee", cat: "egyptian", icon: "cezve", price: 11, popular: false,
    name: { ar: "قهوة بالهيل", en: "Cardamom Coffee" },
    desc: {
      ar: "قهوة مصرية بلمسة هيل دافئة ونهاية ناعمة.",
      en: "Egyptian coffee with a warm cardamom note and a soft finish.",
    },
  },
  {
    id: "french-coffee", cat: "egyptian", icon: "cup", price: 12, popular: false,
    name: { ar: "قهوة فرنسية", en: "French Coffee" },
    desc: {
      ar: "قهوة بالحليب المبخّر، ناعمة وحلوة قليلاً.",
      en: "Coffee with steamed milk — gentle, creamy and lightly sweet.",
    },
  },
  {
    id: "nescafe", cat: "egyptian", icon: "cup", price: 10, popular: false,
    name: { ar: "نسكافيه", en: "Nescafé" },
    desc: {
      ar: "كلاسيكية سريعة، بالحليب أو سادة.",
      en: "The quick classic, with milk or black.",
    },
  },

  // --- Sahlab & Specials ---
  {
    id: "sahlab", cat: "sahlab", icon: "steam", price: 12, popular: true,
    name: { ar: "سهلب", en: "Sahlab" },
    desc: {
      ar: "مشروب الحليب الدافئ بالقشدة والقرفة، وصفة شتوية.",
      en: "Warm milk thickened with sahlab, cream and cinnamon — pure comfort.",
    },
  },
  {
    id: "sahlab-nuts", cat: "sahlab", icon: "steam", price: 16, popular: false,
    name: { ar: "سهلب بالمكسرات", en: "Sahlab with Nuts" },
    desc: {
      ar: "سهلاب غني مع لوز وفستق وجوز هند.",
      en: "Our sahlab loaded with almonds, pistachio and coconut.",
    },
  },
  {
    id: "sahlab-pistachio", cat: "sahlab", icon: "steam", price: 18, popular: true,
    name: { ar: "سهلب بالفستق", en: "Pistachio Sahlab" },
    desc: {
      ar: "قشدة كثيفة، فستق حلبي، ورشة قرفة.",
      en: "Thick cream, Aleppo pistachio and a whisper of cinnamon.",
    },
  },
  {
    id: "milk-honey", cat: "sahlab", icon: "steam", price: 10, popular: false,
    name: { ar: "حليب بالعسل", en: "Hot Milk & Honey" },
    desc: {
      ar: "حليب دافئ مع عسل طبيعي ولمسة قرفة.",
      en: "Warm milk with natural honey and a touch of cinnamon.",
    },
  },
  {
    id: "cinnamon-milk", cat: "sahlab", icon: "steam", price: 11, popular: false,
    name: { ar: "حليب بالقرفة", en: "Cinnamon Milk" },
    desc: {
      ar: "حليب مبخّر مع قرفة وعسل، دفء بسيط.",
      en: "Steamed milk with cinnamon and honey — simple warmth.",
    },
  },
  {
    id: "spiced-tea", cat: "sahlab", icon: "tea", price: 6, popular: false,
    name: { ar: "شاي بالمشكّلات", en: "Egyptian Spiced Tea" },
    desc: {
      ar: "شاي بالقرنفل والحبهان والقرفة على الطريقة المصرية.",
      en: "Tea infused with cloves, allspice and cinnamon, the Egyptian way.",
    },
  },

  // --- Cold Drinks & Juices ---
  {
    id: "iced-latte", cat: "cold", icon: "glass", price: 15, popular: false,
    name: { ar: "آيس لاتيه", en: "Iced Latte" },
    desc: {
      ar: "إسبريسو مثلج مع حليب بارد وثلج، منعش وخفيف.",
      en: "Chilled espresso with cold milk and ice — refreshing and light.",
    },
  },
  {
    id: "spanish-latte", cat: "cold", icon: "glass", price: 17, popular: true,
    name: { ar: "آيس سبانيش لاتيه", en: "Iced Spanish Latte" },
    desc: {
      ar: "حليب مكثّف محلى وإسبريسو على الثلج.",
      en: "Sweetened condensed milk and espresso poured over ice.",
    },
  },
  {
    id: "orange-juice", cat: "cold", icon: "juice", price: 15, popular: false,
    name: { ar: "عصير برتقال طازج", en: "Fresh Orange Juice" },
    desc: {
      ar: "برتقال طازج يُعصر عند الطلب.",
      en: "Fresh oranges, squeezed to order.",
    },
  },
  {
    id: "mango-juice", cat: "cold", icon: "juice", price: 16, popular: false,
    name: { ar: "عصير مانجو", en: "Mango Juice" },
    desc: {
      ar: "مانجو طبيعي كثيف، بلا سكر مضاف.",
      en: "Thick natural mango juice with no added sugar.",
    },
  },
  {
    id: "lemon-mint", cat: "cold", icon: "juice", price: 12, popular: false,
    name: { ar: "ليمون بالنعناع", en: "Lemon & Mint" },
    desc: {
      ar: "ليمون طازج ونعناع، منعش جداً في أيام الرياض الحارة.",
      en: "Fresh lemon and mint — properly refreshing on a hot Riyadh day.",
    },
  },
  {
    id: "karkade", cat: "cold", icon: "glass", price: 10, popular: false,
    name: { ar: "كركديه مثلج", en: "Iced Karkade" },
    desc: {
      ar: "كركديه بارد بلمسة ورد، أحد مشروباتنا المصرية.",
      en: "Chilled hibiscus with a rose note — one of our Egyptian favourites.",
    },
  },

  // --- Desserts ---
  {
    id: "basbousa", cat: "desserts", icon: "dessert", price: 8, popular: false,
    name: { ar: "بسبوسة", en: "Basbousa" },
    desc: {
      ar: "سميد بالقشطة والقطر، تُقدّم دافئة.",
      en: "Semolina cake with cream and syrup, served warm.",
    },
  },
  {
    id: "baklava", cat: "desserts", icon: "dessert", price: 10, popular: true,
    name: { ar: "بقلاوة", en: "Baklava" },
    desc: {
      ar: "طبقات رقيقة وفستق حلبي — قطعتان.",
      en: "Delicate layers and Aleppo pistachio — two pieces.",
    },
  },
  {
    id: "kunafa", cat: "desserts", icon: "dessert", price: 18, popular: false,
    name: { ar: "كنافة بالمكسرات", en: "Kunafa with Nuts" },
    desc: {
      ar: "كنافة ذهبية بالقشطة والفستق.",
      en: "Golden kunafa with cream and pistachio.",
    },
  },
  {
    id: "date-cake", cat: "desserts", icon: "dessert", price: 12, popular: false,
    name: { ar: "كيك التمر", en: "Date Cake" },
    desc: {
      ar: "كيك تمر سعودي مع صوص الكراميل.",
      en: "Saudi date cake with a warm caramel sauce.",
    },
  },
  {
    id: "brownie", cat: "desserts", icon: "dessert", price: 14, popular: false,
    name: { ar: "براوني شوكولاتة", en: "Chocolate Brownie" },
    desc: {
      ar: "براوني غني مع آيس كريم فانيلا.",
      en: "A rich brownie with vanilla ice cream.",
    },
  },
];

/* ------------------------------------------------------------
   3. REVIEWS — PLACEHOLDER REVIEWS for preview.
   TODO: replace these with real Google reviews before launch.
   Text lives in translations.reviews.items (keys r1–r6).
   ------------------------------------------------------------ */

const REVIEWS = [
  {
    key: "r1", placeholder: true, rating: 5,
    name: { ar: "أحمد المطيري", en: "Ahmed Al-Mutairi" },
    initial: { ar: "أ", en: "A" },
    date: { ar: "قبل أسبوعين", en: "2 weeks ago" },
  },
  {
    key: "r2", placeholder: true, rating: 5,
    name: { ar: "نورة السبيعي", en: "Noura Al-Subaie" },
    initial: { ar: "ن", en: "N" },
    date: { ar: "قبل شهر", en: "a month ago" },
  },
  {
    key: "r3", placeholder: true, rating: 4,
    name: { ar: "محمد الحربي", en: "Mohammed Al-Harbi" },
    initial: { ar: "م", en: "M" },
    date: { ar: "قبل شهرين", en: "2 months ago" },
  },
  {
    key: "r4", placeholder: true, rating: 5,
    name: { ar: "سلمى عبد الله", en: "Salma Abdullah" },
    initial: { ar: "س", en: "S" },
    date: { ar: "قبل 3 أشهر", en: "3 months ago" },
  },
  {
    key: "r5", placeholder: true, rating: 4,
    name: { ar: "فيصل القحطاني", en: "Faisal Al-Qahtani" },
    initial: { ar: "ف", en: "F" },
    date: { ar: "قبل 4 أشهر", en: "4 months ago" },
  },
  {
    key: "r6", placeholder: true, rating: 5,
    name: { ar: "ريم التميمي", en: "Reem Al-Tamimi" },
    initial: { ar: "ر", en: "R" },
    date: { ar: "قبل 5 أشهر", en: "5 months ago" },
  },
];

/* ------------------------------------------------------------
   4. GALLERY — replace the image files, keep the same names.
   Categories: drinks, vibe, outdoor.
   ------------------------------------------------------------ */

const GALLERY = [
  { id: "cezve", cat: "drinks", img: "assets/img/gallery-cezve-800.webp", w: 800, h: 1000 },
  { id: "counter", cat: "vibe", img: "assets/img/gallery-counter-800.webp", w: 800, h: 1000 },
  { id: "outdoor-lights", cat: "outdoor", img: "assets/img/gallery-outdoor-lights-800.webp", w: 800, h: 1000 },
  { id: "pour", cat: "drinks", img: "assets/img/gallery-pour-800.webp", w: 800, h: 1000 },
  { id: "baklava", cat: "vibe", img: "assets/img/gallery-baklava-800.webp", w: 800, h: 800 },
  { id: "terrace", cat: "outdoor", img: "assets/img/gallery-terrace-800.webp", w: 800, h: 600 },
  { id: "sahlab", cat: "drinks", img: "assets/img/gallery-sahlab-800.webp", w: 800, h: 1000 },
  { id: "street", cat: "outdoor", img: "assets/img/gallery-street-800.webp", w: 800, h: 1000 },
  { id: "tea", cat: "drinks", img: "assets/img/gallery-tea-800.webp", w: 800, h: 600 },
];

const GALLERY_CATEGORIES = [
  { id: "all", name: { ar: "كل الصور", en: "All photos" } },
  { id: "drinks", name: { ar: "مشروبات", en: "Drinks" } },
  { id: "vibe", name: { ar: "الأجواء", en: "Vibe" } },
  { id: "outdoor", name: { ar: "جلسات خارجية", en: "Outdoor seating" } },
];

/* ------------------------------------------------------------
   5. TRANSLATIONS — all interface copy lives here.
   Keep the same keys in both languages.
   ------------------------------------------------------------ */

const translations = {
  ar: {
    meta: {
      title: "مقهى أحسن قهوة | Best Coffee — قهوة مصرية في الرياض",
      description: "مقهى أحسن قهوة على طريق الملك سعود في حي الوشام بالرياض: قهوة مصرية على الرمل، سهلب، عصائر طازجة وجلسات خارجية حتى الثانية فجراً. Best Coffee — an Egyptian coffeehouse in Riyadh.",
    },
    a11y: {
      skip: "تخطَّ إلى المحتوى",
      home: "مقهى أحسن قهوة — الصفحة الرئيسية",
      primaryNav: "القائمة الرئيسية",
      mobileNav: "قائمة الجوال",
      theme: "تبديل الوضع الداكن",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      lang: "التبديل إلى الإنجليزية",
      instagram: "إنستغرام مقهى أحسن قهوة",
      whatsapp: "واتساب مقهى أحسن قهوة",
      maps: "موقع مقهى أحسن قهوة على خرائط Google",
      whatsappChat: "راسلنا على واتساب",
      ratingLabel: "تقييم 4.3 من 5 بناءً على 2,231 مراجعة على Google",
    },
    brand: {
      name: "مقهى أحسن قهوة",
      sub: "Best Coffee · Riyadh",
    },
    nav: {
      menu: "القائمة",
      reviews: "آراء الزوار",
      gallery: "الصور",
      about: "قصتنا",
      visit: "زورونا",
      contact: "تواصل",
    },
    actions: {
      call: "اتصل",
      callNow: "اتصل الآن",
      directions: "الاتجاهات",
      getDirections: "احصل على الاتجاهات",
      whatsapp: "واتساب",
      whatsappMessage: "مرحباً مقهى أحسن قهوة! وجدتكم على Google Maps وأرغب بالاستفسار.",
    },
    hero: {
      kicker: "من القاهرة إلى الرياض · مقهى مصري",
      titleTop: "مقهى",
      titleAccent: "أحسن قهوة",
      subtitle: "Best Coffee",
      tagline: "قهوة على الرمل، سهلب بالقرفة، وجلسة تنسيك إنك في الرياض.",
      description: "زاوية مصرية دافئة على طريق الملك سعود. نُحضّر القهوة ببطء، ونقدّم السهلاب حتى الثانية فجراً — للصباحات الهادئة والليالي الطويلة.",
      reviewsLabel: "تقييم على Google",
      googleLabel: "Google reviews",
      statusLoading: "جارٍ التحقق من المواعيد…",
      imageAlt: "فنجان قهوة مصرية على سجادة شرقية مزركشة",
      stampTop: "قهوة مصرية",
      stampBottom: "على الرمل",
      factHours: "يومياً حتى 2 صباحاً",
      factArea: "حي الوشام، الرياض",
      factPrice: "1–20 ر.س للفرد",
      openNow: "مفتوح الآن",
      closedNow: "مغلق الآن",
      closesAt: "يغلق {time}",
      opensAt: "يفتح {time}",
    },
    highlights: {
      title: "لماذا أحسن قهوة؟",
      items: [
        { icon: "lantern", label: "أجواء مصرية" },
        { icon: "cezve", label: "قهوة مصرية" },
        { icon: "steam", label: "سهلب" },
        { icon: "umbrella", label: "جلسات خارجية" },
        { icon: "bag", label: "توصيل واستلام" },
      ],
    },
    days: {
      long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    },
    menu: {
      eyebrow: "قائمتنا",
      title: "قهوة تُحضَّر على مهل",
      lead: "من قهوة الرمل المصرية إلى السهلاب الدافئ والعصائر الطازجة — أسعار بسيطة، ومذاق يستحق الجلسة.",
      tabsLabel: "أقسام القائمة",
      searchPlaceholder: "ابحث في القائمة…",
      searchLabel: "ابحث في القائمة",
      clearSearch: "مسح البحث",
      note: "الأسعار بالريال السعودي · 1–20 ر.س للفرد",
      emptyTitle: "لا يوجد صنف بهذا الاسم",
      emptyText: "جرّب كلمة أخرى، أو تصفّح كل الأقسام.",
      emptyAction: "عرض كل القائمة",
      popular: "الأكثر طلباً",
      resultsAll: "{count} صنفاً في القائمة",
      resultsCategory: "{count} صنفاً في {category}",
      resultsSearch: "{count} نتيجة لـ «{query}»",
      resultsSearchOne: "نتيجة واحدة لـ «{query}»",
      resultsCategoryOne: "صنف واحد في {category}",
      resultsAllOne: "صنف واحد في القائمة",
    },
    reviews: {
      eyebrow: "آراء الزوار",
      title: "مكان يحبّه أهل الرياض",
      lead: "4.3 نجوم من أكثر من 2,231 مراجعة على Google. شكراً لكل من جلس معنا وشاركنا تجربته.",
      reviewsLabel: "تقييم على Google",
      source: "GOOGLE REVIEWS",
      tagsTitle: "ما يحبه الزوار",
      tags: [
        { label: "أجواء مصرية", count: 50 },
        { label: "قهوة مصرية", count: 25 },
        { label: "سهلب", count: 16 },
        { label: "جلسات خارجية", count: 7 },
      ],
      carouselTitle: "ماذا يقول الزوار",
      prev: "المراجعة السابقة",
      next: "المراجعة التالية",
      trackLabel: "مراجعات الزوار",
      placeholderNote: "المراجعات المعروضة عيّنات تصميم وليست مراجعات Google الفعلية. استبدلها بمراجعات العملاء الحقيقية قبل النشر.",
      writeReview: "اكتب مراجعة على Google",
      placeholderBadge: "عيّنة",
      items: {
        r1: "أفضل قهوة مصرية جرّبتها في الرياض. القهوة على الرمل طعمها أصيل، والجلسة الخارجية تريح الأعصاب.",
        r2: "السهلب بالفستق رهيب! القشدة كثيفة والفستق طازج. صار مشروعي الشتوي المفضل.",
        r3: "مكان بسيط وروحه حلوة. القهوة التركية ممتازة والسعر مناسب جداً مقارنة بالجودة.",
        r4: "جلسة هادئة، إنترنت سريع، وقهوة مختصة. صار مكاني المفضل للعمل في الصباح.",
        r5: "طلبت قهوة مصرية وكابتشينو، الاثنين ممتازين. الخدمة سريعة والموظفون لطفاء.",
        r6: "الأجواء المصرية واضحة من أول لحظة، والموسيقى هادئة. تجربة تستحق التكرار.",
      },
    },
    gallery: {
      eyebrow: "لقطات من المقهى",
      title: "تفاصيل صغيرة، دفء كبير",
      lead: "قهوة، ضوء دافئ، وجلسات تحب تبقى فيها شوي أطول.",
      filtersLabel: "تصفية الصور",
      items: {
        cezve: "قهوة على الرمل",
        counter: "خلف الكاونتر",
        "outdoor-lights": "أضواء المساء",
        pour: "القهوة تُسكب",
        baklava: "بقلاوة بالفستق",
        terrace: "جلسة بين النباتات",
        sahlab: "سهلاب بالقرفة",
        street: "طاولة على الرصيف",
        tea: "شاي بالنعناع",
      },
    },
    about: {
      eyebrow: "قصتنا",
      title: "من القاهرة… إلى قلب الرياض",
      lead: "مقهى أحسن قهوة ليس مجرد كافيه؛ هو زاوية مصرية دافئة على طريق الملك سعود.",
      body1: "بدأت الفكرة من فنجان قهوة على الرمل، وصوت الاستكانة وهي تتقرقع، وجلسة لا تنتهي مع الأصدقاء. أردنا أن ننقل هذه البساطة إلى الرياض: قهوة تُحضّر ببطء، سهلب بالقرفة، وحلويات مصرية تُقدّم كأنك في بيت العائلة.",
      body2: "في مكاننا ستجد جلسات داخلية هادئة، وجلسات خارجية تفتح على هواء الرياض، وفريقاً يحب القهوة ويحب أن يشرح لك ما تشربه. تعال صباحاً لقهوة مختصة، أو بعد منتصف الليل لسهلب دافئ — نحن هنا حتى الثانية فجراً.",
      servicesTitle: "خدماتنا",
      imageAlt: "زاوية داخلية دافئة في مقهى أحسن قهوة",
      accentAlt: "دلة قهوة عربية وتمر",
      stamp: "قهوة مصرية",
      statRating: "تقييم Google",
      statReviews: "مراجعة",
      statPriceValue: "1–20",
      statPrice: "ريال للفرد",
      statCloseValue: "2 ص",
      statClose: "إغلاق يومي",
      signature: "أهلاً بك في بيتك",
    },
    services: {
      dineIn: "داخل المقهى",
      takeaway: "استلام من الفرع",
      delivery: "توصيل بدون تلامس",
      outdoor: "جلسات خارجية",
    },
    visit: {
      eyebrow: "زورونا",
      title: "على طريق الملك سعود",
      lead: "في حي الوشام، على بعد دقائق من وسط الرياض. مواقف قريبة، وجلسات خارجية تنتظرك.",
      hoursTitle: "ساعات العمل",
      hoursNote: "جميع المواعيد بتوقيت الرياض. آخر طلب قبل الإغلاق بـ 15 دقيقة.",
      hoursNotePlaceholder: "وقت الافتتاح مؤقت لحين تأكيد المالك. يغلق يومياً 2:00 صباحاً.",
      addressLabel: "العنوان",
      plusCodeLabel: "Plus code:",
      mapLoading: "جارٍ تحميل الخريطة…",
      mapTitle: "موقع مقهى أحسن قهوة على الخريطة",
      openMap: "افتح في Google Maps",
      nextDay: "(اليوم التالي)",
      unknown: "غير محدد",
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "كوب قهوة، أو سؤال، أو حجز جلسة؟",
      lead: "اتصل بنا، راسلنا على واتساب، أو أرسل رسالة سريعة من هنا. نرد عادةً خلال دقائق أثناء ساعات العمل.",
      phoneLabel: "اتصال",
      whatsappLabel: "واتساب",
      whatsappAction: "راسلنا الآن",
      instagramLabel: "إنستغرام",
      formTitle: "أرسل رسالة",
      formIntro: "اكتب اسمك ورسالتك، وسنفتح لك واتساب برسالة جاهزة للإرسال.",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك الكريم",
      messageLabel: "رسالتك",
      messagePlaceholder: "مثال: أرغب بحجز طاولة خارجية لشخصين الليلة…",
      submit: "إرسال عبر واتساب",
      formNote: "لا نخزّن بياناتك على هذا الموقع. ستُفتح محادثة واتساب فقط.",
      nameError: "اكتب اسماً لا يقل عن حرفين.",
      messageError: "اكتب رسالة لا تقل عن 5 أحرف.",
      formOpening: "جارٍ فتح واتساب برسالتك…",
      formPopup: "لم نتمكن من فتح واتساب تلقائياً. جرّب زر واتساب في الأعلى.",
      messageIntro: "مرحباً مقهى أحسن قهوة، اسمي {name}.",
      messageOutro: "أرسلت هذه الرسالة من موقعكم.",
    },
    footer: {
      tagline: "قهوة مصرية، سهلب دافئ، وجلسة تحس فيها إنك في بيت العائلة — في قلب الرياض.",
      explore: "استكشف",
      visit: "زورونا",
      hoursShort: "يومياً حتى 2:00 صباحاً",
      contact: "تواصل",
      ctaText: "أسرع طريقة للطلب أو السؤال هي واتساب.",
      copyright: "مقهى أحسن قهوة. جميع الحقوق محفوظة.",
      backToTop: "إلى الأعلى",
    },
    lightbox: {
      close: "إغلاق الصورة",
      prev: "الصورة السابقة",
      next: "الصورة التالية",
      counter: "{current} من {total}",
    },
    toast: {
      whatsapp: "جارٍ فتح واتساب…",
    },
  },
  en: {
    meta: {
      title: "Best Coffee | Egyptian Coffeehouse in Riyadh",
      description: "Best Coffee is an Egyptian coffeehouse on King Saud Road in Al Wisham, Riyadh: sand-brewed Egyptian coffee, sahlab, fresh juices and outdoor seating until 2 AM.",
    },
    a11y: {
      skip: "Skip to content",
      home: "Best Coffee — home",
      primaryNav: "Primary navigation",
      mobileNav: "Mobile navigation",
      theme: "Toggle dark mode",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      lang: "Switch to Arabic",
      instagram: "Best Coffee on Instagram",
      whatsapp: "Best Coffee on WhatsApp",
      maps: "Best Coffee on Google Maps",
      whatsappChat: "Chat with us on WhatsApp",
      ratingLabel: "Rated 4.3 out of 5 from 2,231 Google reviews",
    },
    brand: {
      name: "Best Coffee",
      sub: "Egyptian Coffeehouse · Riyadh",
    },
    nav: {
      menu: "Menu",
      reviews: "Reviews",
      gallery: "Gallery",
      about: "Our story",
      visit: "Visit",
      contact: "Contact",
    },
    actions: {
      call: "Call",
      callNow: "Call now",
      directions: "Directions",
      getDirections: "Get directions",
      whatsapp: "WhatsApp",
      whatsappMessage: "Hello Best Coffee! I found you on Google Maps and would like to ask a question.",
    },
    hero: {
      kicker: "From Cairo to Riyadh · An Egyptian coffeehouse",
      titleTop: "Best",
      titleAccent: "Coffee",
      subtitle: "مقهى أحسن قهوة",
      tagline: "Sand-brewed coffee, cinnamon sahlab and a seat that makes you forget you're in Riyadh.",
      description: "A warm Egyptian corner on King Saud Road. We brew slowly and serve sahlab until 2 AM — for quiet mornings and long nights.",
      reviewsLabel: "ratings",
      googleLabel: "Google reviews",
      statusLoading: "Checking opening hours…",
      imageAlt: "A cup of Egyptian coffee on a patterned oriental rug",
      stampTop: "Egyptian coffee",
      stampBottom: "Brewed on sand",
      factHours: "Open daily until 2 AM",
      factArea: "Al Wisham, Riyadh",
      factPrice: "SAR 1–20 per person",
      openNow: "Open now",
      closedNow: "Closed now",
      closesAt: "closes {time}",
      opensAt: "opens {time}",
    },
    highlights: {
      title: "Why Best Coffee?",
      items: [
        { icon: "lantern", label: "Egyptian atmosphere" },
        { icon: "cezve", label: "Egyptian coffee" },
        { icon: "steam", label: "Sahlab" },
        { icon: "umbrella", label: "Outdoor seating" },
        { icon: "bag", label: "Delivery & pickup" },
      ],
    },
    days: {
      long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    menu: {
      eyebrow: "Our menu",
      title: "Coffee made slowly",
      lead: "From Egyptian sand coffee to warm sahlab and fresh juices — honest prices and flavour worth sitting down for.",
      tabsLabel: "Menu categories",
      searchPlaceholder: "Search the menu…",
      searchLabel: "Search the menu",
      clearSearch: "Clear search",
      note: "Prices in Saudi riyals · SAR 1–20 per person",
      emptyTitle: "No dishes match that search",
      emptyText: "Try another word, or browse every category.",
      emptyAction: "Show the full menu",
      popular: "Most ordered",
      resultsAll: "{count} items on the menu",
      resultsCategory: "{count} items in {category}",
      resultsSearch: "{count} results for “{query}”",
      resultsSearchOne: "1 result for “{query}”",
      resultsCategoryOne: "1 item in {category}",
      resultsAllOne: "1 item on the menu",
    },
    reviews: {
      eyebrow: "Guest reviews",
      title: "A place Riyadh loves",
      lead: "4.3 stars from more than 2,231 Google reviews. Thank you to everyone who sat with us and shared the experience.",
      reviewsLabel: "Google reviews",
      source: "GOOGLE REVIEWS",
      tagsTitle: "What guests love",
      tags: [
        { label: "Egyptian atmosphere", count: 50 },
        { label: "Egyptian coffee", count: 25 },
        { label: "Sahlab", count: 16 },
        { label: "Outdoor seating", count: 7 },
      ],
      carouselTitle: "What guests say",
      prev: "Previous review",
      next: "Next review",
      trackLabel: "Guest reviews",
      placeholderNote: "The reviews shown are design samples, not actual Google reviews. Replace them with real customer reviews before launch.",
      writeReview: "Write a review on Google",
      placeholderBadge: "Sample",
      items: {
        r1: "The best Egyptian coffee I've had in Riyadh. The sand-brewed cup tastes authentic, and the outdoor seating is pure calm.",
        r2: "The pistachio sahlab is unreal — thick cream and fresh pistachio. It has become my winter ritual.",
        r3: "A simple place with a lovely soul. The Turkish coffee is excellent and the price is very fair for the quality.",
        r4: "Quiet corner, fast Wi-Fi and proper coffee. This is now my favourite morning workspace.",
        r5: "I ordered Egyptian coffee and a cappuccino — both excellent. Quick service and genuinely kind staff.",
        r6: "The Egyptian atmosphere hits you the moment you walk in, and the music stays soft. Worth coming back for.",
      },
    },
    gallery: {
      eyebrow: "Inside the café",
      title: "Small details, deep warmth",
      lead: "Coffee, warm light and corners you want to linger in.",
      filtersLabel: "Filter photos",
      items: {
        cezve: "Coffee on the sand",
        counter: "Behind the counter",
        "outdoor-lights": "Evening lights",
        pour: "The pour",
        baklava: "Pistachio baklava",
        terrace: "A seat among the plants",
        sahlab: "Sahlab with cinnamon",
        street: "A table on the pavement",
        tea: "Mint tea",
      },
    },
    about: {
      eyebrow: "Our story",
      title: "From Cairo… to the heart of Riyadh",
      lead: "Best Coffee is more than a café; it is a warm Egyptian corner on King Saud Road.",
      body1: "It began with a cup of coffee on the sand, the sound of the cezve bubbling and a conversation with friends that refused to end. We wanted to bring that simplicity to Riyadh: coffee made slowly, sahlab with cinnamon and Egyptian sweets served as if you were at the family table.",
      body2: "You will find quiet indoor corners, outdoor seats open to the Riyadh air, and a team that loves coffee and loves explaining what you are drinking. Come in the morning for specialty coffee, or after midnight for warm sahlab — we are here until 2 AM.",
      servicesTitle: "What we offer",
      imageAlt: "A warm interior corner at Best Coffee",
      accentAlt: "An Arabic coffee dallah and dates",
      stamp: "Egyptian coffee",
      statRating: "Google rating",
      statReviews: "reviews",
      statPriceValue: "1–20",
      statPrice: "riyals per person",
      statCloseValue: "2 AM",
      statClose: "daily closing",
      signature: "You're home here",
    },
    services: {
      dineIn: "Dine-in",
      takeaway: "Pickup",
      delivery: "No-contact delivery",
      outdoor: "Outdoor seating",
    },
    visit: {
      eyebrow: "Visit us",
      title: "On King Saud Road",
      lead: "In Al Wisham, minutes from central Riyadh. Parking nearby and outdoor seats waiting for you.",
      hoursTitle: "Opening hours",
      hoursNote: "All times are Riyadh time. Last order 15 minutes before closing.",
      hoursNotePlaceholder: "Opening time is provisional until the owner confirms it. Closes daily at 2:00 AM.",
      addressLabel: "Address",
      plusCodeLabel: "Plus code:",
      mapLoading: "Loading the map…",
      mapTitle: "Best Coffee location on the map",
      openMap: "Open in Google Maps",
      nextDay: "(next day)",
      unknown: "Not set",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "A coffee, a question or a table?",
      lead: "Call us, message us on WhatsApp, or send a quick note here. We usually reply within minutes during opening hours.",
      phoneLabel: "Call",
      whatsappLabel: "WhatsApp",
      whatsappAction: "Message us now",
      instagramLabel: "Instagram",
      formTitle: "Send a message",
      formIntro: "Add your name and message, and we'll open WhatsApp with it ready to send.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      messageLabel: "Your message",
      messagePlaceholder: "Example: I'd like to book an outdoor table for two tonight…",
      submit: "Send via WhatsApp",
      formNote: "We don't store your details on this website. A WhatsApp chat will open.",
      nameError: "Please enter at least 2 characters.",
      messageError: "Please write at least 5 characters.",
      formOpening: "Opening WhatsApp with your message…",
      formPopup: "We couldn't open WhatsApp automatically. Try the WhatsApp button above.",
      messageIntro: "Hello Best Coffee, my name is {name}.",
      messageOutro: "I sent this message from your website.",
    },
    footer: {
      tagline: "Egyptian coffee, warm sahlab and a seat that feels like the family home — in the heart of Riyadh.",
      explore: "Explore",
      visit: "Visit us",
      hoursShort: "Daily until 2:00 AM",
      contact: "Contact",
      ctaText: "WhatsApp is the fastest way to order or ask a question.",
      copyright: "Best Coffee. All rights reserved.",
      backToTop: "Back to top",
    },
    lightbox: {
      close: "Close image",
      prev: "Previous image",
      next: "Next image",
      counter: "{current} of {total}",
    },
    toast: {
      whatsapp: "Opening WhatsApp…",
    },
  },
};

/* ============================================================
   6. HELPERS
   ============================================================ */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const LANG_KEY = "bestcoffee-lang";
const THEME_KEY = "bestcoffee-theme";

let currentLang = "ar";
let activeCategory = "all";
let activeGalleryCategory = "all";
let menuQuery = "";
let visibleGallery = [];
let lightboxIndex = 0;
let lightboxTrigger = null;
let toastTimer = 0;
let reviewScrollFrame = 0;
let scrollFrame = 0;

function getPath(object, path) {
  return path.split(".").reduce((value, key) => (value == null ? undefined : value[key]), object);
}

function t(key, vars = {}) {
  let value = getPath(translations[currentLang], key);
  if (value === undefined) value = getPath(translations.ar, key);
  if (typeof value !== "string") return value === undefined ? key : value;
  return value.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
  );
}

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      default: return "&#39;";
    }
  });
}

function localeTag() {
  return currentLang === "ar" ? "ar-SA-u-nu-latn" : "en-US";
}

function formatNumber(value) {
  return new Intl.NumberFormat(localeTag()).format(value);
}

function formatRating(value) {
  return new Intl.NumberFormat(localeTag(), {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function storageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function storageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    /* Private mode or file:// can block storage — the site still works. */
  }
}

function normalizeText(value) {
  return String(value == null ? "" : value)
    .toLowerCase()
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/\s+/g, " ")
    .trim();
}

function setMeta(selector, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

const STAR_PATH = "M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.4l-6.1 3.2 1.4-6.8-5.1-4.7 6.9-.8L12 2z";

function starSvg(className = "") {
  return `<svg${className ? ` class="${className}"` : ""} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${STAR_PATH}"/></svg>`;
}

/* ---------- Inline icon set (no icon font, no extra requests) ---------- */

const ICONS = {
  cup: `<path d="M5 9h11v6.5A4.5 4.5 0 0 1 11.5 20h-2A4.5 4.5 0 0 1 5 15.5V9Z"/><path d="M16 10h1.6a3 3 0 0 1 0 6H16"/><path d="M8 3.5c-.8 1 .8 1.7 0 2.7M12 3.5c-.8 1 .8 1.7 0 2.7"/>`,
  tea: `<path d="M6 7h9v9a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V7Z"/><path d="M15 9h1.5a2.5 2.5 0 0 1 0 5H15"/><path d="M9 4c-.7.9.7 1.5 0 2.4"/>`,
  cezve: `<path d="M7 8h8l-1 9a3 3 0 0 1-3 3 3 3 0 0 1-3-3L7 8Z"/><path d="M15 10l5-2"/><path d="M6 8h10"/><path d="M9 4c-.6.8.6 1.4 0 2.2M12 3.5c-.6.8.6 1.4 0 2.2"/>`,
  dallah: `<path d="M9 7h6l1 8a4 4 0 0 1-4 4 4 4 0 0 1-4-4l1-8Z"/><path d="M12 7V4"/><path d="M8 7h8"/><path d="M16 10c3 0 4 1.5 4 3.5S18.5 17 17 17"/><path d="M10 3h4"/>`,
  steam: `<path d="M5 11h14v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-3Z"/><path d="M8 4c-.8 1 .8 1.8 0 2.8M12 3.5c-.8 1 .8 1.8 0 2.8M16 4c-.8 1 .8 1.8 0 2.8"/>`,
  glass: `<path d="M8 4h8l-1 14a3 3 0 0 1-3 3 3 3 0 0 1-3-3L8 4Z"/><path d="M8.6 10h6.8"/><path d="M14 2l2 4"/>`,
  juice: `<path d="M8 4h8l-1 14a3 3 0 0 1-3 3 3 3 0 0 1-3-3L8 4Z"/><path d="M15 3l3 3"/><circle cx="18" cy="6" r="2.2"/>`,
  dessert: `<path d="M5 20h14"/><path d="M7 20v-7l5-4 5 4v7"/><path d="M7 15h10"/><path d="M12 9V6"/><circle cx="12" cy="5" r="1.2"/>`,
  lantern: `<path d="M12 3v2M9 5h6l2 5-2 8H9l-2-8 2-5Z"/><path d="M12 8v7"/><path d="M9 21h6"/><path d="M9.5 5c0-1.5 1-2 2.5-2s2.5.5 2.5 2"/>`,
  umbrella: `<path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z"/><path d="M12 12v6a2.5 2.5 0 0 0 5 0"/><path d="M12 3v9"/>`,
  bag: `<path d="M5 8h14l-1.4 12H6.4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>`,
  expand: `<path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/>`,
};

function iconSvg(name) {
  const body = ICONS[name] || ICONS.cup;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

/* ============================================================
   7. DOM CACHE
   ============================================================ */

const dom = {
  html: document.documentElement,
  header: $("#siteHeader"),
  menuToggle: $("#menuToggle"),
  mobileNav: $("#mobileNav"),
  langToggle: $("#langToggle"),
  langToggleText: $("#langToggleText"),
  themeToggles: $$(".theme-toggle"),
  highlightsList: $("#highlightsList"),
  menuTabs: $("#menuTabs"),
  menuSearch: $("#menuSearch"),
  searchClear: $("#searchClear"),
  menuGrid: $("#menuGrid"),
  menuEmpty: $("#menuEmpty"),
  menuResultCount: $("#menuResultCount"),
  emptyReset: $("#emptyReset"),
  heroRating: $("#heroRating"),
  heroReviewCount: $("#heroReviewCount"),
  aboutRating: $("#aboutRating"),
  aboutReviews: $("#aboutReviews"),
  reviewBigRating: $("#reviewBigRating"),
  reviewCountText: $("#reviewCountText"),
  ratingBars: $("#ratingBars"),
  reviewTags: $("#reviewTags"),
  reviewsTrack: $("#reviewsTrack"),
  reviewsPrev: $("#reviewsPrev"),
  reviewsNext: $("#reviewsNext"),
  reviewsDots: $("#reviewsDots"),
  galleryFilters: $("#galleryFilters"),
  galleryGrid: $("#galleryGrid"),
  hoursTable: $("#hoursTable"),
  hoursNote: $("#hoursNote"),
  liveBadge: $("#liveBadge"),
  liveStatus: $("#liveStatus"),
  visitLiveBadge: $("#visitLiveBadge"),
  visitLiveStatus: $("#visitLiveStatus"),
  mapCard: $(".map-card"),
  googleMap: $("#googleMap"),
  lightbox: $("#lightbox"),
  lightboxImage: $("#lightboxImage"),
  lightboxCaption: $("#lightboxCaption"),
  lightboxCategory: $("#lightboxCategory"),
  lightboxCounter: $("#lightboxCounter"),
  lightboxStage: $(".lightbox__stage"),
  contactForm: $("#contactForm"),
  contactName: $("#contactName"),
  contactMessage: $("#contactMessage"),
  nameError: $("#nameError"),
  messageError: $("#messageError"),
  formStatus: $("#formStatus"),
  toast: $("#toast"),
  scrollProgress: $("#scrollProgress"),
  copyrightYear: $("#copyrightYear"),
};

/* ============================================================
   8. LANGUAGE
   ============================================================ */

function initialLanguage() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "ar" || fromUrl === "en") return fromUrl;
  } catch (error) {
    /* Ignore malformed URLs. */
  }
  const stored = storageGet(LANG_KEY);
  return stored === "ar" || stored === "en" ? stored : "ar";
}

function applyStaticTranslations() {
  dom.html.lang = currentLang;
  dom.html.dir = currentLang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  $$("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });
  $$("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });

  document.title = t("meta.title");
  setMeta('meta[name="description"]', t("meta.description"));
  setMeta('meta[property="og:title"]', t("meta.title"));
  setMeta('meta[property="og:description"]', t("meta.description"));
  setMeta('meta[property="og:locale"]', currentLang === "ar" ? "ar_SA" : "en_US");
  setMeta('meta[property="og:locale:alternate"]', currentLang === "ar" ? "en_US" : "ar_SA");
  setMeta('meta[name="twitter:title"]', t("meta.title"));
  setMeta('meta[name="twitter:description"]', t("meta.description"));

  const ratingBadge = $(".rating-badge");
  if (ratingBadge) ratingBadge.setAttribute("aria-label", t("a11y.ratingLabel"));

  dom.langToggleText.textContent = currentLang === "ar" ? "EN" : "AR";
  dom.langToggle.setAttribute("aria-label", t("a11y.lang"));
  dom.langToggle.setAttribute("lang", currentLang === "ar" ? "en" : "ar");

  updateMenuToggleLabel();
}

function updateMenuToggleLabel() {
  if (!dom.menuToggle) return;
  const isOpen = dom.menuToggle.getAttribute("aria-expanded") === "true";
  dom.menuToggle.setAttribute("aria-label", t(isOpen ? "a11y.closeMenu" : "a11y.openMenu"));
}

function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ar";
  storageSet(LANG_KEY, currentLang);

  applyStaticTranslations();
  applyConfig();
  renderNumbers();
  renderHighlights();
  renderTabs();
  renderMenu();
  renderReviews();
  renderGalleryFilters();
  renderGallery();
  refreshHours();

  dom.nameError.textContent = "";
  dom.messageError.textContent = "";
  dom.contactName.removeAttribute("aria-invalid");
  dom.contactMessage.removeAttribute("aria-invalid");
}

/* ============================================================
   9. CONFIG-BOUND LINKS + NUMBERS
   ============================================================ */

function whatsappUrl(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function bindLink(id, href) {
  const element = document.getElementById(id);
  if (element) element.href = href;
}

function applyConfig() {
  const telHref = `tel:${CONFIG.phone.tel}`;
  ["headerCall", "mobileCall", "heroCall", "visitCall", "contactPhone", "footerPhone"].forEach((id) => {
    bindLink(id, telHref);
  });

  ["heroDirections", "visitDirections"].forEach((id) => bindLink(id, CONFIG.googleDirectionsUrl));
  bindLink("mapOpen", CONFIG.googleMapsUrl);
  bindLink("footerMaps", CONFIG.googleMapsUrl);
  bindLink("reviewGoogle", CONFIG.googleReviewUrl);

  bindLink("contactInstagram", CONFIG.instagram.url);
  bindLink("footerInstagram", CONFIG.instagram.url);

  const chatUrl = whatsappUrl(t("actions.whatsappMessage"));
  ["heroWhatsapp", "contactWhatsapp", "footerWhatsapp", "footerWhatsappBtn", "floatWhatsapp"].forEach((id) => {
    bindLink(id, chatUrl);
  });

  $$('[data-config="phoneDisplay"]').forEach((element) => {
    element.textContent = CONFIG.phone.display;
  });
  $$('[data-config="address"]').forEach((element) => {
    element.textContent = CONFIG.address[currentLang];
  });
  $$('[data-config="plusCode"]').forEach((element) => {
    element.textContent = CONFIG.plusCode;
  });
  $$('[data-config="instagramHandle"]').forEach((element) => {
    element.textContent = CONFIG.instagram.handle;
  });
}

function renderNumbers() {
  const rating = formatRating(CONFIG.rating);
  const count = formatNumber(CONFIG.reviewCount);

  dom.heroRating.textContent = rating;
  dom.heroReviewCount.textContent = count;
  dom.aboutRating.textContent = rating;
  dom.aboutReviews.textContent = count;
  dom.reviewBigRating.textContent = rating;
  dom.reviewCountText.textContent = count;

  $$(".rating-stars__fill, .stars-row__fill").forEach((element) => {
    element.style.width = `${(CONFIG.rating / 5) * 100}%`;
  });
}

/* ============================================================
   10. HIGHLIGHTS
   ============================================================ */

function renderHighlights() {
  const items = t("highlights.items");
  if (!Array.isArray(items)) return;

  dom.highlightsList.innerHTML = items
    .map((item) => `<li>${iconSvg(item.icon)}<span>${escapeHtml(item.label)}</span></li>`)
    .join("");
}

/* ============================================================
   11. MENU: TABS, SEARCH, CARDS
   ============================================================ */

function syncMenuTabs() {
  $$(".tab", dom.menuTabs).forEach((tab) => {
    const selected = tab.dataset.cat === activeCategory;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  const activeTab = $(`#menuTab-${activeCategory}`);
  if (activeTab) dom.menuGrid.setAttribute("aria-labelledby", activeTab.id);
}

function renderTabs() {
  dom.menuTabs.innerHTML = CATEGORIES.map((category) => {
    const selected = category.id === activeCategory;
    return `<button class="tab" type="button" role="tab" id="menuTab-${category.id}" data-cat="${category.id}" aria-controls="menuGrid" aria-selected="${selected}" tabindex="${selected ? 0 : -1}">${escapeHtml(category.name[currentLang])}</button>`;
  }).join("");
  syncMenuTabs();
}

function filteredMenu() {
  const query = normalizeText(menuQuery);

  return MENU.filter((item) => {
    if (!query) return activeCategory === "all" || item.cat === activeCategory;

    const category = CATEGORIES.find((entry) => entry.id === item.cat);
    const haystack = normalizeText([
      item.name.ar,
      item.name.en,
      item.desc.ar,
      item.desc.en,
      category ? category.name.ar : "",
      category ? category.name.en : "",
    ].join(" "));

    return haystack.includes(query);
  });
}

function menuResultText(count) {
  if (menuQuery) {
    return count === 1
      ? t("menu.resultsSearchOne", { query: menuQuery })
      : t("menu.resultsSearch", { count: formatNumber(count), query: menuQuery });
  }

  if (activeCategory === "all") {
    return count === 1
      ? t("menu.resultsAllOne")
      : t("menu.resultsAll", { count: formatNumber(count) });
  }

  const category = CATEGORIES.find((entry) => entry.id === activeCategory);
  const name = category ? category.name[currentLang] : "";
  return count === 1
    ? t("menu.resultsCategoryOne", { category: name })
    : t("menu.resultsCategory", { count: formatNumber(count), category: name });
}

function renderMenu() {
  const items = filteredMenu();
  const category = (item) => CATEGORIES.find((entry) => entry.id === item.cat);
  const altLang = currentLang === "ar" ? "en" : "ar";

  dom.menuGrid.innerHTML = items.map((item, index) => {
    const categoryName = category(item) ? category(item).name[currentLang] : "";
    return `<article class="menu-card is-entering" style="--card-i:${index}">
      <div class="menu-card__top">
        <span class="menu-card__icon">${iconSvg(item.icon)}</span>
        ${item.popular ? `<span class="badge-popular">${starSvg()}${escapeHtml(t("menu.popular"))}</span>` : ""}
      </div>
      <h3>${escapeHtml(item.name[currentLang])}<span class="menu-card__alt">${escapeHtml(item.name[altLang])}</span></h3>
      <p class="menu-card__desc">${escapeHtml(item.desc[currentLang])}</p>
      <div class="menu-card__foot">
        <span class="menu-card__price">${formatNumber(item.price)}<small>${escapeHtml(CONFIG.currency[currentLang])}</small></span>
        <span class="menu-card__cat">${escapeHtml(categoryName)}</span>
      </div>
    </article>`;
  }).join("");

  const empty = items.length === 0;
  dom.menuGrid.hidden = empty;
  dom.menuEmpty.hidden = !empty;
  dom.menuResultCount.textContent = menuResultText(items.length);
  dom.searchClear.hidden = !menuQuery;
}

function setMenuCategory(categoryId) {
  activeCategory = CATEGORIES.some((entry) => entry.id === categoryId) ? categoryId : "all";
  if (menuQuery) {
    menuQuery = "";
    dom.menuSearch.value = "";
  }
  syncMenuTabs();
  renderMenu();
}

/* ============================================================
   12. REVIEWS
   ============================================================ */

function renderReviews() {
  const tags = t("reviews.tags");
  const texts = t("reviews.items");
  const rtl = getComputedStyle(dom.reviewsTrack).direction === "rtl";

  if (Array.isArray(tags)) {
    dom.reviewTags.innerHTML = tags
      .map((tag) => `<span class="tag">${escapeHtml(tag.label)} <b>${formatNumber(tag.count)}</b></span>`)
      .join("");
  }

  const total = CONFIG.ratingDistribution.reduce((sum, row) => sum + row.count, 0) || 1;
  dom.ratingBars.innerHTML = CONFIG.ratingDistribution
    .map((row) => {
      const width = ((row.count / total) * 100).toFixed(1);
      return `<div class="rating-bar">
        <span class="rating-bar__label">${row.stars}${starSvg()}</span>
        <span class="rating-bar__track"><span class="rating-bar__fill" style="--w:${width}%"></span></span>
        <span class="rating-bar__count">${formatNumber(row.count)}</span>
      </div>`;
    })
    .join("");

  dom.reviewsTrack.innerHTML = REVIEWS.map((review) => {
    const text = texts && texts[review.key] ? texts[review.key] : "";
    return `<article class="review-card" aria-label="${escapeHtml(review.name[currentLang])} — ${review.rating}/5">
      <div class="review-card__top">
        <span class="review-card__quote" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 5C6.5 6.6 5 9.2 5 12.8V19h6v-6H8c0-2 .8-3.4 2.6-4.4L9.5 5Zm9 0C15.5 6.6 14 9.2 14 12.8V19h6v-6h-3c0-2 .8-3.4 2.6-4.4L18.5 5Z"/></svg></span>
        <span class="review-card__stars" aria-hidden="true">${starSvg().repeat(review.rating)}</span>
      </div>
      <p class="review-card__text">${escapeHtml(text)}</p>
      <div class="review-card__footer">
        <span class="review-card__avatar" aria-hidden="true">${escapeHtml(review.initial[currentLang])}</span>
        <span class="review-card__person">
          <span class="review-card__name">${escapeHtml(review.name[currentLang])}</span>
          <span class="review-card__date">${escapeHtml(review.date[currentLang])}</span>
        </span>
        <span class="review-card__source">${starSvg()}Google</span>
      </div>
    </article>`;
  }).join("");

  dom.reviewsDots.innerHTML = REVIEWS.map((review, index) =>
    `<button class="carousel-dot" type="button" data-index="${index}" aria-label="${escapeHtml(t("reviews.carouselTitle"))} ${index + 1}" aria-current="${index === 0}"></button>`
  ).join("");

  if (rtl) dom.reviewsTrack.scrollLeft = 0;
  updateReviewDots();
}

function closestReviewIndex() {
  const cards = Array.from(dom.reviewsTrack.children);
  if (!cards.length) return 0;

  const trackRect = dom.reviewsTrack.getBoundingClientRect();
  const rtl = getComputedStyle(dom.reviewsTrack).direction === "rtl";
  const trackEdge = rtl ? trackRect.right : trackRect.left;
  let bestIndex = 0;
  let bestDistance = Infinity;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const edge = rtl ? rect.right : rect.left;
    const distance = Math.abs(edge - trackEdge);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function updateReviewDots() {
  const current = closestReviewIndex();
  $$(".carousel-dot", dom.reviewsDots).forEach((dot, index) => {
    dot.setAttribute("aria-current", String(index === current));
  });
}

function scrollReviewsTo(index) {
  const card = dom.reviewsTrack.children[index];
  if (!card) return;

  const trackRect = dom.reviewsTrack.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const rtl = getComputedStyle(dom.reviewsTrack).direction === "rtl";
  const delta = rtl ? cardRect.right - trackRect.right : cardRect.left - trackRect.left;

  dom.reviewsTrack.scrollBy({
    left: delta,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
}

function moveReview(step) {
  const count = REVIEWS.length;
  if (!count) return;
  const next = (closestReviewIndex() + step + count) % count;
  scrollReviewsTo(next);
}

/* ============================================================
   13. GALLERY + LIGHTBOX
   ============================================================ */

function galleryLabel(item) {
  return t(`gallery.items.${item.id}`);
}

function syncGalleryFilters() {
  $$(".filter-btn", dom.galleryFilters).forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.galleryCat === activeGalleryCategory));
  });
}

function renderGalleryFilters() {
  dom.galleryFilters.innerHTML = GALLERY_CATEGORIES.map((category) => {
    const selected = category.id === activeGalleryCategory;
    return `<button class="filter-btn" type="button" data-gallery-cat="${category.id}" aria-pressed="${selected}">${escapeHtml(category.name[currentLang])}</button>`;
  }).join("");
}

function renderGallery() {
  visibleGallery = GALLERY.filter(
    (item) => activeGalleryCategory === "all" || item.cat === activeGalleryCategory
  );

  dom.galleryGrid.innerHTML = visibleGallery.map((item, index) => {
    const label = galleryLabel(item);
    const category = GALLERY_CATEGORIES.find((entry) => entry.id === item.cat);
    const categoryName = category ? category.name[currentLang] : "";

    return `<button class="gallery-item is-entering" type="button" data-gallery-index="${index}" style="--gallery-i:${index}" aria-label="${escapeHtml(label)} — ${escapeHtml(categoryName)}">
      <img src="${item.img}" width="${item.w}" height="${item.h}" loading="lazy" decoding="async" alt="${escapeHtml(label)}">
      <span class="gallery-item__cat">${escapeHtml(categoryName)}</span>
      <span class="gallery-item__caption"><span>${escapeHtml(label)}</span>${iconSvg("expand")}</span>
    </button>`;
  }).join("");

  syncGalleryFilters();
}

function updateLightbox() {
  const item = visibleGallery[lightboxIndex];
  if (!item) return;

  const label = galleryLabel(item);
  const category = GALLERY_CATEGORIES.find((entry) => entry.id === item.cat);

  dom.lightboxImage.src = item.img;
  dom.lightboxImage.alt = label;
  dom.lightboxImage.width = item.w;
  dom.lightboxImage.height = item.h;
  dom.lightboxCaption.textContent = label;
  dom.lightboxCategory.textContent = category ? category.name[currentLang] : "";
  dom.lightboxCounter.textContent = t("lightbox.counter", {
    current: lightboxIndex + 1,
    total: visibleGallery.length,
  });
}

function openLightbox(index) {
  if (!visibleGallery.length) return;
  lightboxIndex = index;
  lightboxTrigger = document.activeElement;
  updateLightbox();

  if (typeof dom.lightbox.showModal === "function") {
    if (!dom.lightbox.open) dom.lightbox.showModal();
  } else {
    dom.lightbox.setAttribute("open", "");
  }
}

function closeLightbox() {
  if (typeof dom.lightbox.close === "function" && dom.lightbox.open) {
    dom.lightbox.close();
  } else {
    dom.lightbox.removeAttribute("open");
    if (lightboxTrigger) lightboxTrigger.focus();
  }
}

function stepLightbox(step) {
  if (!visibleGallery.length) return;
  lightboxIndex = (lightboxIndex + step + visibleGallery.length) % visibleGallery.length;
  updateLightbox();
}

/* ============================================================
   14. OPENING HOURS (Asia/Riyadh)
   ============================================================ */

const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function effectiveOpenTime(row) {
  return row.open === "TODO" ? PROVISIONAL_OPEN_TIME : row.open;
}

function parseTime(value) {
  const match = /^(\d{1,2}):(\d{2})$/.exec(String(value || ""));
  if (!match) return parseTime(PROVISIONAL_OPEN_TIME);
  return (Number(match[1]) % 24) * 60 + Number(match[2]);
}

function riyadhNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CONFIG.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const values = {};
  parts.forEach((part) => {
    if (part.type !== "literal") values[part.type] = part.value;
  });

  const dayIndex = DAY_SHORT.indexOf(values.weekday);
  return {
    day: dayIndex < 0 ? new Date().getDay() : dayIndex,
    minutes: (Number(values.hour) % 24) * 60 + Number(values.minute || 0),
  };
}

function hoursState(now = riyadhNow()) {
  const intervals = CONFIG.hours.map((row, index) => {
    const day = Number.isInteger(row.day) ? row.day : index;
    const open = parseTime(effectiveOpenTime(row));
    const close = parseTime(row.close);
    let duration = close - open;
    if (duration <= 0) duration += 1440;
    const start = day * 1440 + open;

    return { ...row, day, open, close, start, end: start + duration };
  });

  const nowPosition = now.day * 1440 + now.minutes;
  const current = intervals.find((interval) => nowPosition >= interval.start && nowPosition < interval.end) || null;
  let next = null;

  if (!current) {
    next = intervals
      .filter((interval) => interval.start > nowPosition)
      .sort((a, b) => a.start - b.start)[0] || null;

    if (!next) {
      next = intervals.slice().sort((a, b) => a.start - b.start)[0] || null;
    }
  }

  return { now, current, next };
}

function formatTime(minutes) {
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const date = new Date(Date.UTC(2020, 0, 1, Math.floor(normalized / 60), normalized % 60));

  return new Intl.DateTimeFormat(localeTag(), {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  }).format(date);
}

function updateLiveStatus() {
  const state = hoursState();
  const isOpen = Boolean(state.current);
  const targetMinutes = isOpen
    ? state.current.close
    : state.next
      ? state.next.open
      : null;

  let text;
  if (isOpen) {
    text = `${t("hero.openNow")} · ${t("hero.closesAt", { time: formatTime(targetMinutes) })}`;
  } else if (targetMinutes != null) {
    text = `${t("hero.closedNow")} · ${t("hero.opensAt", { time: formatTime(targetMinutes) })}`;
  } else {
    text = t("visit.unknown");
  }

  [dom.liveBadge, dom.visitLiveBadge].forEach((badge) => {
    if (badge) badge.dataset.state = isOpen ? "open" : "closed";
  });

  if (dom.liveStatus) dom.liveStatus.textContent = text;
  if (dom.visitLiveStatus) dom.visitLiveStatus.textContent = text;
}

function renderHours() {
  const { now } = hoursState();
  const isPlaceholder = OPEN_TIME === "TODO";

  dom.hoursTable.innerHTML = CONFIG.hours.map((row, index) => {
    const day = Number.isInteger(row.day) ? row.day : index;
    const open = parseTime(effectiveOpenTime(row));
    const close = parseTime(row.close);
    const closesNextDay = close <= open;
    const dayNames = t("days.long");

    return `<div class="hours-row${day === now.day ? " is-today" : ""}">
      <span class="hours-row__day">${escapeHtml(dayNames[day] || "")}</span>
      <span class="hours-row__time"${closesNextDay ? ` title="${escapeHtml(t("visit.nextDay"))}"` : ""}>${formatTime(open)} – ${formatTime(close)}</span>
    </div>`;
  }).join("");

  dom.hoursNote.textContent = isPlaceholder ? t("visit.hoursNotePlaceholder") : t("visit.hoursNote");
}

function refreshHours() {
  renderHours();
  updateLiveStatus();
}

/* ============================================================
   15. THEME
   ============================================================ */

function applyTheme(theme) {
  const dark = theme === "dark";
  dom.html.dataset.theme = dark ? "dark" : "light";

  dom.themeToggles.forEach((button) => {
    button.setAttribute("aria-pressed", String(dark));
  });

  setMeta('meta[name="theme-color"]', dark ? "#120a06" : "#1b0f09");
}

function initTheme() {
  const stored = storageGet(THEME_KEY);
  if (stored === "dark" || stored === "light") {
    applyTheme(stored);
    return;
  }

  applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

/* ============================================================
   16. MAP, REVEAL, SCROLL
   ============================================================ */

function initMap() {
  if (!dom.googleMap || !dom.mapCard) return;

  const loadMap = () => {
    const source = dom.googleMap.dataset.src;
    if (source && !dom.googleMap.src) dom.googleMap.src = source;
  };

  dom.googleMap.addEventListener("load", () => {
    dom.mapCard.classList.add("is-loaded");
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMap();
          instance.disconnect();
        }
      });
    }, { rootMargin: "320px 0px" });

    observer.observe(dom.mapCard);
  } else {
    loadMap();
  }
}

function initReveal() {
  const elements = $$("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      instance.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    observer.observe(element);
  });
}

function updateNavigation() {
  const sections = ["home", "menu", "reviews", "gallery", "about", "visit", "contact"];
  const offset = (dom.header ? dom.header.offsetHeight : 76) + 28;
  const position = window.scrollY + offset;
  let current = "home";

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= position) current = id;
  });

  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6;
  if (atBottom) current = "contact";

  $$(".site-nav a, .mobile-nav nav a").forEach((link) => {
    const active = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateScrollUi() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (dom.header) dom.header.classList.toggle("is-scrolled", scrollY > 8);

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
  if (dom.scrollProgress) dom.scrollProgress.style.transform = `scaleX(${progress})`;

  updateNavigation();
}

function onScroll() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = 0;
    updateScrollUi();
  });
}

/* ============================================================
   17. MOBILE NAV, TOAST, CONTACT FORM
   ============================================================ */

function setMobileNav(open) {
  dom.mobileNav.hidden = !open;
  dom.menuToggle.setAttribute("aria-expanded", String(open));
  updateMenuToggleLabel();
}

function showToast(message) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => dom.toast.classList.remove("is-visible"), 3400);
}

function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  if (message) {
    input.setAttribute("aria-invalid", "true");
  } else {
    input.removeAttribute("aria-invalid");
  }
}

function openWhatsAppMessage(message) {
  const link = document.createElement("a");
  link.href = whatsappUrl(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function handleContactSubmit(event) {
  event.preventDefault();

  const name = dom.contactName.value.trim();
  const message = dom.contactMessage.value.trim();
  const nameValid = name.length >= 2;
  const messageValid = message.length >= 5;

  setFieldError(dom.contactName, dom.nameError, nameValid ? "" : t("contact.nameError"));
  setFieldError(dom.contactMessage, dom.messageError, messageValid ? "" : t("contact.messageError"));

  if (!nameValid || !messageValid) {
    dom.formStatus.textContent = "";
    (nameValid ? dom.contactMessage : dom.contactName).focus();
    return;
  }

  const fullMessage = [
    t("contact.messageIntro", { name }),
    message,
    t("contact.messageOutro"),
  ].join("\n\n");

  dom.formStatus.textContent = t("contact.formOpening");
  showToast(t("contact.formOpening"));
  openWhatsAppMessage(fullMessage);
}

/* ============================================================
   18. EVENT WIRING
   ============================================================ */

function wireEvents() {
  dom.langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "ar" ? "en" : "ar");
    onScroll();
  });

  dom.themeToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const next = dom.html.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      storageSet(THEME_KEY, next);
    });
  });

  dom.menuToggle.addEventListener("click", () => {
    setMobileNav(dom.mobileNav.hidden);
  });

  dom.mobileNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMobileNav(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !dom.mobileNav.hidden) {
      setMobileNav(false);
      dom.menuToggle.focus();
    }

    if (!dom.lightbox.open) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepLightbox(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepLightbox(-1);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020 && !dom.mobileNav.hidden) setMobileNav(false);
    onScroll();
  });

  window.addEventListener("scroll", onScroll, { passive: true });

  dom.menuTabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (!tab) return;
    setMenuCategory(tab.dataset.cat);
  });

  dom.menuTabs.addEventListener("keydown", (event) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;

    const tabs = $$(".tab", dom.menuTabs);
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;

    event.preventDefault();
    const rtl = getComputedStyle(dom.menuTabs).direction === "rtl";
    let next = index;

    if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else {
      const forward = event.key === "ArrowRight" ? (rtl ? -1 : 1) : (rtl ? 1 : -1);
      next = (index + forward + tabs.length) % tabs.length;
    }

    tabs[next].focus();
    tabs[next].click();
  });

  dom.menuSearch.addEventListener("input", () => {
    menuQuery = dom.menuSearch.value.trim();
    if (menuQuery && activeCategory !== "all") {
      activeCategory = "all";
      syncMenuTabs();
    }
    renderMenu();
  });

  dom.searchClear.addEventListener("click", () => {
    menuQuery = "";
    dom.menuSearch.value = "";
    renderMenu();
    dom.menuSearch.focus();
  });

  dom.emptyReset.addEventListener("click", () => {
    menuQuery = "";
    dom.menuSearch.value = "";
    activeCategory = "all";
    syncMenuTabs();
    renderMenu();
    dom.menuSearch.focus();
  });

  dom.reviewsPrev.addEventListener("click", () => moveReview(-1));
  dom.reviewsNext.addEventListener("click", () => moveReview(1));

  dom.reviewsDots.addEventListener("click", (event) => {
    const dot = event.target.closest(".carousel-dot");
    if (!dot) return;
    scrollReviewsTo(Number(dot.dataset.index));
  });

  dom.reviewsTrack.addEventListener("scroll", () => {
    if (reviewScrollFrame) return;
    reviewScrollFrame = window.requestAnimationFrame(() => {
      reviewScrollFrame = 0;
      updateReviewDots();
    });
  }, { passive: true });

  dom.reviewsTrack.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const rtl = getComputedStyle(dom.reviewsTrack).direction === "rtl";
    const forward = event.key === "ArrowRight" ? (rtl ? -1 : 1) : (rtl ? 1 : -1);
    moveReview(forward);
  });

  dom.galleryFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    activeGalleryCategory = button.dataset.galleryCat;
    renderGallery();
  });

  dom.galleryGrid.addEventListener("click", (event) => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    openLightbox(Number(item.dataset.galleryIndex));
  });

  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  $("#lightboxNext").addEventListener("click", () => stepLightbox(1));

  dom.lightbox.addEventListener("click", (event) => {
    if (event.target === dom.lightbox) closeLightbox();
  });

  dom.lightbox.addEventListener("close", () => {
    if (lightboxTrigger) lightboxTrigger.focus();
  });

  let swipeStartX = 0;
  let swipeStartY = 0;

  dom.lightboxStage.addEventListener("pointerdown", (event) => {
    swipeStartX = event.clientX;
    swipeStartY = event.clientY;
  });

  dom.lightboxStage.addEventListener("pointerup", (event) => {
    const dx = event.clientX - swipeStartX;
    const dy = event.clientY - swipeStartY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) stepLightbox(dx < 0 ? 1 : -1);
  });

  dom.contactForm.addEventListener("submit", handleContactSubmit);

  [dom.contactName, dom.contactMessage].forEach((input) => {
    input.addEventListener("input", () => {
      if (input === dom.contactName) {
        setFieldError(input, dom.nameError, "");
      } else {
        setFieldError(input, dom.messageError, "");
      }
      dom.formStatus.textContent = "";
    });
  });

  $("#floatWhatsapp").addEventListener("click", () => showToast(t("toast.whatsapp")));

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshHours();
  });
}

/* ============================================================
   19. BOOT
   ============================================================ */

function init() {
  initTheme();
  applyLanguage(initialLanguage());

  wireEvents();
  initReveal();
  initMap();

  dom.copyrightYear.textContent = new Date().getFullYear();
  updateScrollUi();

  window.setInterval(refreshHours, 60000);
}

init();

