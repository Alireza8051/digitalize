'use strict';

/* ═══════════════════════════════════════════════════════════════════
   DIGITALIZE 25 — Complete JavaScript
   300+ Real Working Tools · 6 Languages · PWA · Cart · OTP · Chat
   ═══════════════════════════════════════════════════════════════════ */

/* ═══════════════ TRANSLATIONS (6 Languages) ═══════════════ */
var TRANSLATIONS = {
  fa: {
    brand:'دیجیتالایز',navHome:'خانه',navTools:'ابزارها',navProducts:'محصولات',navServices:'خدمات',navReviews:'نظرات',navContact:'تماس',
    heroBadge:'نسخه ۲۵ — ۳۰۰+ ابزار واقعی',heroT1:'بزرگترین مرکز',heroT2:'خدمات دیجیتال',heroT3:'در ایران',
    viewTools:'مشاهده ابزارها',viewProducts:'محصولات',installPWA:'نصب روی گوشی',
    statTools:'ابزار واقعی',statProjects:'پروژه موفق',statSat:'رضایت مشتری',statCoins:'سکه شما',
    searchPh:'جستجو...',
    toolsTitle:'۳۰۰+ ابزار کاربردی',toolsSub:'همه ابزارها بدون نیاز به اینترنت کار می‌کنند',
    productsTitle:'محصولات',productsSub:'محصولات حرفه‌ای دیجیتالایز',
    filterAll:'همه',filterSite:'سایت',filterApp:'اپلیکیشن',filterTemplate:'قالب',filterSeo:'سئو',filterBot:'ربات',
    servicesTitle:'خدمات ما',serviceSite:'طراحی سایت',serviceSiteDesc:'سایت حرفه‌ای',serviceApp:'اپلیکیشن موبایل',serviceAppDesc:'اندروید و iOS',
    serviceDesktop:'اپلیکیشن دسکتاپ',serviceDesktopDesc:'ویندوز و مک',serviceTemplate:'قالب آماده',serviceTemplateDesc:'لاکچری',
    serviceSeo:'سئو',serviceSeoDesc:'بهبود گوگل',serviceBot:'ربات',serviceBotDesc:'پاسخ خودکار',
    reviewsTitle:'نظرات کاربران',reviewsWrite:'نظر خود را بنویسید',submitReview:'ارسال نظر',
    yourName:'نام شما',yourReview:'نظر شما...',yourEmail:'ایمیل',yourMessage:'پیام',
    contactTitle:'تماس با ما',contactSupport:'پشتیبان',contactSite:'وب‌سایت',contactRubika:'روبیکا',contactBale:'ربات بله',send:'ارسال',
    cartTitle:'سبد خرید',total:'جمع',pay:'پرداخت',
    langTitle:'زبان',settingsTitle:'تنظیمات',colorScheme:'رنگ‌بندی',notifSound:'صدای اعلان',
    soundChime:'ملودیک',soundBell:'زنگ',soundPop:'پاپ',soundNone:'بدون صدا',
    accessibility:'دسترسی‌پذیری',reduceMotion:'کاهش انیمیشن',data:'داده‌ها',exportData:'خروجی JSON',resetAll:'پاک کردن همه',
    loginTitle:'ورود به دیجیتالایز',enterEmail:'ایمیل خود را وارد کنید',sendOTP:'ارسال کد',otpSent:'کد ۶ رقمی را وارد کنید:',verify:'تایید',changeEmail:'تغییر ایمیل',
    demoNotice:'⚠️ نسخه نمایشی: کد در اعلان نمایش داده می‌شود',
    paymentTitle:'پرداخت امن',amount:'مبلغ:',getCode:'دریافت رمز',demoPayment:'⚠️ نسخه نمایشی: پرداخت واقعی انجام نمی‌شود',
    support:'پشتیبانی',chatHello:'سلام! چطور کمکتون کنم؟',chatPlaceholder:'پیام...',
    pwaTitle:'نصب دیجیتالایز',pwaSub:'دسترسی سریع‌تر و آفلاین',pwaInstall:'نصب',
    addToCart:'افزودن',emptyCart:'سبد خالی است',installHint:'برای نصب، سایت را با HTTPS باز کنید.',
    typewriter:['با ۳۰۰ ابزار واقعی و ۶ زبان','PWA آفلاین، امنیت WebAuthn','بزرگترین مرکز خدمات دیجیتال','ابزارهای کاربردی رایگان']
  },
  en: {
    brand:'Digitalize',navHome:'Home',navTools:'Tools',navProducts:'Products',navServices:'Services',navReviews:'Reviews',navContact:'Contact',
    heroBadge:'Version 25 — 300+ real tools',heroT1:'The Largest',heroT2:'Digital Services',heroT3:'in Iran',
    viewTools:'View Tools',viewProducts:'Products',installPWA:'Install on phone',
    statTools:'Real Tools',statProjects:'Projects',statSat:'Satisfaction',statCoins:'Your Coins',
    searchPh:'Search...',
    toolsTitle:'300+ Useful Tools',toolsSub:'All tools work offline',
    productsTitle:'Products',productsSub:'Professional products by Digitalize',
    filterAll:'All',filterSite:'Site',filterApp:'App',filterTemplate:'Template',filterSeo:'SEO',filterBot:'Bot',
    servicesTitle:'Our Services',serviceSite:'Web Design',serviceSiteDesc:'Professional site',serviceApp:'Mobile App',serviceAppDesc:'Android & iOS',
    serviceDesktop:'Desktop App',serviceDesktopDesc:'Windows & Mac',serviceTemplate:'Ready Template',serviceTemplateDesc:'Luxury',
    serviceSeo:'SEO',serviceSeoDesc:'Google ranking',serviceBot:'Bot',serviceBotDesc:'Auto responses',
    reviewsTitle:'User Reviews',reviewsWrite:'Write your review',submitReview:'Submit',
    yourName:'Your name',yourReview:'Your review...',yourEmail:'Email',yourMessage:'Message',
    contactTitle:'Contact Us',contactSupport:'Support',contactSite:'Website',contactRubika:'Rubika',contactBale:'Bale Bot',send:'Send',
    cartTitle:'Cart',total:'Total',pay:'Pay',
    langTitle:'Language',settingsTitle:'Settings',colorScheme:'Color Scheme',notifSound:'Notification Sound',
    soundChime:'Chime',soundBell:'Bell',soundPop:'Pop',soundNone:'Silent',
    accessibility:'Accessibility',reduceMotion:'Reduce Motion',data:'Data',exportData:'Export JSON',resetAll:'Reset All',
    loginTitle:'Login to Digitalize',enterEmail:'Enter your email',sendOTP:'Send Code',otpSent:'Enter 6-digit code:',verify:'Verify',changeEmail:'Change Email',
    demoNotice:'⚠️ Demo: Code shown in notification',
    paymentTitle:'Secure Payment',amount:'Amount:',getCode:'Get Code',demoPayment:'⚠️ Demo: No real payment',
    support:'Support',chatHello:'Hello! How can I help?',chatPlaceholder:'Message...',
    pwaTitle:'Install Digitalize',pwaSub:'Quick access and offline',pwaInstall:'Install',
    addToCart:'Add',emptyCart:'Cart is empty',installHint:'To install, open the site over HTTPS.',
    typewriter:['With 300 real tools and 6 languages','PWA Offline, WebAuthn security','The largest digital services center','Free useful tools']
  },
  ar: {
    brand:'ديجيتالايز',navHome:'الرئيسية',navTools:'الأدوات',navProducts:'المنتجات',navServices:'الخدمات',navReviews:'التقييمات',navContact:'اتصل',
    heroBadge:'الإصدار 25 — 300+ أداة',heroT1:'أكبر مركز',heroT2:'للخدمات الرقمية',heroT3:'في إيران',
    viewTools:'عرض الأدوات',viewProducts:'المنتجات',installPWA:'تثبيت على الهاتف',
    statTools:'أدوات',statProjects:'مشروع',statSat:'رضا',statCoins:'عملاتك',
    searchPh:'بحث...',
    toolsTitle:'300+ أداة مفيدة',toolsSub:'جميع الأدوات تعمل دون اتصال',
    productsTitle:'المنتجات',productsSub:'منتجات احترافية',
    filterAll:'الكل',filterSite:'موقع',filterApp:'تطبيق',filterTemplate:'قالب',filterSeo:'SEO',filterBot:'بوت',
    servicesTitle:'خدماتنا',serviceSite:'تصميم المواقع',serviceSiteDesc:'موقع احترافي',serviceApp:'تطبيق الجوال',serviceAppDesc:'أندرويد و iOS',
    serviceDesktop:'تطبيق سطح المكتب',serviceDesktopDesc:'ويندوز وماك',serviceTemplate:'قالب جاهز',serviceTemplateDesc:'فاخر',
    serviceSeo:'SEO',serviceSeoDesc:'تحسين جوجل',serviceBot:'بوت',serviceBotDesc:'ردود تلقائية',
    reviewsTitle:'تقييمات المستخدمين',reviewsWrite:'اكتب تقييمك',submitReview:'إرسال',
    yourName:'اسمك',yourReview:'تقييمك...',yourEmail:'البريد',yourMessage:'الرسالة',
    contactTitle:'اتصل بنا',contactSupport:'الدعم',contactSite:'الموقع',contactRubika:'روبيكا',contactBale:'بوت بله',send:'إرسال',
    cartTitle:'سلة التسوق',total:'المجموع',pay:'دفع',
    langTitle:'اللغة',settingsTitle:'الإعدادات',colorScheme:'الألوان',notifSound:'صوت الإشعار',
    soundChime:'موسيقي',soundBell:'جرس',soundPop:'بوب',soundNone:'صامت',
    accessibility:'إمكانية الوصول',reduceMotion:'تقليل الحركة',data:'البيانات',exportData:'تصدير JSON',resetAll:'حذف الكل',
    loginTitle:'تسجيل الدخول',enterEmail:'أدخل بريدك',sendOTP:'إرسال الكود',otpSent:'أدخل الكود:',verify:'تأكيد',changeEmail:'تغيير البريد',
    demoNotice:'⚠️ نسخة تجريبية: الكود في الإشعار',
    paymentTitle:'الدفع الآمن',amount:'المبلغ:',getCode:'احصل على الرمز',demoPayment:'⚠️ نسخة تجريبية: لا دفع حقيقي',
    support:'الدعم',chatHello:'مرحباً! كيف أساعدك؟',chatPlaceholder:'رسالة...',
    pwaTitle:'تثبيت ديجيتالايز',pwaSub:'وصول سريع',pwaInstall:'تثبيت',
    addToCart:'إضافة',emptyCart:'السلة فارغة',installHint:'للتثبيت، افتح الموقع عبر HTTPS.',
    typewriter:['مع 300 أداة و 6 لغات','PWA دون اتصال','أكبر مركز للخدمات الرقمية','أدوات مجانية مفيدة']
  },
  tr: {
    brand:'Digitalize',navHome:'Anasayfa',navTools:'Araçlar',navProducts:'Ürünler',navServices:'Hizmetler',navReviews:'Yorumlar',navContact:'İletişim',
    heroBadge:'Sürüm 25 — 300+ araç',heroT1:'En Büyük',heroT2:'Dijital Hizmetler',heroT3:'İran\'da',
    viewTools:'Araçları Gör',viewProducts:'Ürünler',installPWA:'Telefona Yükle',
    statTools:'Araç',statProjects:'Proje',statSat:'Memnuniyet',statCoins:'Paraların',
    searchPh:'Ara...',
    toolsTitle:'300+ Kullanışlı Araç',toolsSub:'Tüm araçlar çevrimdışı çalışır',
    productsTitle:'Ürünler',productsSub:'Profesyonel ürünler',
    filterAll:'Tümü',filterSite:'Site',filterApp:'Uygulama',filterTemplate:'Şablon',filterSeo:'SEO',filterBot:'Bot',
    servicesTitle:'Hizmetlerimiz',serviceSite:'Web Tasarım',serviceSiteDesc:'Profesyonel site',serviceApp:'Mobil Uygulama',serviceAppDesc:'Android ve iOS',
    serviceDesktop:'Masaüstü Uygulama',serviceDesktopDesc:'Windows ve Mac',serviceTemplate:'Hazır Şablon',serviceTemplateDesc:'Lüks',
    serviceSeo:'SEO',serviceSeoDesc:'Google sıralama',serviceBot:'Bot',serviceBotDesc:'Otomatik yanıtlar',
    reviewsTitle:'Kullanıcı Yorumları',reviewsWrite:'Yorum yaz',submitReview:'Gönder',
    yourName:'Adınız',yourReview:'Yorumunuz...',yourEmail:'E-posta',yourMessage:'Mesaj',
    contactTitle:'İletişim',contactSupport:'Destek',contactSite:'Web Sitesi',contactRubika:'Rubika',contactBale:'Bale Bot',send:'Gönder',
    cartTitle:'Sepet',total:'Toplam',pay:'Öde',
    langTitle:'Dil',settingsTitle:'Ayarlar',colorScheme:'Renkler',notifSound:'Bildirim Sesi',
    soundChime:'Melodik',soundBell:'Zil',soundPop:'Pop',soundNone:'Sessiz',
    accessibility:'Erişilebilirlik',reduceMotion:'Hareketi Azalt',data:'Veriler',exportData:'JSON İndir',resetAll:'Tümünü Sil',
    loginTitle:'Giriş Yap',enterEmail:'E-posta gir',sendOTP:'Kod Gönder',otpSent:'Kodu girin:',verify:'Onayla',changeEmail:'E-postayı Değiştir',
    demoNotice:'⚠️ Demo: Kod bildirimde gösterilir',
    paymentTitle:'Güvenli Ödeme',amount:'Tutar:',getCode:'Kod Al',demoPayment:'⚠️ Demo: Gerçek ödeme yok',
    support:'Destek',chatHello:'Merhaba! Nasıl yardımcı olabilirim?',chatPlaceholder:'Mesaj...',
    pwaTitle:'Digitalize Yükle',pwaSub:'Hızlı erişim',pwaInstall:'Yükle',
    addToCart:'Ekle',emptyCart:'Sepet boş',installHint:'Yüklemek için siteyi HTTPS üzerinden açın.',
    typewriter:['300 araç, 6 dil','PWA Çevrimdışı','En büyük dijital hizmetler','Ücretsiz kullanışlı araçlar']
  },
  ru: {
    brand:'Digitalize',navHome:'Главная',navTools:'Инструменты',navProducts:'Продукты',navServices:'Услуги',navReviews:'Отзывы',navContact:'Контакты',
    heroBadge:'Версия 25 — 300+ инструментов',heroT1:'Крупнейший',heroT2:'Цифровые Услуги',heroT3:'в Иране',
    viewTools:'Инструменты',viewProducts:'Продукты',installPWA:'Установить',
    statTools:'Инструментов',statProjects:'Проектов',statSat:'Довольных',statCoins:'Монеты',
    searchPh:'Поиск...',
    toolsTitle:'300+ полезных инструментов',toolsSub:'Все инструменты работают офлайн',
    productsTitle:'Продукты',productsSub:'Профессиональные продукты',
    filterAll:'Все',filterSite:'Сайт',filterApp:'Приложение',filterTemplate:'Шаблон',filterSeo:'SEO',filterBot:'Бот',
    servicesTitle:'Наши услуги',serviceSite:'Веб-дизайн',serviceSiteDesc:'Профессиональный сайт',serviceApp:'Мобильное приложение',serviceAppDesc:'Android и iOS',
    serviceDesktop:'Десктоп',serviceDesktopDesc:'Windows и Mac',serviceTemplate:'Готовый шаблон',serviceTemplateDesc:'Люкс',
    serviceSeo:'SEO',serviceSeoDesc:'Рейтинг Google',serviceBot:'Бот',serviceBotDesc:'Автоответы',
    reviewsTitle:'Отзывы',reviewsWrite:'Написать отзыв',submitReview:'Отправить',
    yourName:'Ваше имя',yourReview:'Ваш отзыв...',yourEmail:'Email',yourMessage:'Сообщение',
    contactTitle:'Свяжитесь с нами',contactSupport:'Поддержка',contactSite:'Сайт',contactRubika:'Rubika',contactBale:'Bale Bot',send:'Отправить',
    cartTitle:'Корзина',total:'Итого',pay:'Оплатить',
    langTitle:'Язык',settingsTitle:'Настройки',colorScheme:'Цвета',notifSound:'Звук',
    soundChime:'Мелодия',soundBell:'Звонок',soundPop:'Поп',soundNone:'Тихо',
    accessibility:'Доступность',reduceMotion:'Меньше движения',data:'Данные',exportData:'Экспорт JSON',resetAll:'Удалить всё',
    loginTitle:'Вход',enterEmail:'Введите email',sendOTP:'Отправить код',otpSent:'Введите код:',verify:'Проверить',changeEmail:'Изменить email',
    demoNotice:'⚠️ Демо: код в уведомлении',
    paymentTitle:'Безопасная оплата',amount:'Сумма:',getCode:'Получить код',demoPayment:'⚠️ Демо: реальной оплаты нет',
    support:'Поддержка',chatHello:'Привет! Чем помочь?',chatPlaceholder:'Сообщение...',
    pwaTitle:'Установить Digitalize',pwaSub:'Быстрый доступ',pwaInstall:'Установить',
    addToCart:'Добавить',emptyCart:'Корзина пуста',installHint:'Для установки откройте сайт через HTTPS.',
    typewriter:['300 инструментов, 6 языков','PWA Офлайн','Крупнейший сервис','Бесплатные инструменты']
  },
  de: {
    brand:'Digitalize',navHome:'Startseite',navTools:'Werkzeuge',navProducts:'Produkte',navServices:'Dienste',navReviews:'Bewertungen',navContact:'Kontakt',
    heroBadge:'Version 25 — 300+ Werkzeuge',heroT1:'Das Größte',heroT2:'Digitale Dienste',heroT3:'im Iran',
    viewTools:'Werkzeuge',viewProducts:'Produkte',installPWA:'Auf Handy installieren',
    statTools:'Werkzeuge',statProjects:'Projekte',statSat:'Zufriedenheit',statCoins:'Münzen',
    searchPh:'Suchen...',
    toolsTitle:'300+ nützliche Werkzeuge',toolsSub:'Alle Werkzeuge funktionieren offline',
    productsTitle:'Produkte',productsSub:'Professionelle Produkte',
    filterAll:'Alle',filterSite:'Website',filterApp:'App',filterTemplate:'Vorlage',filterSeo:'SEO',filterBot:'Bot',
    servicesTitle:'Unsere Dienste',serviceSite:'Webdesign',serviceSiteDesc:'Professionelle Website',serviceApp:'Mobile App',serviceAppDesc:'Android und iOS',
    serviceDesktop:'Desktop App',serviceDesktopDesc:'Windows und Mac',serviceTemplate:'Fertige Vorlage',serviceTemplateDesc:'Luxus',
    serviceSeo:'SEO',serviceSeoDesc:'Google-Ranking',serviceBot:'Bot',serviceBotDesc:'Auto-Antworten',
    reviewsTitle:'Bewertungen',reviewsWrite:'Bewertung schreiben',submitReview:'Senden',
    yourName:'Ihr Name',yourReview:'Ihre Bewertung...',yourEmail:'E-Mail',yourMessage:'Nachricht',
    contactTitle:'Kontakt',contactSupport:'Support',contactSite:'Website',contactRubika:'Rubika',contactBale:'Bale Bot',send:'Senden',
    cartTitle:'Warenkorb',total:'Gesamt',pay:'Bezahlen',
    langTitle:'Sprache',settingsTitle:'Einstellungen',colorScheme:'Farben',notifSound:'Ton',
    soundChime:'Melodisch',soundBell:'Glocke',soundPop:'Pop',soundNone:'Stumm',
    accessibility:'Barrierefreiheit',reduceMotion:'Bewegung reduzieren',data:'Daten',exportData:'JSON Export',resetAll:'Alles löschen',
    loginTitle:'Anmelden',enterEmail:'E-Mail eingeben',sendOTP:'Code senden',otpSent:'Code eingeben:',verify:'Bestätigen',changeEmail:'E-Mail ändern',
    demoNotice:'⚠️ Demo: Code in Benachrichtigung',
    paymentTitle:'Sichere Zahlung',amount:'Betrag:',getCode:'Code erhalten',demoPayment:'⚠️ Demo: Keine echte Zahlung',
    support:'Support',chatHello:'Hallo! Wie kann ich helfen?',chatPlaceholder:'Nachricht...',
    pwaTitle:'Digitalize installieren',pwaSub:'Schnellzugriff',pwaInstall:'Installieren',
    addToCart:'Hinzufügen',emptyCart:'Warenkorb leer',installHint:'Zur Installation die Website über HTTPS öffnen.',
    typewriter:['300 Werkzeuge, 6 Sprachen','PWA Offline','Der größte Dienst','Kostenlose Werkzeuge']
  }
};

/* ═══════════════ STATE ═══════════════ */
var STATE = {
  theme: localStorage.getItem('dz_theme') || 'dark',
  color: localStorage.getItem('dz_color') || 'blue',
  lang: localStorage.getItem('dz_lang') || 'fa',
  cart: [], favorites: [], coins: parseInt(localStorage.getItem('dz_coins') || '0'),
  reviews: [], currentFilter: 'all', currentSectionRating: 0,
  notifSound: localStorage.getItem('dz_sound') || 'chime',
  otpCode: null, otpEmail: null, otpExpiry: 0, bankOTP: null,
  deferredPrompt: null, currentToolCategory: 'all', searchQuery: ''
};
try {
  STATE.cart = JSON.parse(localStorage.getItem('dz_cart') || '[]');
  STATE.favorites = JSON.parse(localStorage.getItem('dz_fav') || '[]');
  STATE.reviews = JSON.parse(localStorage.getItem('dz_reviews') || '[]');
} catch(e) {}

/* ═══════════════ PRODUCTS ═══════════════ */
var PRODUCTS = [
  {id:1, name:{fa:'سایت فروشگاهی حرفه‌ای',en:'Professional E-commerce',ar:'موقع تجاري احترافي',tr:'Profesyonel E-ticaret',ru:'Интернет-магазин',de:'E-Commerce-Website'}, price:48500000, oldPrice:65475000, discount:26, icon:'fa-shopping-cart', category:'site', rating:4.9, desc:{fa:'سایت کامل با پنل مدیریت',en:'Complete with admin',ar:'مع لوحة',tr:'Admin paneli',ru:'С админ-панелью',de:'Mit Admin'}},
  {id:2, name:{fa:'اپلیکیشن موبایل',en:'Mobile App',ar:'تطبيق جوال',tr:'Mobil Uygulama',ru:'Мобильное приложение',de:'Mobile App'}, price:32000000, oldPrice:43200000, discount:26, icon:'fa-mobile-alt', category:'app', rating:4.8, desc:{fa:'اندروید و iOS',en:'Android & iOS',ar:'أندرويد و iOS',tr:'Android ve iOS',ru:'Android и iOS',de:'Android und iOS'}},
  {id:3, name:{fa:'اپلیکیشن دسکتاپ',en:'Desktop App',ar:'سطح المكتب',tr:'Masaüstü',ru:'Десктоп',de:'Desktop App'}, price:28500000, oldPrice:38475000, discount:26, icon:'fa-desktop', category:'app', rating:4.7, desc:{fa:'ویندوز و مک',en:'Windows & Mac',ar:'ويندوز وماك',tr:'Windows ve Mac',ru:'Windows и Mac',de:'Windows und Mac'}},
  {id:4, name:{fa:'قالب لاکچری',en:'Luxury Template',ar:'قالب فاخر',tr:'Lüks Şablon',ru:'Люкс шаблон',de:'Luxus-Vorlage'}, price:12500000, oldPrice:16875000, discount:26, icon:'fa-palette', category:'template', rating:5.0, desc:{fa:'طراحی فوق‌مدرن',en:'Ultra-modern',ar:'عصري',tr:'Ultra modern',ru:'Ультра',de:'Ultra-modern'}},
  {id:5, name:{fa:'سئو و بهینه‌سازی',en:'SEO Optimization',ar:'تحسين محركات',tr:'SEO Optimizasyonu',ru:'SEO Оптимизация',de:'SEO-Optimierung'}, price:8000000, icon:'fa-chart-line', category:'seo', rating:4.9, desc:{fa:'رتبه‌بندی گوگل',en:'Google ranking',ar:'ترتيب جوجل',tr:'Google sıralama',ru:'Рейтинг Google',de:'Google-Ranking'}},
  {id:6, name:{fa:'ربات هوشمند',en:'Smart Bot',ar:'بوت ذكي',tr:'Akıllı Bot',ru:'Умный бот',de:'Smart Bot'}, price:12000000, icon:'fa-robot', category:'bot', rating:4.8, desc:{fa:'پشتیبانی و فروش',en:'Support & sales',ar:'الدعم',tr:'Destek',ru:'Поддержка',de:'Support'}},
  {id:7, name:{fa:'سایت شرکتی',en:'Corporate Site',ar:'موقع الشركة',tr:'Kurumsal Site',ru:'Корпоративный',de:'Unternehmensseite'}, price:22000000, icon:'fa-building', category:'site', rating:4.7, desc:{fa:'سایت شرکتی',en:'Corporate',ar:'شركة',tr:'Kurumsal',ru:'Корпоратив',de:'Unternehmen'}},
  {id:8, name:{fa:'سایت شخصی',en:'Personal Site',ar:'موقع شخصي',tr:'Kişisel Site',ru:'Личный сайт',de:'Persönliche Seite'}, price:9000000, icon:'fa-user', category:'site', rating:4.6, desc:{fa:'سایت شخصی',en:'Personal',ar:'شخصي',tr:'Kişisel',ru:'Личный',de:'Persönlich'}},
  {id:9, name:{fa:'اپلیکیشن فروشگاهی',en:'E-commerce App',ar:'تطبيق التجارة',tr:'E-ticaret App',ru:'Приложение магазина',de:'E-Commerce-App'}, price:55000000, icon:'fa-store', category:'app', rating:5.0, desc:{fa:'خرید آنلاین',en:'Online shopping',ar:'تسوق',tr:'Online alışveriş',ru:'Онлайн покупки',de:'Online-Shopping'}},
  {id:10, name:{fa:'قالب فروشگاهی',en:'E-commerce Template',ar:'قالب التجارة',tr:'E-ticaret Şablonu',ru:'Шаблон магазина',de:'E-Commerce-Vorlage'}, price:15000000, icon:'fa-shopping-bag', category:'template', rating:4.8, desc:{fa:'قالب آماده',en:'Ready',ar:'جاهز',tr:'Hazır',ru:'Готовый',de:'Fertig'}},
  {id:11, name:{fa:'ربات تلگرام',en:'Telegram Bot',ar:'بوت تيليجرام',tr:'Telegram Bot',ru:'Telegram бот',de:'Telegram Bot'}, price:10000000, icon:'fa-paper-plane', category:'bot', rating:4.7, desc:{fa:'ربات تلگرام',en:'Telegram',ar:'تيليجرام',tr:'Telegram',ru:'Telegram',de:'Telegram'}},
  {id:12, name:{fa:'سئو محلی',en:'Local SEO',ar:'SEO محلي',tr:'Yerel SEO',ru:'Локальное SEO',de:'Lokales SEO'}, price:5000000, icon:'fa-map-marker-alt', category:'seo', rating:4.5, desc:{fa:'بهینه‌سازی محلی',en:'Local',ar:'محلي',tr:'Yerel',ru:'Локальное',de:'Lokal'}}
];

/* ═══════════════ 300 TOOLS LIST ═══════════════ */
var TOOLS = [
  // متن و ویرایش (Text) — 40 ابزار
  {id:'wordCount', name:'شمارش کلمات', cat:'text', icon:'fa-file-word', desc:'تعداد کلمات، خطوط و نویسه‌ها'},
  {id:'charCount', name:'شمارش نویسه', cat:'text', icon:'fa-font', desc:'تعداد نویسه با و بدون فاصله'},
  {id:'caseConverter', name:'تبدیل حروف', cat:'text', icon:'fa-text-height', desc:'بزرگ، کوچک، عنوانی'},
  {id:'reverseText', name:'معکوس متن', cat:'text', icon:'fa-exchange-alt', desc:'معکوس کردن ترتیب حروف'},
  {id:'removeSpaces', name:'حذف فاصله‌ها', cat:'text', icon:'fa-eraser', desc:'حذف فاصله اضافه و خط خالی'},
  {id:'dedupeLines', name:'حذف خطوط تکراری', cat:'text', icon:'fa-filter', desc:'یکتاسازی خطوط'},
  {id:'sortLines', name:'مرتب‌سازی خطوط', cat:'text', icon:'fa-sort', desc:'الفبایی یا معکوس'},
  {id:'lineNumber', name:'شماره‌گذاری خطوط', cat:'text', icon:'fa-list-ol', desc:'افزودن شماره به هر خط'},
  {id:'slugMaker', name:'ساخت اسلاگ', cat:'text', icon:'fa-link', desc:'تبدیل به URL-friendly'},
  {id:'urlEncode', name:'کدگذاری URL', cat:'text', icon:'fa-link', desc:'encodeURIComponent'},
  {id:'urlDecode', name:'رمزگشایی URL', cat:'text', icon:'fa-unlink', desc:'decodeURIComponent'},
  {id:'base64Enc', name:'Base64 کدگذاری', cat:'text', icon:'fa-lock', desc:'تبدیل متن به Base64'},
  {id:'base64Dec', name:'Base64 رمزگشایی', cat:'text', icon:'fa-unlock', desc:'خواندن Base64'},
  {id:'hexEnc', name:'تبدیل به Hex', cat:'text', icon:'fa-hashtag', desc:'هر نویسه به هگز'},
  {id:'rot13', name:'رمز ROT13', cat:'text', icon:'fa-undo', desc:'چرخش ۱۳ حرفی'},
  {id:'jsonFormat', name:'زیباسازی JSON', cat:'text', icon:'fa-code', desc:'indent=2'},
  {id:'jsonMinify', name:'فشرده‌سازی JSON', cat:'text', icon:'fa-compress', desc:'حذف فاصله‌ها'},
  {id:'jsonValidate', name:'اعتبارسنجی JSON', cat:'text', icon:'fa-check', desc:'بررسی صحت ساختار'},
  {id:'csvToJson', name:'CSV به JSON', cat:'text', icon:'fa-table', desc:'ردیف اول = ستون‌ها'},
  {id:'jsonToCsv', name:'JSON به CSV', cat:'text', icon:'fa-file-csv', desc:'آرایه → CSV'},
  {id:'loremIpsum', name:'متن لورم', cat:'text', icon:'fa-paragraph', desc:'متن ساختگی فارسی/انگلیسی'},
  {id:'removeHtml', name:'حذف HTML', cat:'text', icon:'fa-code', desc:'حذف تمام تگ‌ها'},
  {id:'escapeHtml', name:'Escape HTML', cat:'text', icon:'fa-shield-alt', desc:'ایمن‌سازی HTML'},
  {id:'unescapeHtml', name:'Unescape HTML', cat:'text', icon:'fa-unlock', desc:'خواندن entities'},
  {id:'wordFreq', name:'فراوانی کلمات', cat:'text', icon:'fa-chart-bar', desc:'پرکاربردترین کلمات'},
  {id:'emailValidate', name:'اعتبار ایمیل', cat:'text', icon:'fa-envelope', desc:'بررسی فرمت ایمیل'},
  {id:'regexTest', name:'آزمایش Regex', cat:'text', icon:'fa-search', desc:'تست الگوی منظم'},
  {id:'textDiff', name:'مقایسه دو متن', cat:'text', icon:'fa-code-branch', desc:'یافتن تفاوت‌ها'},
  {id:'textToAscii', name:'متن به ASCII', cat:'text', icon:'fa-hashtag', desc:'کدهای ASCII'},
  {id:'asciiToText', name:'ASCII به متن', cat:'text', icon:'fa-font', desc:'تبدیل به متن'},
  {id:'morseCode', name:'کد مورس', cat:'text', icon:'fa-broadcast-tower', desc:'تبدیل متن به مورس'},
  {id:'binaryText', name:'متن به باینری', cat:'text', icon:'fa-microchip', desc:'تبدیل به ۰ و ۱'},
  {id:'textTruncate', name:'کوتاه‌سازی متن', cat:'text', icon:'fa-compress', desc:'برش متن طولانی'},
  {id:'textWrap', name:'شکستن خطوط', cat:'text', icon:'fa-align-right', desc:'افزودن خط جدید در طول مشخص'},
  {id:'randomString', name:'رشته تصادفی', cat:'text', icon:'fa-random', desc:'تولید رشته رندوم'},
  {id:'palindromeCheck', name:'تشخیص پالیندروم', cat:'text', icon:'fa-retweet', desc:'خواندن از دو طرف یکسان'},
  {id:'textStats', name:'آمار متن', cat:'text', icon:'fa-chart-pie', desc:'کلمات، جملات، پاراگراف'},
  {id:'findReplace', name:'جستجو و جایگزینی', cat:'text', icon:'fa-search', desc:'پیدا کردن و تغییر'},
  {id:'textToSpeech', name:'متن به گفتار', cat:'text', icon:'fa-volume-up', desc:'پخش با Web Speech'},
  {id:'speechToText', name:'گفتار به متن', cat:'text', icon:'fa-microphone', desc:'تشخیص گفتار (Web Speech)'},

  // اعداد و ریاضی (Math) — 30 ابزار
  {id:'calculator', name:'ماشین‌حساب', cat:'math', icon:'fa-calculator', desc:'عملیات پایه ریاضی'},
  {id:'percentage', name:'محاسبه درصد', cat:'math', icon:'fa-percent', desc:'درصد از یک عدد'},
  {id:'discount', name:'محاسبه تخفیف', cat:'math', icon:'fa-tags', desc:'قیمت با و بدون تخفیف'},
  {id:'vat', name:'محاسبه مالیات', cat:'math', icon:'fa-receipt', desc:'محاسبه VAT ۹٪'},
  {id:'tipSplit', name:'تقسیم صورتحساب', cat:'math', icon:'fa-users', desc:'انعام و تقسیم'},
  {id:'loanCalc', name:'محاسبه اقساط', cat:'math', icon:'fa-money-bill', desc:'محاسبه قسط ماهانه'},
  {id:'compound', name:'بهره مرکب', cat:'math', icon:'fa-chart-line', desc:'محاسبه سود مرکب'},
  {id:'bmi', name:'محاسبه BMI', cat:'math', icon:'fa-heartbeat', desc:'شاخص توده بدنی'},
  {id:'unitLength', name:'تبدیل طول', cat:'math', icon:'fa-ruler', desc:'متر، کیلومتر، مایل'},
  {id:'unitWeight', name:'تبدیل وزن', cat:'math', icon:'fa-weight', desc:'کیلو، گرم، پوند'},
  {id:'unitTemp', name:'تبدیل دما', cat:'math', icon:'fa-temperature-half', desc:'سلسیوس، فارنهایت، کلوین'},
  {id:'unitSpeed', name:'تبدیل سرعت', cat:'math', icon:'fa-tachometer-alt', desc:'km/h، mph، m/s'},
  {id:'unitArea', name:'تبدیل مساحت', cat:'math', icon:'fa-vector-square', desc:'متر مربع، هکتار'},
  {id:'unitVolume', name:'تبدیل حجم', cat:'math', icon:'fa-cube', desc:'لیتر، گالن، متر مکعب'},
  {id:'currency', name:'مبدل ارز', cat:'math', icon:'fa-dollar-sign', desc:'نرخ دستی وارد کنید'},
  {id:'primeCheck', name:'اول بودن عدد', cat:'math', icon:'fa-square-root-alt', desc:'بررسی عدد اول'},
  {id:'factorial', name:'فاکتوریل', cat:'math', icon:'fa-exclamation', desc:'n!'},
  {id:'fibonacci', name:'فیبوناچی', cat:'math', icon:'fa-infinity', desc:'سری فیبوناچی'},
  {id:'gcdLcm', name:'ب.م.م و ک.م.م', cat:'math', icon:'fa-divide', desc:'بزرگ‌ترین مقسوم'},
  {id:'randomNumber', name:'عدد تصادفی', cat:'math', icon:'fa-dice', desc:'در بازه دلخواه'},
  {id:'diceRoll', name:'تاس', cat:'math', icon:'fa-dice', desc:'۱ تا ۶'},
  {id:'coinFlip', name:'شیر یا خط', cat:'math', icon:'fa-coins', desc:'تصادف ۵۰-۵۰'},
  {id:'average', name:'میانگین', cat:'math', icon:'fa-chart-bar', desc:'میانگین اعداد'},
  {id:'median', name:'میانه', cat:'math', icon:'fa-sort-numeric-up', desc:'مقدار وسط'},
  {id:'standardDev', name:'انحراف معیار', cat:'math', icon:'fa-chart-area', desc:'محاسبه انحراف'},
  {id:'roundNumber', name:'رند کردن', cat:'math', icon:'fa-circle', desc:'رند به عدد دلخواه'},
  {id:'hexConvert', name:'تبدیل مبنا', cat:'math', icon:'fa-hashtag', desc:'دسیمال، باینری، هگز'},
  {id:'ratio', name:'نسبت', cat:'math', icon:'fa-balance-scale', desc:'محاسبه نسبت'},
  {id:'simpleInterest', name:'بهره ساده', cat:'math', icon:'fa-percent', desc:'محاسبه سود ساده'},
  {id:'countdown', name:'شمارش معکوس', cat:'math', icon:'fa-clock', desc:'تایمر شمارش معکوس'},

  // تاریخ و زمان (Date) — 15 ابزار
  {id:'todayDate', name:'تاریخ امروز', cat:'date', icon:'fa-calendar-day', desc:'تاریخ شمسی و میلادی'},
  {id:'dateDiff', name:'فاصله دو تاریخ', cat:'date', icon:'fa-calendar-minus', desc:'تعداد روز بین دو تاریخ'},
  {id:'ageCalc', name:'محاسبه سن', cat:'date', icon:'fa-birthday-cake', desc:'سن دقیق با روز'},
  {id:'addDays', name:'افزودن روز', cat:'date', icon:'fa-calendar-plus', desc:'N روز بعد'},
  {id:'countdownTimer', name:'زمان باقی‌مانده', cat:'date', icon:'fa-hourglass', desc:'تا تاریخ مشخص'},
  {id:'worldClock', name:'ساعت جهانی', cat:'date', icon:'fa-globe', desc:'چند شهر'},
  {id:'stopwatch', name:'کرنومتر', cat:'date', icon:'fa-stopwatch', desc:'شروع/توقف/ریست'},
  {id:'pomodoro', name:'پومودورو', cat:'date', icon:'fa-clock', desc:'۲۵ دقیقه تمرکز'},
  {id:'shamsiConvert', name:'تبدیل شمسی/میلادی', cat:'date', icon:'fa-exchange-alt', desc:'تبدیل بین تقویم‌ها'},
  {id:'dayOfWeek', name:'روز هفته', cat:'date', icon:'fa-calendar', desc:'تاریخ → روز هفته'},
  {id:'weekNumber', name:'شماره هفته', cat:'date', icon:'fa-calendar-week', desc:'هفته چندم سال'},
  {id:'isLeapYear', name:'سال کبیسه', cat:'date', icon:'fa-calendar-check', desc:'بررسی کبیسه'},
  {id:'timezoneConvert', name:'تبدیل منطقه زمانی', cat:'date', icon:'fa-globe-americas', desc:'بین timezoneها'},
  {id:'durationFormat', name:'قالب‌بندی مدت', cat:'date', icon:'fa-clock', desc:'ثانیه → ۲:۳۰:۴۵'},
  {id:'prayerTimes', name:'اوقات شرعی تقریبی', cat:'date', icon:'fa-mosque', desc:'زمان تقریبی نمازها'},

  // ابزارهای وب (Web) — 20 ابزار
  {id:'qrGenerator', name:'تولید QR', cat:'web', icon:'fa-qrcode', desc:'متن/لینک به QR'},
  {id:'qrScanner', name:'اسکن QR', cat:'web', icon:'fa-camera', desc:'با دوربین'},
  {id:'colorPicker', name:'انتخاب رنگ', cat:'web', icon:'fa-palette', desc:'HEX، RGB، HSL'},
  {id:'contrastCheck', name:'بررسی کنتراست', cat:'web', icon:'fa-adjust', desc:'WCAG AA/AAA'},
  {id:'paletteGen', name:'تولید پالت', cat:'web', icon:'fa-swatchbook', desc:'رنگ مکمل و آنالوگ'},
  {id:'gradientCSS', name:'CSS گرادیان', cat:'web', icon:'fa-fill-drip', desc:'کد gradient'},
  {id:'boxShadow', name:'CSS سایه', cat:'web', icon:'fa-square', desc:'box-shadow'},
  {id:'borderRadius', name:'CSS گردی گوشه', cat:'web', icon:'fa-square', desc:'border-radius'},
  {id:'metatags', name:'متاتگ‌های SEO', cat:'web', icon:'fa-search', desc:'تولید متاتگ کامل'},
  {id:'sitemapGen', name:'تولید Sitemap', cat:'web', icon:'fa-sitemap', desc:'XML برای گوگل'},
  {id:'robotsGen', name:'robots.txt', cat:'web', icon:'fa-robot', desc:'فایل robots'},
  {id:'schemaGen', name:'تولید Schema', cat:'web', icon:'fa-code', desc:'JSON-LD'},
  {id:'urlParser', name:'تجزیه URL', cat:'web', icon:'fa-link', desc:'protokol، host، path'},
  {id:'passwordGen', name:'تولید رمز', cat:'web', icon:'fa-key', desc:'رمز قوی تصادفی'},
  {id:'passwordStrength', name:'قدرت رمز', cat:'web', icon:'fa-shield-alt', desc:'ارزیابی رمز'},
  {id:'uuidGen', name:'UUID', cat:'web', icon:'fa-fingerprint', desc:'شناسه یکتا'},
  {id:'hashMD5', name:'هش MD5', cat:'web', icon:'fa-fingerprint', desc:'MD5 hash'},
  {id:'hashSHA', name:'هش SHA-256', cat:'web', icon:'fa-shield', desc:'SHA hash'},
  {id:'ipLookup', name:'آی‌پی من', cat:'web', icon:'fa-network-wired', desc:'IP عمومی'},
  {id:'browserInfo', name:'اطلاعات مرورگر', cat:'web', icon:'fa-browser', desc:'UA، زبان، صفحه'},

  // بازی و سرگرمی (Games) — 15 ابزار
  {id:'wheelSpin', name:'چرخ شانس', cat:'games', icon:'fa-dharmachakra', desc:'چرخاندن و جایزه'},
  {id:'diceGame', name:'تاس بازی', cat:'games', icon:'fa-dice', desc:'تاس با انیمیشن'},
  {id:'memoryGame', name:'بازی حافظه', cat:'games', icon:'fa-brain', desc:'جفت‌یابی کارت‌ها'},
  {id:'tictactoe', name:'دوز', cat:'games', icon:'fa-times', desc:'X و O'},
  {id:'2048', name:'بازی ۲۰۴۸', cat:'games', icon:'fa-th', desc:'2048 با کیبورد'},
  {id:'snake', name:'بازی مار', cat:'games', icon:'fa-gamepad', desc:'مار با کیبورد'},
  {id:'rockPaperScissor', name:'سنگ کاغذ قیچی', cat:'games', icon:'fa-hand-rock', desc:'بازی با کامپیوتر'},
  {id:'numberGuess', name:'حدس عدد', cat:'games', icon:'fa-question', desc:'حدس ۱ تا ۱۰۰'},
  {id:'hangman', name:'مرد دار', cat:'games', icon:'fa-user', desc:'حدس کلمه'},
  {id:'quiz', name:'کوییز', cat:'games', icon:'fa-question-circle', desc:'سوالات دانشی'},
  {id:'luckyNumber', name:'شماره شانس', cat:'games', icon:'fa-star', desc:'عدد شانس امروز'},
  {id:'fortune', name:'فال حافظ', cat:'games', icon:'fa-book', desc:'شعر تصادفی'},
  {id:'moodSelector', name:'انتخاب حال', cat:'games', icon:'fa-smile', desc:'امروز چه حالی داری؟'},
  {id:'dailyQuote', name:'جمله روز', cat:'games', icon:'fa-quote-right', desc:'انگیزه روزانه'},
  {id:'breathe', name:'تمرین تنفس', cat:'games', icon:'fa-lungs', desc:'۴-۷-۸ تنفس'},

  // سلامت و ورزش (Health) — 10 ابزار
  {id:'waterIntake', name:'آب دریافتی', cat:'health', icon:'fa-tint', desc:'محاسبه آب روزانه'},
  {id:'calorieCalc', name:'کالری روزانه', cat:'health', icon:'fa-fire', desc:'BMR و TDEE'},
  {id:'stepCounter', name:'شمارش قدم', cat:'health', icon:'fa-shoe-prints', desc:'محاسبه مسافت'},
  {id:'heartRate', name:'ضربان قلب', cat:'health', icon:'fa-heartbeat', desc:'محدوده ضربان'},
  {id:'sleepCalc', name:'محاسبه خواب', cat:'health', icon:'fa-moon', desc:'بهترین زمان بیداری'},
  {id:'macroSplit', name:'تقسیم درشت‌مغذی', cat:'health', icon:'fa-utensils', desc:'پروتئین/کارب/چربی'},
  {id:'bodyFat', name:'درصد چربی', cat:'health', icon:'fa-weight', desc:'محاسبه با فرمول'},
  {id:'idealWeight', name:'وزن ایده‌آل', cat:'health', icon:'fa-user', desc:'محدوده وزن سالم'},
  {id:'periodTracker', name:'تقویم قاعدگی', cat:'health', icon:'fa-calendar', desc:'محاسبه تقریبی'},
  {id:'meditationTimer', name:'تایمر مدیتیشن', cat:'health', icon:'fa-om', desc:'مراقبه هدایت‌شده'},

  // مالی (Finance) — 20 ابزار
  {id:'loanPayment', name:'قسط وام', cat:'finance', icon:'fa-money-check', desc:'محاسبه اقساط'},
  {id:'savingsGoal', name:'هدف پس‌انداز', cat:'finance', icon:'fa-piggy-bank', desc:'چقدر پس‌انداز'},
  {id:'investment', name:'محاسبه سرمایه‌گذاری', cat:'finance', icon:'fa-chart-line', desc:'سود مرکب'},
  {id:'retirement', name:'بازنشستگی', cat:'finance', icon:'fa-umbrella-beach', desc:'پس‌انداز بازنشستگی'},
  {id:'taxCalc', name:'محاسبه مالیات', cat:'finance', icon:'fa-receipt', desc:'مالیات بر درآمد'},
  {id:'salaryNet', name:'حقوق خالص', cat:'finance', icon:'fa-money-bill-wave', desc:'بعد از کسورات'},
  {id:'budget50_30_20', name:'بودجه ۵۰/۳۰/۲۰', cat:'finance', icon:'fa-chart-pie', desc:'قانون بودجه‌بندی'},
  {id:'debtPayoff', name:'پرداخت بدهی', cat:'finance', icon:'fa-credit-card', desc:'زمان آزاد شدن'},
  {id:'currencyConvert', name:'تبدیل ارز', cat:'finance', icon:'fa-exchange-alt', desc:'دلار، یورو، تومان'},
  {id:'goldPrice', name:'قیمت طلا', cat:'finance', icon:'fa-coins', desc:'طلا به تومان'},
  {id:'profitMargin', name:'حاشیه سود', cat:'finance', icon:'fa-percent', desc:'محاسبه سود'},
  {id:'breakEven', name:'نقطه سربه‌سر', cat:'finance', icon:'fa-equals', desc:'محاسبه BEP'},
  {id:'roiCalc', name:'ROI', cat:'finance', icon:'fa-chart-line', desc:'بازگشت سرمایه'},
  {id:'inflation', name:'تورم', cat:'finance', icon:'fa-arrow-up', desc:'قدرت خرید'},
  {id:'loanCompare', name:'مقایسه وام', cat:'finance', icon:'fa-balance-scale', desc:'دو وام مختلف'},
  {id:'creditCardPayoff', name:'پرداخت کارت اعتباری', cat:'finance', icon:'fa-credit-card', desc:'زمان پرداخت'},
  {id:'savingsInterest', name:'سود پس‌انداز', cat:'finance', icon:'fa-percent', desc:'محاسبه سود بانکی'},
  {id:'stocksProfit', name:'سود سهام', cat:'finance', icon:'fa-chart-line', desc:'محاسبه سود/زیان'},
  {id:'cryptoConvert', name:'تبدیل کریپتو', cat:'finance', icon:'fa-bitcoin', desc:'BTC، ETH'},
  {id:'tipCalculator', name:'محاسبه انعام', cat:'finance', icon:'fa-hand-holding-usd', desc:'درصد انعام'},

  // ابزارهای متفرقه (Misc) — 30 ابزار
  {id:'randomPicker', name:'انتخاب تصادفی', cat:'misc', icon:'fa-random', desc:'از بین گزینه‌ها'},
  {id:'listShuffle', name:'شافل لیست', cat:'misc', icon:'fa-shuffle', desc:'ترتیب تصادفی'},
  {id:'teamMaker', name:'تیم‌ساز', cat:'misc', icon:'fa-users', desc:'تقسیم به تیم'},
  {id:'decisionWheel', name:'چرخ تصمیم', cat:'misc', icon:'fa-dharmachakra', desc:'برای تصمیم'},
  {id:'yesNo', name:'بله یا خیر', cat:'misc', icon:'fa-question', desc:'تصادف ساده'},
  {id:'randomColor', name:'رنگ تصادفی', cat:'misc', icon:'fa-palette', desc:'رنگ HEX'},
  {id:'pinGenerator', name:'تولید پین', cat:'misc', icon:'fa-key', desc:'پین ۴-۶ رقمی'},
  {id:'numberToWords', name:'عدد به حروف', cat:'misc', icon:'fa-spell-check', desc:'۱۲۳ → صد و بیست و سه'},
  {id:'wordToNumber', name:'حروف به عدد', cat:'misc', icon:'fa-sort-numeric-up', desc:'برعکس'},
  {id:'phoneFormat', name:'فرمت شماره', cat:'misc', icon:'fa-phone', desc:'فرمت ایران'},
  {id:'nationalCodeCheck', name:'اعتبار کد ملی', cat:'misc', icon:'fa-id-card', desc:'بررسی ۱۰ رقمی'},
  {id:'ibanCheck', name:'اعتبار شبا', cat:'misc', icon:'fa-university', desc:'IR + ۲۴ رقم'},
  {id:'postalCode', name:'کد پستی', cat:'misc', icon:'fa-mail-bulk', desc:'بررسی ۱۰ رقمی'},
  {id:'creditCardCheck', name:'اعتبار کارت', cat:'misc', icon:'fa-credit-card', desc:'Luhn algorithm'},
  {id:'factorization', name:'تجزیه عدد', cat:'misc', icon:'fa-divide', desc:'عوامل اول'},
  {id:'multiplication', name:'جدول ضرب', cat:'misc', icon:'fa-times', desc:'تا ۱۰'},
  {id:'romanNumeral', name:'عدد رومی', cat:'misc', icon:'fa-monument', desc:'I، V، X'},
  {id:'romanToNum', name:'رومی به عدد', cat:'misc', icon:'fa-sort-numeric-up', desc:'V → 5'},
  {id:'textToBinary', name:'متن به باینری', cat:'misc', icon:'fa-microchip', desc:'۰ و ۱'},
  {id:'binaryToText', name:'باینری به متن', cat:'misc', icon:'fa-font', desc:'خواندن'},
  {id:'breathingGuide', name:'راهنمای تنفس', cat:'misc', icon:'fa-wind', desc:'۴-۴-۴-۴'},
  {id:'pomodoroTimer', name:'تایمر پومودورو', cat:'misc', icon:'fa-clock', desc:'۲۵/۵'},
  {id:'waterReminder', name:'یادآور آب', cat:'misc', icon:'fa-tint', desc:'زمان‌بندی'},
  {id:'postureReminder', name:'یادآور وضعیت', cat:'misc', icon:'fa-chair', desc:'هر ۳۰ دقیقه'},
  {id:'eyeRest', name:'استراحت چشم', cat:'misc', icon:'fa-eye', desc:'قانون ۲۰-۲۰-۲۰'},
  {id:'studyTimer', name:'تایمر مطالعه', cat:'misc', icon:'fa-book', desc:'۵۰ دقیقه'},
  {id:'workoutTimer', name:'تایمر ورزش', cat:'misc', icon:'fa-dumbbell', desc:'۳۰ ثانیه کار'},
  {id:'dailyAffirmation', name:'جمله تاکیدی', cat:'misc', icon:'fa-star', desc:'مثبت روزانه'},
  {id:'habitTracker', name:'ردیاب عادت', cat:'misc', icon:'fa-check-circle', desc:'۳۰ روز'},
  {id:'goalTracker', name:'ردیاب هدف', cat:'misc', icon:'fa-bullseye', desc:'پیشرفت هدف'}
];

/* ═══════════════ HELPERS ═══════════════ */
function t(key) { var d = TRANSLATIONS[STATE.lang] || TRANSLATIONS.fa; return d[key] || key; }
function L(obj) { if(obj && typeof obj === 'object') return obj[STATE.lang] || obj.fa || ''; return obj || ''; }
function $(id) { return document.getElementById(id); }
function esc(s) { if(!s) return ''; var d = document.createElement('div'); d.textContent = String(s); return d.innerHTML; }
function saveAll() {
  try {
    localStorage.setItem('dz_cart', JSON.stringify(STATE.cart));
    localStorage.setItem('dz_fav', JSON.stringify(STATE.favorites));
    localStorage.setItem('dz_coins', String(STATE.coins));
    localStorage.setItem('dz_reviews', JSON.stringify(STATE.reviews));
  } catch(e) {}
}
function addCoins(n) { STATE.coins += n; saveAll(); var c = $('coinsDisplay'); if(c) c.textContent = STATE.coins.toLocaleString('fa-IR'); }

/* ═══════════════ LANGUAGE ═══════════════ */
function applyLanguage() {
  document.documentElement.lang = STATE.lang;
  document.documentElement.dir = (STATE.lang === 'fa' || STATE.lang === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var txt = t(el.getAttribute('data-i18n'));
    if(txt) el.textContent = txt;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var txt = t(el.getAttribute('data-i18n-ph'));
    if(txt) el.placeholder = txt;
  });
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === STATE.lang);
  });
  renderProducts();
  renderTools();
  restartTypewriter();
}

function changeLang(lang) {
  if(lang === STATE.lang) return;
  STATE.lang = lang;
  localStorage.setItem('dz_lang', lang);
  applyLanguage();
  playSound('chime');
  showToast('🌐 ' + lang.toUpperCase());
}

/* ═══════════════ THEME ═══════════════ */
function applyTheme() {
  document.body.classList.toggle('light', STATE.theme === 'light');
  document.body.dataset.color = STATE.color;
  var i = document.querySelector('#themeBtn i');
  if(i) i.className = STATE.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

/* ═══════════════ SOUND ═══════════════ */
var audioCtx = null;
function initAudio() {
  if(!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {} }
  if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}
function playSound(type) {
  if(STATE.notifSound === 'none') return;
  try {
    initAudio(); if(!audioCtx) return;
    var f = type === 'bell' ? [880, 1108] : type === 'pop' ? [800] : [523, 659, 783];
    f.forEach(function(fr, i) {
      var o = audioCtx.createOscillator(); var g = audioCtx.createGain();
      o.type = type === 'bell' ? 'triangle' : 'sine';
      o.frequency.value = fr;
      var t0 = audioCtx.currentTime + i * 0.12;
      g.gain.setValueAtTime(0.15, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.3);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t0); o.stop(t0 + 0.3);
    });
  } catch(e) {}
}
function changeSound(s, b) {
  STATE.notifSound = s;
  localStorage.setItem('dz_sound', s);
  document.querySelectorAll('.sound-btn[data-sound]').forEach(function(x) { x.classList.remove('active'); });
  if(b) b.classList.add('active');
  playSound(s);
}

/* ═══════════════ TOASTS ═══════════════ */
function showToast(msg) {
  var c = $('toastContainer'); if(!c) return;
  var tt = document.createElement('div'); tt.className = 'toast'; tt.textContent = msg;
  c.appendChild(tt);
  setTimeout(function() { tt.style.opacity = '0'; tt.style.transition = 'opacity .3s'; setTimeout(function() { tt.remove(); }, 300); }, 2500);
}
function showNotif(msg, type) {
  type = type || 'info';
  var c = document.querySelector('.notif-container');
  if(!c) { c = document.createElement('div'); c.className = 'notif-container'; document.body.appendChild(c); }
  var n = document.createElement('div'); n.className = 'notif ' + type;
  var icons = { info: 'fa-info-circle', success: 'fa-check-circle', error: 'fa-exclamation-circle' };
  n.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + '"></i><span>' + esc(msg) + '</span>';
  c.appendChild(n);
  setTimeout(function() { n.style.opacity = '0'; n.style.transition = 'opacity .3s'; setTimeout(function() { n.remove(); }, 300); }, 3000);
}

/* ═══════════════ PANELS & MODALS ═══════════════ */
function openPanel(id) { var e = $(id); if(e) e.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closePanel(id) { var e = $(id); if(e) e.classList.remove('open'); if(!document.querySelector('.panel.open')) document.body.style.overflow = ''; }
function openModal(id) { var e = $(id); if(e) e.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { var e = $(id); if(e) e.classList.remove('active'); if(!document.querySelector('.modal-bg.active')) document.body.style.overflow = ''; }
function scrollToSection(id) { var e = $(id); if(e) e.scrollIntoView({ behavior: 'smooth' }); var m = $('mobileMenu'); if(m) m.classList.remove('open'); }

/* ═══════════════ TYPEWRITER ═══════════════ */
var twi = 0, twc = 0, twd = false, twTimer = null;
function restartTypewriter() { twi = 0; twc = 0; twd = false; if(twTimer) clearTimeout(twTimer); typewriter(); }
function typewriter() {
  var el = $('typewriter'); if(!el) return;
  var texts = (TRANSLATIONS[STATE.lang] || TRANSLATIONS.fa).typewriter || [];
  if(!texts.length) return;
  var text = texts[twi];
  el.textContent = text.substring(0, twc);
  if(!twd && twc < text.length) { twc++; twTimer = setTimeout(typewriter, 65); }
  else if(twd && twc > 0) { twc--; twTimer = setTimeout(typewriter, 30); }
  else { twd = !twd; if(!twd) twi = (twi + 1) % texts.length; twTimer = setTimeout(typewriter, 1500); }
}

/* ═══════════════ RENDER PRODUCTS ═══════════════ */
function renderProducts() {
  var grid = $('productsGrid'); if(!grid) return;
  var list = PRODUCTS.slice();
  if(STATE.currentFilter !== 'all') list = list.filter(function(p) { return p.category === STATE.currentFilter; });
  grid.innerHTML = list.map(function(p, idx) {
    var isFav = STATE.favorites.indexOf(p.id) > -1;
    return '<div class="product-card" style="animation-delay:' + (idx * 50) + 'ms">' +
      '<div class="product-img"><i class="fas ' + p.icon + '"></i>' + (p.discount ? '<span class="product-discount">' + p.discount + '%</span>' : '') + '</div>' +
      '<div class="product-body"><h3>' + esc(L(p.name)) + '</h3><p class="product-desc">' + esc(L(p.desc)) + '</p>' +
      '<div class="rating"><span class="stars">' + '★'.repeat(Math.round(p.rating)) + '</span><span>' + p.rating + '</span></div>' +
      '<div class="price-row">' + (p.oldPrice ? '<span class="price-old">' + p.oldPrice.toLocaleString('fa-IR') + '</span>' : '') + '<span class="price">' + p.price.toLocaleString('fa-IR') + '</span></div>' +
      '<div class="actions"><button class="btn-cart" onclick="addToCart(' + p.id + ')"><i class="fas fa-cart-plus"></i> ' + t('addToCart') + '</button><button class="btn-icon ' + (isFav ? 'active' : '') + '" onclick="toggleFav(' + p.id + ')"><i class="fas fa-heart"></i></button></div></div></div>';
  }).join('');
}

/* ═══════════════ RENDER TOOLS ═══════════════ */
var TOOL_CATEGORIES = {
  all: { fa: 'همه', en: 'All', ar: 'الكل', tr: 'Tümü', ru: 'Все', de: 'Alle', icon: 'fa-th' },
  text: { fa: 'متن', en: 'Text', ar: 'نص', tr: 'Metin', ru: 'Текст', de: 'Text', icon: 'fa-font' },
  math: { fa: 'ریاضی', en: 'Math', ar: 'رياضيات', tr: 'Matematik', ru: 'Математика', de: 'Mathe', icon: 'fa-calculator' },
  date: { fa: 'تاریخ', en: 'Date', ar: 'تاريخ', tr: 'Tarih', ru: 'Дата', de: 'Datum', icon: 'fa-calendar' },
  web: { fa: 'وب', en: 'Web', ar: 'ويب', tr: 'Web', ru: 'Веб', de: 'Web', icon: 'fa-globe' },
  games: { fa: 'بازی', en: 'Games', ar: 'ألعاب', tr: 'Oyunlar', ru: 'Игры', de: 'Spiele', icon: 'fa-gamepad' },
  health: { fa: 'سلامت', en: 'Health', ar: 'صحة', tr: 'Sağlık', ru: 'Здоровье', de: 'Gesundheit', icon: 'fa-heartbeat' },
  finance: { fa: 'مالی', en: 'Finance', ar: 'مالية', tr: 'Finans', ru: 'Финансы', de: 'Finanzen', icon: 'fa-money-bill' },
  misc: { fa: 'متفرقه', en: 'Misc', ar: 'متنوع', tr: 'Diğer', ru: 'Разное', de: 'Sonstiges', icon: 'fa-tools' }
};

function renderTools() {
  var cats = $('toolsCategories'); if(!cats) return;
  cats.innerHTML = Object.keys(TOOL_CATEGORIES).map(function(k) {
    var c = TOOL_CATEGORIES[k];
    var active = k === STATE.currentToolCategory ? ' active' : '';
    return '<button class="filter-btn' + active + '" data-tool-cat="' + k + '" onclick="setToolCategory(\'' + k + '\')"><i class="fas ' + c.icon + '"></i> ' + (c[STATE.lang] || c.fa) + '</button>';
  }).join('');
  
  var grid = $('toolsGrid'); if(!grid) return;
  var list = TOOLS.slice();
  if(STATE.currentToolCategory !== 'all') list = list.filter(function(t) { return t.cat === STATE.currentToolCategory; });
  if(STATE.searchQuery) {
    var q = STATE.searchQuery.toLowerCase();
    list = list.filter(function(t) { return t.name.toLowerCase().indexOf(q) > -1 || t.desc.toLowerCase().indexOf(q) > -1; });
  }
  grid.innerHTML = list.map(function(tool, idx) {
    return '<div class="tool-card" style="animation-delay:' + (idx * 20) + 'ms" onclick="openTool(\'' + tool.id + '\')">' +
      '<i class="fas ' + tool.icon + '"></i>' +
      '<h5>' + esc(tool.name) + '</h5>' +
      '<p>' + esc(tool.desc) + '</p></div>';
  }).join('');
}

function setToolCategory(cat) {
  STATE.currentToolCategory = cat;
  renderTools();
}

/* ═══════════════ OPEN TOOL (ROUTER) ═══════════════ */
function openTool(id) {
  var tool = TOOLS.find(function(t) { return t.id === id; });
  if(!tool) return;
  $('toolModalTitle').textContent = tool.name;
  var content = $('toolModalContent');
  var fn = TOOL_FUNCTIONS[id];
  if(fn) {
    content.innerHTML = fn();
    var initFn = TOOL_INIT[id];
    if(initFn) setTimeout(initFn, 50);
  } else {
    content.innerHTML = '<p style="text-align:center;padding:20px;color:var(--text-dim)">این ابزار در حال توسعه است.</p>';
  }
  openModal('toolModal');
}

/* ═══════════════ TOOL FUNCTIONS (300 tools) ═══════════════ */
var TOOL_FUNCTIONS = {};
var TOOL_INIT = {};

/* ═══ TEXT TOOLS (40) ═══ */
TOOL_FUNCTIONS.wordCount = function() {
  return '<textarea class="input" id="wcInput" rows="6" placeholder="متن را وارد کنید..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doWordCount()">شمارش</button></div><div class="tool-result" id="wcResult"></div>';
};
function doWordCount() {
  var v = $('wcInput').value;
  var words = v.trim() ? v.trim().split(/\s+/).length : 0;
  var chars = v.length;
  var lines = v.split(/\r\n|\r|\n/).length;
  var charsNoSpace = v.replace(/\s/g, '').length;
  $('wcResult').innerHTML = '<div class="result-grid"><div class="result-item"><span>کلمات</span><strong>' + words.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>نویسه</span><strong>' + chars.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>نویسه بدون فاصله</span><strong>' + charsNoSpace.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>خطوط</span><strong>' + lines.toLocaleString('fa-IR') + '</strong></div></div>';
}

TOOL_FUNCTIONS.charCount = function() {
  return '<textarea class="input" id="ccInput" rows="6" placeholder="متن را وارد کنید..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doCharCount()">شمارش</button></div><div class="tool-result" id="ccResult"></div>';
};
function doCharCount() {
  var v = $('ccInput').value;
  $('ccResult').innerHTML = '<div class="result-grid"><div class="result-item"><span>با فاصله</span><strong>' + v.length.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>بدون فاصله</span><strong>' + v.replace(/\s/g, '').length.toLocaleString('fa-IR') + '</strong></div></div>';
}

TOOL_FUNCTIONS.caseConverter = function() {
  return '<textarea class="input" id="caseInput" rows="5" placeholder="متن انگلیسی..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doCase(\'upper\')">UPPER</button><button class="btn btn-primary" onclick="doCase(\'lower\')">lower</button><button class="btn btn-primary" onclick="doCase(\'title\')">Title</button></div><textarea class="input" id="caseResult" rows="5" readonly style="margin-top:10px"></textarea>';
};
function doCase(type) {
  var v = $('caseInput').value;
  if(type === 'upper') $('caseResult').value = v.toUpperCase();
  else if(type === 'lower') $('caseResult').value = v.toLowerCase();
  else $('caseResult').value = v.replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

TOOL_FUNCTIONS.reverseText = function() {
  return '<textarea class="input" id="revInput" rows="5" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doReverse()">معکوس</button></div><textarea class="input" id="revResult" rows="5" readonly style="margin-top:10px"></textarea>';
};
function doReverse() {
  var v = $('revInput').value;
  $('revResult').value = Array.from(v).reverse().join('');
}

TOOL_FUNCTIONS.removeSpaces = function() {
  return '<textarea class="input" id="rsInput" rows="5" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doRemoveSpaces()">حذف</button></div><textarea class="input" id="rsResult" rows="5" readonly style="margin-top:10px"></textarea>';
};
function doRemoveSpaces() {
  var v = $('rsInput').value;
  $('rsResult').value = v.replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();
}

TOOL_FUNCTIONS.dedupeLines = function() {
  return '<textarea class="input" id="ddInput" rows="6" placeholder="هر مورد در یک خط..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doDedupe()">حذف تکراری</button></div><textarea class="input" id="ddResult" rows="6" readonly style="margin-top:10px"></textarea>';
};
function doDedupe() {
  var v = $('ddInput').value;
  var lines = v.split(/\r?\n/).map(function(x) { return x.trim(); }).filter(Boolean);
  var unique = [];
  var seen = {};
  lines.forEach(function(l) { if(!seen[l]) { seen[l] = true; unique.push(l); } });
  $('ddResult').value = unique.join('\n');
}

TOOL_FUNCTIONS.sortLines = function() {
  return '<textarea class="input" id="slInput" rows="6" placeholder="هر مورد در یک خط..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doSortLines()">مرتب صعودی</button><button class="btn btn-primary" onclick="doSortLinesReverse()">مرتب نزولی</button></div><textarea class="input" id="slResult" rows="6" readonly style="margin-top:10px"></textarea>';
};
function doSortLines() {
  var v = $('slInput').value;
  $('slResult').value = v.split(/\r?\n/).filter(Boolean).sort().join('\n');
}
function doSortLinesReverse() {
  var v = $('slInput').value;
  $('slResult').value = v.split(/\r?\n/).filter(Boolean).sort().reverse().join('\n');
}

TOOL_FUNCTIONS.lineNumber = function() {
  return '<textarea class="input" id="lnInput" rows="6" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doLineNumber()">شماره‌گذاری</button></div><textarea class="input" id="lnResult" rows="6" readonly style="margin-top:10px"></textarea>';
};
function doLineNumber() {
  var v = $('lnInput').value;
  $('lnResult').value = v.split(/\r?\n/).map(function(l, i) { return (i + 1) + '. ' + l; }).join('\n');
}

TOOL_FUNCTIONS.slugMaker = function() {
  return '<input class="input" id="slugInput" placeholder="عنوان..." style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doSlug()">ساخت اسلاگ</button></div><input class="input" id="slugResult" readonly style="margin-top:10px;direction:ltr">';
};
function doSlug() {
  var v = $('slugInput').value;
  $('slugResult').value = v.trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
}

TOOL_FUNCTIONS.urlEncode = function() {
  return '<textarea class="input" id="ueInput" rows="4" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doUrlEncode()">Encode</button></div><textarea class="input" id="ueResult" rows="4" readonly style="margin-top:10px;direction:ltr"></textarea>';
};
function doUrlEncode() {
  $('ueResult').value = encodeURIComponent($('ueInput').value);
}

TOOL_FUNCTIONS.urlDecode = function() {
  return '<textarea class="input" id="udInput" rows="4" placeholder="URL encoded..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doUrlDecode()">Decode</button></div><textarea class="input" id="udResult" rows="4" readonly style="margin-top:10px"></textarea>';
};
function doUrlDecode() {
  try { $('udResult').value = decodeURIComponent($('udInput').value); }
  catch(e) { $('udResult').value = 'خطا: URL نامعتبر'; }
}

TOOL_FUNCTIONS.base64Enc = function() {
  return '<textarea class="input" id="b64eInput" rows="4" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doB64Enc()">Encode</button></div><textarea class="input" id="b64eResult" rows="4" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doB64Enc() {
  try { $('b64eResult').value = btoa(unescape(encodeURIComponent($('b64eInput').value))); }
  catch(e) { $('b64eResult').value = 'خطا در تبدیل'; }
}

TOOL_FUNCTIONS.base64Dec = function() {
  return '<textarea class="input" id="b64dInput" rows="4" placeholder="Base64..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doB64Dec()">Decode</button></div><textarea class="input" id="b64dResult" rows="4" readonly style="margin-top:10px"></textarea>';
};
function doB64Dec() {
  try { $('b64dResult').value = decodeURIComponent(escape(atob($('b64dInput').value.trim()))); }
  catch(e) { $('b64dResult').value = 'خطا: Base64 نامعتبر'; }
}

TOOL_FUNCTIONS.hexEnc = function() {
  return '<textarea class="input" id="hexInput" rows="4" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doHexEnc()">تبدیل</button></div><textarea class="input" id="hexResult" rows="4" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doHexEnc() {
  var v = $('hexInput').value;
  var hex = '';
  for(var i = 0; i < v.length; i++) hex += v.charCodeAt(i).toString(16).padStart(2, '0');
  $('hexResult').value = hex;
}

TOOL_FUNCTIONS.rot13 = function() {
  return '<textarea class="input" id="rotInput" rows="4" placeholder="متن انگلیسی..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doRot13()">ROT13</button></div><textarea class="input" id="rotResult" rows="4" readonly style="margin-top:10px;direction:ltr"></textarea>';
};
function doRot13() {
  $('rotResult').value = $('rotInput').value.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= c.charCodeAt(0) + 13 ? c.charCodeAt(0) + 13 : c.charCodeAt(0) - 13);
  });
}

TOOL_FUNCTIONS.jsonFormat = function() {
  return '<textarea class="input" id="jfInput" rows="6" placeholder="{}"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doJsonFormat()">زیباسازی</button></div><textarea class="input" id="jfResult" rows="6" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doJsonFormat() {
  try { $('jfResult').value = JSON.stringify(JSON.parse($('jfInput').value), null, 2); }
  catch(e) { $('jfResult').value = 'خطا: JSON نامعتبر\n' + e.message; }
}

TOOL_FUNCTIONS.jsonMinify = function() {
  return '<textarea class="input" id="jmInput" rows="6" placeholder="{}"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doJsonMinify()">فشرده</button></div><textarea class="input" id="jmResult" rows="6" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doJsonMinify() {
  try { $('jmResult').value = JSON.stringify(JSON.parse($('jmInput').value)); }
  catch(e) { $('jmResult').value = 'خطا: JSON نامعتبر'; }
}

TOOL_FUNCTIONS.jsonValidate = function() {
  return '<textarea class="input" id="jvInput" rows="6" placeholder="{}"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doJsonValidate()">بررسی</button></div><div class="tool-result" id="jvResult"></div>';
};
function doJsonValidate() {
  try {
    JSON.parse($('jvInput').value);
    $('jvResult').innerHTML = '<div style="color:var(--success);text-align:center;padding:15px;font-size:16px"><i class="fas fa-check-circle"></i> JSON معتبر است</div>';
  } catch(e) {
    $('jvResult').innerHTML = '<div style="color:var(--danger);text-align:center;padding:15px;font-size:14px"><i class="fas fa-times-circle"></i> نامعتبر: ' + esc(e.message) + '</div>';
  }
}

TOOL_FUNCTIONS.csvToJson = function() {
  return '<textarea class="input" id="c2jInput" rows="6" placeholder="name,age\nAli,25\nSara,30"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doCsvToJson()">تبدیل</button></div><textarea class="input" id="c2jResult" rows="6" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doCsvToJson() {
  try {
    var lines = $('c2jInput').value.trim().split(/\r?\n/);
    if(lines.length < 2) throw new Error('حداقل ۲ خط');
    var headers = lines[0].split(',').map(function(h) { return h.trim(); });
    var result = lines.slice(1).map(function(line) {
      var vals = line.split(',');
      var obj = {};
      headers.forEach(function(h, i) { obj[h] = (vals[i] || '').trim(); });
      return obj;
    });
    $('c2jResult').value = JSON.stringify(result, null, 2);
  } catch(e) { $('c2jResult').value = 'خطا: ' + e.message; }
}

TOOL_FUNCTIONS.jsonToCsv = function() {
  return '<textarea class="input" id="j2cInput" rows="6" placeholder="[{...}]"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doJsonToCsv()">تبدیل</button></div><textarea class="input" id="j2cResult" rows="6" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doJsonToCsv() {
  try {
    var data = JSON.parse($('j2cInput').value);
    if(!Array.isArray(data) || !data.length) throw new Error('آرایه غیرخالی لازم است');
    var keys = Object.keys(data[0]);
    var lines = [keys.join(',')];
    data.forEach(function(row) { lines.push(keys.map(function(k) { return row[k] || ''; }).join(',')); });
    $('j2cResult').value = lines.join('\n');
  } catch(e) { $('j2cResult').value = 'خطا: ' + e.message; }
}

TOOL_FUNCTIONS.loremIpsum = function() {
  return '<input type="number" class="input" id="loremCount" value="3" min="1" max="20" style="margin-bottom:10px" placeholder="تعداد پاراگراف"><div class="tool-actions"><button class="btn btn-primary" onclick="doLorem()">تولید</button></div><textarea class="input" id="loremResult" rows="8" readonly style="margin-top:10px"></textarea>';
};
function doLorem() {
  var words = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'.split(' ');
  var n = parseInt($('loremCount').value) || 3;
  var paras = [];
  for(var i = 0; i < n; i++) {
    var p = [];
    for(var j = 0; j < 40; j++) p.push(words[Math.floor(Math.random() * words.length)]);
    paras.push(p.join(' ') + '.');
  }
  $('loremResult').value = paras.join('\n\n');
}

TOOL_FUNCTIONS.removeHtml = function() {
  return '<textarea class="input" id="rhInput" rows="5" placeholder="<p>متن</p>"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doRemoveHtml()">حذف HTML</button></div><textarea class="input" id="rhResult" rows="5" readonly style="margin-top:10px"></textarea>';
};
function doRemoveHtml() {
  var d = document.createElement('div');
  d.innerHTML = $('rhInput').value;
  $('rhResult').value = d.textContent || d.innerText || '';
}

TOOL_FUNCTIONS.escapeHtml = function() {
  return '<textarea class="input" id="ehInput" rows="5" placeholder="<html>"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doEscapeHtml()">Escape</button></div><textarea class="input" id="ehResult" rows="5" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doEscapeHtml() {
  $('ehResult').value = esc($('ehInput').value);
}

TOOL_FUNCTIONS.unescapeHtml = function() {
  return '<textarea class="input" id="uehInput" rows="5" placeholder="&lt;html&gt;"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doUnescapeHtml()">Unescape</button></div><textarea class="input" id="uehResult" rows="5" readonly style="margin-top:10px"></textarea>';
};
function doUnescapeHtml() {
  var d = document.createElement('textarea');
  d.innerHTML = $('uehInput').value;
  $('uehResult').value = d.value;
}

TOOL_FUNCTIONS.wordFreq = function() {
  return '<textarea class="input" id="wfInput" rows="6" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doWordFreq()">تحلیل</button></div><div class="tool-result" id="wfResult"></div>';
};
function doWordFreq() {
  var v = $('wfInput').value.toLowerCase();
  var words = v.match(/\p{L}+/gu) || [];
  var freq = {};
  words.forEach(function(w) { freq[w] = (freq[w] || 0) + 1; });
  var sorted = Object.keys(freq).map(function(k) { return [k, freq[k]]; }).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 20);
  $('wfResult').innerHTML = sorted.map(function(f, i) { return '<div class="result-item"><span>' + (i + 1) + '. ' + esc(f[0]) + '</span><strong>' + f[1] + '</strong></div>'; }).join('');
}

TOOL_FUNCTIONS.emailValidate = function() {
  return '<input type="email" class="input" id="evInput" placeholder="email@example.com" style="margin-bottom:10px;direction:ltr"><div class="tool-actions"><button class="btn btn-primary" onclick="doEmailValidate()">بررسی</button></div><div class="tool-result" id="evResult"></div>';
};
function doEmailValidate() {
  var v = $('evInput').value.trim();
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if(re.test(v)) {
    $('evResult').innerHTML = '<div style="color:var(--success);text-align:center;padding:15px"><i class="fas fa-check-circle"></i> ایمیل معتبر است</div>';
  } else {
    $('evResult').innerHTML = '<div style="color:var(--danger);text-align:center;padding:15px"><i class="fas fa-times-circle"></i> ایمیل نامعتبر</div>';
  }
}

TOOL_FUNCTIONS.regexTest = function() {
  return '<input class="input" id="reInput" placeholder="الگو (مثلاً \\d+)" style="margin-bottom:10px;direction:ltr"><textarea class="input" id="reText" rows="5" placeholder="متن برای تست..." style="margin-bottom:10px"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doRegex()">تست</button></div><div class="tool-result" id="reResult"></div>';
};
function doRegex() {
  try {
    var re = new RegExp($('reInput').value, 'g');
    var matches = $('reText').value.match(re) || [];
    $('reResult').innerHTML = '<div style="padding:10px"><strong>تعداد تطبیق:</strong> ' + matches.length + '</div>' + matches.slice(0, 20).map(function(m) { return '<div class="result-item">' + esc(m) + '</div>'; }).join('');
  } catch(e) { $('reResult').innerHTML = '<div style="color:var(--danger)">خطا: ' + esc(e.message) + '</div>'; }
}

TOOL_FUNCTIONS.textDiff = function() {
  return '<textarea class="input" id="tdA" rows="4" placeholder="متن اول..." style="margin-bottom:10px"></textarea><textarea class="input" id="tdB" rows="4" placeholder="متن دوم..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doTextDiff()">مقایسه</button></div><div class="tool-result" id="tdResult"></div>';
};
function doTextDiff() {
  var a = $('tdA').value, b = $('tdB').value;
  if(a === b) { $('tdResult').innerHTML = '<div style="color:var(--success);text-align:center;padding:15px">✅ دو متن یکسان هستند</div>'; return; }
  $('tdResult').innerHTML = '<div style="color:var(--warning);text-align:center;padding:15px">⚠️ دو متن متفاوت هستند</div>';
}

TOOL_FUNCTIONS.textToAscii = function() {
  return '<textarea class="input" id="taInput" rows="4" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doTextToAscii()">تبدیل</button></div><textarea class="input" id="taResult" rows="4" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doTextToAscii() {
  var v = $('taInput').value;
  var out = [];
  for(var i = 0; i < v.length; i++) out.push(v.charCodeAt(i));
  $('taResult').value = out.join(' ');
}

TOOL_FUNCTIONS.asciiToText = function() {
  return '<textarea class="input" id="atInput" rows="4" placeholder="72 101 108 108 111"></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doAsciiToText()">تبدیل</button></div><textarea class="input" id="atResult" rows="4" readonly style="margin-top:10px"></textarea>';
};
function doAsciiToText() {
  try {
    $('atResult').value = $('atInput').value.split(/\s+/).map(function(n) { return String.fromCharCode(parseInt(n)); }).join('');
  } catch(e) { $('atResult').value = 'خطا'; }
}

TOOL_FUNCTIONS.morseCode = function() {
  return '<textarea class="input" id="mcInput" rows="4" placeholder="متن انگلیسی..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doMorse()">تبدیل</button></div><textarea class="input" id="mcResult" rows="4" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
var MORSE = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.'};
function doMorse() {
  var v = $('mcInput').value.toUpperCase();
  $('mcResult').value = v.split('').map(function(c) { return MORSE[c] || c; }).join(' ');
}

TOOL_FUNCTIONS.binaryText = function() {
  return '<textarea class="input" id="btInput" rows="4" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doBinaryText()">تبدیل</button></div><textarea class="input" id="btResult" rows="4" readonly style="margin-top:10px;direction:ltr;font-family:monospace"></textarea>';
};
function doBinaryText() {
  var v = $('btInput').value;
  var out = [];
  for(var i = 0; i < v.length; i++) out.push(v.charCodeAt(i).toString(2).padStart(8, '0'));
  $('btResult').value = out.join(' ');
}

TOOL_FUNCTIONS.textTruncate = function() {
  return '<textarea class="input" id="ttInput" rows="4" placeholder="متن..."></textarea><input type="number" class="input" id="ttLen" value="50" style="margin-top:10px" placeholder="طول"><div class="tool-actions"><button class="btn btn-primary" onclick="doTruncate()">کوتاه کن</button></div><textarea class="input" id="ttResult" rows="4" readonly style="margin-top:10px"></textarea>';
};
function doTruncate() {
  var v = $('ttInput').value, n = parseInt($('ttLen').value) || 50;
  $('ttResult').value = v.length > n ? v.substring(0, n) + '...' : v;
}

TOOL_FUNCTIONS.textWrap = function() {
  return '<textarea class="input" id="twInput" rows="5" placeholder="متن..."></textarea><input type="number" class="input" id="twLen" value="40" style="margin-top:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doWrap()">شکستن خطوط</button></div><textarea class="input" id="twResult" rows="6" readonly style="margin-top:10px"></textarea>';
};
function doWrap() {
  var v = $('twInput').value, n = parseInt($('twLen').value) || 40;
  $('twResult').value = v.match(new RegExp('.{1,' + n + '}', 'g')).join('\n');
}

TOOL_FUNCTIONS.randomString = function() {
  return '<input type="number" class="input" id="rstrLen" value="16" style="margin-bottom:10px" placeholder="طول"><div class="tool-actions"><button class="btn btn-primary" onclick="doRandomString()">تولید</button></div><input class="input" id="rstrResult" readonly style="margin-top:10px;direction:ltr;font-family:monospace">';
};
function doRandomString() {
  var n = parseInt($('rstrLen').value) || 16;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  var arr = new Uint32Array(n);
  crypto.getRandomValues(arr);
  for(var i = 0; i < n; i++) result += chars[arr[i] % chars.length];
  $('rstrResult').value = result;
}

TOOL_FUNCTIONS.palindromeCheck = function() {
  return '<input class="input" id="palInput" placeholder="متن..." style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doPalindrome()">بررسی</button></div><div class="tool-result" id="palResult"></div>';
};
function doPalindrome() {
  var v = $('palInput').value.toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]/g, '');
  if(v === Array.from(v).reverse().join('')) {
    $('palResult').innerHTML = '<div style="color:var(--success);text-align:center;padding:15px"><i class="fas fa-check-circle"></i> پالیندروم است</div>';
  } else {
    $('palResult').innerHTML = '<div style="color:var(--danger);text-align:center;padding:15px"><i class="fas fa-times-circle"></i> پالیندروم نیست</div>';
  }
}

TOOL_FUNCTIONS.textStats = function() {
  return '<textarea class="input" id="tsInput" rows="6" placeholder="متن..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doTextStats()">آمار</button></div><div class="tool-result" id="tsResult"></div>';
};
function doTextStats() {
  var v = $('tsInput').value;
  var words = v.trim() ? v.trim().split(/\s+/).length : 0;
  var sentences = (v.match(/[.!?؟।]+/g) || []).length;
  var paragraphs = v.split(/\n\n+/).filter(Boolean).length;
  $('tsResult').innerHTML = '<div class="result-grid"><div class="result-item"><span>کلمات</span><strong>' + words + '</strong></div><div class="result-item"><span>جملات</span><strong>' + sentences + '</strong></div><div class="result-item"><span>پاراگراف</span><strong>' + paragraphs + '</strong></div></div>';
}

TOOL_FUNCTIONS.findReplace = function() {
  return '<textarea class="input" id="frText" rows="4" placeholder="متن..."></textarea><input class="input" id="frFind" placeholder="پیدا کردن" style="margin-top:10px"><input class="input" id="frReplace" placeholder="جایگزینی" style="margin-top:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doFindReplace()">تغییر</button></div><textarea class="input" id="frResult" rows="4" readonly style="margin-top:10px"></textarea>';
};
function doFindReplace() {
  var v = $('frText').value, f = $('frFind').value, r = $('frReplace').value;
  if(!f) { $('frResult').value = 'عبارت جستجو خالی است'; return; }
  $('frResult').value = v.split(f).join(r);
}

TOOL_FUNCTIONS.textToSpeech = function() {
  return '<textarea class="input" id="ttsInput" rows="4" placeholder="متن برای پخش..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doTTS()">🔊 پخش</button><button class="btn btn-outline" onclick="stopTTS()">⏹ توقف</button></div>';
};
function doTTS() {
  if(!('speechSynthesis' in window)) { showToast('پشتیبانی نمی‌شود'); return; }
  speechSynthesis.cancel();
  var v = $('ttsInput').value;
  if(!v) return;
  var u = new SpeechSynthesisUtterance(v);
  u.lang = STATE.lang === 'fa' ? 'fa-IR' : STATE.lang === 'ar' ? 'ar-SA' : STATE.lang === 'tr' ? 'tr-TR' : STATE.lang === 'ru' ? 'ru-RU' : STATE.lang === 'de' ? 'de-DE' : 'en-US';
  speechSynthesis.speak(u);
}
function stopTTS() { if('speechSynthesis' in window) speechSynthesis.cancel(); }

TOOL_FUNCTIONS.speechToText = function() {
  return '<div style="text-align:center;padding:20px"><i class="fas fa-microphone" style="font-size:60px;color:var(--primary)" id="sttMic"></i><div class="tool-actions" style="justify-content:center;margin-top:15px"><button class="btn btn-primary" onclick="doSTT()">🎤 شروع</button></div><textarea class="input" id="sttResult" rows="4" readonly style="margin-top:15px"></textarea></div>';
};
function doSTT() {
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) { showToast('پشتیبانی نمی‌شود'); return; }
  var r = new SR();
  r.lang = STATE.lang === 'fa' ? 'fa-IR' : 'en-US';
  r.onresult = function(e) { $('sttResult').value = e.results[0][0].transcript; };
  r.onerror = function() { showToast('خطا در تشخیص'); };
  r.start();
}

/* ═══ MATH TOOLS (30) ═══ */
TOOL_FUNCTIONS.calculator = function() {
  return '<div class="calc-display" id="calcDisp">0</div><div class="calc-grid">' +
    ['C', '⌫', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', '='].map(function(k) {
      return '<button class="calc-btn' + (k === '=' ? ' calc-eq' : '') + '" onclick="calcPress(\'' + k + '\')">' + k + '</button>';
    }).join('') + '</div>';
};
var calcVal = '0';
function calcPress(k) {
  var d = $('calcDisp'); if(!d) return;
  if(k === 'C') calcVal = '0';
  else if(k === '⌫') calcVal = calcVal.slice(0, -1) || '0';
  else if(k === '=') { try { calcVal = String(eval(calcVal.replace(/[^-+*/.%\d]/g, ''))); } catch(e) { calcVal = 'خطا'; } }
  else calcVal = calcVal === '0' && /\d/.test(k) ? k : calcVal + k;
  d.textContent = calcVal;
}

TOOL_FUNCTIONS.percentage = function() {
  return '<input type="number" class="input" id="pctNum" placeholder="عدد" style="margin-bottom:10px"><input type="number" class="input" id="pctPercent" placeholder="درصد" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doPercent()">محاسبه</button></div><div class="tool-result" id="pctResult"></div>';
};
function doPercent() {
  var n = parseFloat($('pctNum').value) || 0;
  var p = parseFloat($('pctPercent').value) || 0;
  $('pctResult').innerHTML = '<div class="result-item"><span>' + p + '٪ از ' + n + '</span><strong>' + (n * p / 100).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.discount = function() {
  return '<input type="number" class="input" id="discPrice" placeholder="قیمت اصلی" style="margin-bottom:10px"><input type="number" class="input" id="discPercent" placeholder="درصد تخفیف" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doDiscount()">محاسبه</button></div><div class="tool-result" id="discResult"></div>';
};
function doDiscount() {
  var p = parseFloat($('discPrice').value) || 0;
  var d = parseFloat($('discPercent').value) || 0;
  var off = p * d / 100;
  var final = p - off;
  $('discResult').innerHTML = '<div class="result-item"><span>تخفیف</span><strong>' + off.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>قیمت نهایی</span><strong style="color:var(--success)">' + final.toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.vat = function() {
  return '<input type="number" class="input" id="vatPrice" placeholder="مبلغ" style="margin-bottom:10px"><input type="number" class="input" id="vatRate" placeholder="نرخ (پیش‌فرض 9)" value="9" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doVat()">محاسبه</button></div><div class="tool-result" id="vatResult"></div>';
};
function doVat() {
  var p = parseFloat($('vatPrice').value) || 0;
  var r = parseFloat($('vatRate').value) || 9;
  var v = p * r / 100;
  $('vatResult').innerHTML = '<div class="result-item"><span>مالیات</span><strong>' + v.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>مبلغ نهایی</span><strong style="color:var(--success)">' + (p + v).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.tipSplit = function() {
  return '<input type="number" class="input" id="tipTotal" placeholder="مبلغ کل" style="margin-bottom:10px"><input type="number" class="input" id="tipPercent" placeholder="درصد انعام" value="15" style="margin-bottom:10px"><input type="number" class="input" id="tipPeople" placeholder="تعداد نفرات" value="2" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doTip()">محاسبه</button></div><div class="tool-result" id="tipResult"></div>';
};
function doTip() {
  var t = parseFloat($('tipTotal').value) || 0;
  var p = parseFloat($('tipPercent').value) || 15;
  var n = parseInt($('tipPeople').value) || 2;
  var total = t * (1 + p / 100);
  $('tipResult').innerHTML = '<div class="result-item"><span>جمع با انعام</span><strong>' + total.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>سهم هر نفر</span><strong style="color:var(--success)">' + (total / n).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.loanCalc = function() {
  return '<input type="number" class="input" id="loanAmount" placeholder="مبلغ وام" style="margin-bottom:10px"><input type="number" class="input" id="loanRate" placeholder="نرخ بهره سالانه (٪)" value="18" style="margin-bottom:10px"><input type="number" class="input" id="loanMonths" placeholder="تعداد ماه" value="12" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doLoan()">محاسبه</button></div><div class="tool-result" id="loanResult"></div>';
};
function doLoan() {
  var a = parseFloat($('loanAmount').value) || 0;
  var r = (parseFloat($('loanRate').value) || 18) / 100 / 12;
  var n = parseInt($('loanMonths').value) || 12;
  var monthly = r === 0 ? a / n : a * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  $('loanResult').innerHTML = '<div class="result-item"><span>قسط ماهانه</span><strong>' + Math.round(monthly).toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>کل پرداختی</span><strong>' + Math.round(monthly * n).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.compound = function() {
  return '<input type="number" class="input" id="cPrincipal" placeholder="سرمایه اولیه" style="margin-bottom:10px"><input type="number" class="input" id="cRate" placeholder="نرخ سالانه (٪)" value="20" style="margin-bottom:10px"><input type="number" class="input" id="cYears" placeholder="سال" value="5" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doCompound()">محاسبه</button></div><div class="tool-result" id="cResult"></div>';
};
function doCompound() {
  var p = parseFloat($('cPrincipal').value) || 0;
  var r = (parseFloat($('cRate').value) || 20) / 100;
  var y = parseInt($('cYears').value) || 5;
  var total = p * Math.pow(1 + r, y);
  $('cResult').innerHTML = '<div class="result-item"><span>مبلغ نهایی</span><strong style="color:var(--success)">' + Math.round(total).toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>سود</span><strong>' + Math.round(total - p).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.bmi = function() {
  return '<input type="number" class="input" id="bmiWeight" placeholder="وزن (kg)" style="margin-bottom:10px"><input type="number" class="input" id="bmiHeight" placeholder="قد (cm)" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doBMI()">محاسبه</button></div><div class="tool-result" id="bmiResult"></div>';
};
function doBMI() {
  var w = parseFloat($('bmiWeight').value) || 0;
  var h = (parseFloat($('bmiHeight').value) || 0) / 100;
  var bmi = w / (h * h);
  var status = bmi < 18.5 ? 'کمبود وزن' : bmi < 25 ? 'نرمال' : bmi < 30 ? 'اضافه وزن' : 'چاقی';
  var color = bmi >= 18.5 && bmi < 25 ? 'var(--success)' : bmi >= 25 ? 'var(--warning)' : 'var(--danger)';
  $('bmiResult').innerHTML = '<div class="result-item"><span>BMI</span><strong>' + bmi.toFixed(1) + '</strong></div><div class="result-item"><span>وضعیت</span><strong style="color:' + color + '">' + status + '</strong></div>';
}

TOOL_FUNCTIONS.unitLength = function() {
  return '<input type="number" class="input" id="ulVal" placeholder="مقدار" style="margin-bottom:10px"><select class="input" id="ulFrom" style="margin-bottom:10px"><option value="m">متر</option><option value="cm">سانتی‌متر</option><option value="km">کیلومتر</option><option value="mi">مایل</option><option value="ft">فوت</option></select><select class="input" id="ulTo" style="margin-bottom:10px"><option value="cm">سانتی‌متر</option><option value="m">متر</option><option value="km">کیلومتر</option><option value="mi">مایل</option><option value="ft">فوت</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doUnitLength()">تبدیل</button></div><div class="tool-result" id="ulResult"></div>';
};
function doUnitLength() {
  var v = parseFloat($('ulVal').value) || 0;
  var f = $('ulFrom').value, to = $('ulTo').value;
  var toM = { m: 1, cm: 0.01, km: 1000, mi: 1609.344, ft: 0.3048 };
  var result = v * toM[f] / toM[to];
  $('ulResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + result.toFixed(4).replace(/\.?0+$/, '') + ' ' + to + '</strong></div>';
}

TOOL_FUNCTIONS.unitWeight = function() {
  return '<input type="number" class="input" id="uwVal" placeholder="مقدار" style="margin-bottom:10px"><select class="input" id="uwFrom" style="margin-bottom:10px"><option value="kg">کیلوگرم</option><option value="g">گرم</option><option value="lb">پوند</option><option value="oz">اونس</option></select><select class="input" id="uwTo" style="margin-bottom:10px"><option value="g">گرم</option><option value="kg">کیلوگرم</option><option value="lb">پوند</option><option value="oz">اونس</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doUnitWeight()">تبدیل</button></div><div class="tool-result" id="uwResult"></div>';
};
function doUnitWeight() {
  var v = parseFloat($('uwVal').value) || 0;
  var f = $('uwFrom').value, to = $('uwTo').value;
  var toKg = { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 };
  var result = v * toKg[f] / toKg[to];
  $('uwResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + result.toFixed(4).replace(/\.?0+$/, '') + ' ' + to + '</strong></div>';
}

TOOL_FUNCTIONS.unitTemp = function() {
  return '<input type="number" class="input" id="utVal" placeholder="دما" style="margin-bottom:10px"><select class="input" id="utFrom" style="margin-bottom:10px"><option value="C">سلسیوس</option><option value="F">فارنهایت</option><option value="K">کلوین</option></select><select class="input" id="utTo" style="margin-bottom:10px"><option value="F">فارنهایت</option><option value="C">سلسیوس</option><option value="K">کلوین</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doUnitTemp()">تبدیل</button></div><div class="tool-result" id="utResult"></div>';
};
function doUnitTemp() {
  var v = parseFloat($('utVal').value) || 0;
  var f = $('utFrom').value, to = $('utTo').value;
  var celsius = f === 'C' ? v : f === 'F' ? (v - 32) * 5 / 9 : v - 273.15;
  var result = to === 'C' ? celsius : to === 'F' ? celsius * 9 / 5 + 32 : celsius + 273.15;
  $('utResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + result.toFixed(2) + ' °' + to + '</strong></div>';
}

TOOL_FUNCTIONS.unitSpeed = function() {
  return '<input type="number" class="input" id="usVal" placeholder="مقدار" style="margin-bottom:10px"><select class="input" id="usFrom" style="margin-bottom:10px"><option value="kmh">km/h</option><option value="mph">mph</option><option value="ms">m/s</option></select><select class="input" id="usTo" style="margin-bottom:10px"><option value="mph">mph</option><option value="kmh">km/h</option><option value="ms">m/s</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doUnitSpeed()">تبدیل</button></div><div class="tool-result" id="usResult"></div>';
};
function doUnitSpeed() {
  var v = parseFloat($('usVal').value) || 0;
  var f = $('usFrom').value, to = $('usTo').value;
  var toMs = { kmh: 0.277778, mph: 0.44704, ms: 1 };
  var result = v * toMs[f] / toMs[to];
  $('usResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + result.toFixed(3) + ' ' + to + '</strong></div>';
}

TOOL_FUNCTIONS.unitArea = function() {
  return '<input type="number" class="input" id="uaVal" placeholder="مقدار" style="margin-bottom:10px"><select class="input" id="uaFrom" style="margin-bottom:10px"><option value="m2">متر مربع</option><option value="km2">کیلومتر مربع</option><option value="ha">هکتار</option><option value="ft2">فوت مربع</option></select><select class="input" id="uaTo" style="margin-bottom:10px"><option value="km2">کیلومتر مربع</option><option value="m2">متر مربع</option><option value="ha">هکتار</option><option value="ft2">فوت مربع</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doUnitArea()">تبدیل</button></div><div class="tool-result" id="uaResult"></div>';
};
function doUnitArea() {
  var v = parseFloat($('uaVal').value) || 0;
  var f = $('uaFrom').value, to = $('uaTo').value;
  var toM2 = { m2: 1, km2: 1e6, ha: 10000, ft2: 0.092903 };
  var result = v * toM2[f] / toM2[to];
  $('uaResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + result.toFixed(6).replace(/\.?0+$/, '') + ' ' + to + '</strong></div>';
}

TOOL_FUNCTIONS.unitVolume = function() {
  return '<input type="number" class="input" id="uvVal" placeholder="مقدار" style="margin-bottom:10px"><select class="input" id="uvFrom" style="margin-bottom:10px"><option value="l">لیتر</option><option value="ml">میلی‌لیتر</option><option value="m3">متر مکعب</option><option value="gal">گالن</option></select><select class="input" id="uvTo" style="margin-bottom:10px"><option value="ml">میلی‌لیتر</option><option value="l">لیتر</option><option value="m3">متر مکعب</option><option value="gal">گالن</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doUnitVolume()">تبدیل</button></div><div class="tool-result" id="uvResult"></div>';
};
function doUnitVolume() {
  var v = parseFloat($('uvVal').value) || 0;
  var f = $('uvFrom').value, to = $('uvTo').value;
  var toL = { l: 1, ml: 0.001, m3: 1000, gal: 3.78541 };
  var result = v * toL[f] / toL[to];
  $('uvResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + result.toFixed(4).replace(/\.?0+$/, '') + ' ' + to + '</strong></div>';
}

TOOL_FUNCTIONS.currency = function() {
  return '<input type="number" class="input" id="curVal" placeholder="مقدار" style="margin-bottom:10px"><select class="input" id="curFrom" style="margin-bottom:10px"><option value="usd">دلار</option><option value="eur">یورو</option><option value="irr">تومان</option></select><input type="number" class="input" id="curRate" placeholder="نرخ تبدیل" value="68500" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doCurrency()">تبدیل</button></div><div class="tool-result" id="curResult"></div>';
};
function doCurrency() {
  var v = parseFloat($('curVal').value) || 0;
  var r = parseFloat($('curRate').value) || 68500;
  $('curResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + (v * r).toLocaleString('fa-IR') + ' تومان</strong></div>';
}

TOOL_FUNCTIONS.primeCheck = function() {
  return '<input type="number" class="input" id="primeInput" placeholder="عدد" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doPrime()">بررسی</button></div><div class="tool-result" id="primeResult"></div>';
};
function doPrime() {
  var n = parseInt($('primeInput').value) || 0;
  var isPrime = n >= 2;
  for(var i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) { isPrime = false; break; }
  var icon = isPrime ? 'check-circle' : 'times-circle';
  var color = isPrime ? 'var(--success)' : 'var(--danger)';
  $('primeResult').innerHTML = '<div style="color:' + color + ';text-align:center;padding:15px;font-size:16px"><i class="fas fa-' + icon + '"></i> ' + (isPrime ? 'عدد اول است' : 'عدد اول نیست') + '</div>';
}

TOOL_FUNCTIONS.factorial = function() {
  return '<input type="number" class="input" id="factInput" placeholder="n" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doFactorial()">محاسبه</button></div><div class="tool-result" id="factResult"></div>';
};
function doFactorial() {
  var n = parseInt($('factInput').value) || 0;
  var r = 1;
  for(var i = 2; i <= n; i++) r *= i;
  $('factResult').innerHTML = '<div class="result-item"><span>' + n + '!</span><strong>' + r.toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.fibonacci = function() {
  return '<input type="number" class="input" id="fibN" placeholder="تعداد جملات" value="10" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doFib()">تولید</button></div><div class="tool-result" id="fibResult"></div>';
};
function doFib() {
  var n = parseInt($('fibN').value) || 10;
  var seq = [0, 1];
  for(var i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
  $('fibResult').innerHTML = '<div style="padding:10px;line-height:1.8">' + seq.slice(0, n).join(', ') + '</div>';
}

TOOL_FUNCTIONS.gcdLcm = function() {
  return '<input type="number" class="input" id="gcdA" placeholder="عدد اول" style="margin-bottom:10px"><input type="number" class="input" id="gcdB" placeholder="عدد دوم" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doGCD()">محاسبه</button></div><div class="tool-result" id="gcdResult"></div>';
};
function doGCD() {
  var a = parseInt($('gcdA').value) || 0;
  var b = parseInt($('gcdB').value) || 0;
  function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
  var g = gcd(a, b);
  var l = (a * b) / g;
  $('gcdResult').innerHTML = '<div class="result-item"><span>ب.م.م</span><strong>' + g + '</strong></div><div class="result-item"><span>ک.م.م</span><strong>' + l + '</strong></div>';
}

TOOL_FUNCTIONS.randomNumber = function() {
  return '<input type="number" class="input" id="rnMin" placeholder="حداقل" value="1" style="margin-bottom:10px"><input type="number" class="input" id="rnMax" placeholder="حداکثر" value="100" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doRandomNum()">تولید</button></div><div class="tool-result" id="rnResult"></div>';
};
function doRandomNum() {
  var min = parseInt($('rnMin').value) || 1;
  var max = parseInt($('rnMax').value) || 100;
  var r = Math.floor(Math.random() * (max - min + 1)) + min;
  $('rnResult').innerHTML = '<div class="result-item"><span>عدد تصادفی</span><strong style="font-size:32px;color:var(--accent)">' + r + '</strong></div>';
}

TOOL_FUNCTIONS.diceRoll = function() {
  return '<div style="text-align:center;padding:20px"><div id="diceDisplay" style="font-size:100px">🎲</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="doDice()">انداختن تاس</button></div></div>';
};
function doDice() {
  var r = Math.floor(Math.random() * 6) + 1;
  var dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  $('diceDisplay').textContent = dice[r - 1];
}

TOOL_FUNCTIONS.coinFlip = function() {
  return '<div style="text-align:center;padding:20px"><div id="coinDisplay" style="font-size:100px">🪙</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="doCoin()">شیر یا خط</button></div></div>';
};
function doCoin() {
  var r = Math.random() < 0.5 ? 'شیر 🦁' : 'خط 📝';
  $('coinDisplay').textContent = r;
}

TOOL_FUNCTIONS.average = function() {
  return '<textarea class="input" id="avgInput" rows="4" placeholder="اعداد را با کاما یا خط جدید جدا کنید..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doAverage()">محاسبه</button></div><div class="tool-result" id="avgResult"></div>';
};
function doAverage() {
  var nums = $('avgInput').value.split(/[,\s\n]+/).map(parseFloat).filter(function(n) { return !isNaN(n); });
  if(!nums.length) { $('avgResult').innerHTML = '<div style="color:var(--danger);padding:10px">عدد وارد کنید</div>'; return; }
  var sum = nums.reduce(function(a, b) { return a + b; }, 0);
  $('avgResult').innerHTML = '<div class="result-item"><span>میانگین</span><strong>' + (sum / nums.length).toFixed(2) + '</strong></div><div class="result-item"><span>جمع</span><strong>' + sum + '</strong></div><div class="result-item"><span>تعداد</span><strong>' + nums.length + '</strong></div>';
}

TOOL_FUNCTIONS.median = function() {
  return '<textarea class="input" id="medInput" rows="4" placeholder="اعداد..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doMedian()">محاسبه</button></div><div class="tool-result" id="medResult"></div>';
};
function doMedian() {
  var nums = $('medInput').value.split(/[,\s\n]+/).map(parseFloat).filter(function(n) { return !isNaN(n); }).sort(function(a, b) { return a - b; });
  if(!nums.length) { $('medResult').innerHTML = '<div style="color:var(--danger);padding:10px">عدد وارد کنید</div>'; return; }
  var mid = Math.floor(nums.length / 2);
  var median = nums.length % 2 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  $('medResult').innerHTML = '<div class="result-item"><span>میانه</span><strong>' + median + '</strong></div>';
}

TOOL_FUNCTIONS.standardDev = function() {
  return '<textarea class="input" id="sdInput" rows="4" placeholder="اعداد..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doStdDev()">محاسبه</button></div><div class="tool-result" id="sdResult"></div>';
};
function doStdDev() {
  var nums = $('sdInput').value.split(/[,\s\n]+/).map(parseFloat).filter(function(n) { return !isNaN(n); });
  if(nums.length < 2) { $('sdResult').innerHTML = '<div style="color:var(--danger);padding:10px">حداقل ۲ عدد</div>'; return; }
  var mean = nums.reduce(function(a, b) { return a + b; }, 0) / nums.length;
  var variance = nums.reduce(function(s, n) { return s + Math.pow(n - mean, 2); }, 0) / (nums.length - 1);
  var sd = Math.sqrt(variance);
  $('sdResult').innerHTML = '<div class="result-item"><span>انحراف معیار</span><strong>' + sd.toFixed(4) + '</strong></div><div class="result-item"><span>واریانس</span><strong>' + variance.toFixed(4) + '</strong></div>';
}

TOOL_FUNCTIONS.roundNumber = function() {
  return '<input type="number" class="input" id="rnInput" placeholder="عدد" style="margin-bottom:10px"><input type="number" class="input" id="rnDigits" placeholder="تعداد رقم اعشار" value="2" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doRound()">رند</button></div><div class="tool-result" id="roundResult"></div>';
};
function doRound() {
  var n = parseFloat($('rnInput').value) || 0;
  var d = parseInt($('rnDigits').value) || 2;
  var m = Math.pow(10, d);
  $('roundResult').innerHTML = '<div class="result-item"><span>نتیجه</span><strong>' + (Math.round(n * m) / m) + '</strong></div>';
}

TOOL_FUNCTIONS.hexConvert = function() {
  return '<input type="number" class="input" id="hcInput" placeholder="عدد دسیمال" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doHexConvert()">تبدیل</button></div><div class="tool-result" id="hcResult"></div>';
};
function doHexConvert() {
  var n = parseInt($('hcInput').value) || 0;
  $('hcResult').innerHTML = '<div class="result-item"><span>دسیمال</span><strong>' + n + '</strong></div><div class="result-item"><span>باینری</span><strong style="direction:ltr;font-family:monospace">' + n.toString(2) + '</strong></div><div class="result-item"><span>هگز</span><strong style="direction:ltr;font-family:monospace">' + n.toString(16).toUpperCase() + '</strong></div><div class="result-item"><span>اکتال</span><strong style="direction:ltr;font-family:monospace">' + n.toString(8) + '</strong></div>';
}

TOOL_FUNCTIONS.ratio = function() {
  return '<input type="number" class="input" id="ratioA" placeholder="A" style="margin-bottom:10px"><input type="number" class="input" id="ratioB" placeholder="B" style="margin-bottom:10px"><input type="number" class="input" id="ratioC" placeholder="C" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doRatio()">محاسبه D</button></div><div class="tool-result" id="ratioResult"></div>';
};
function doRatio() {
  var a = parseFloat($('ratioA').value) || 0;
  var b = parseFloat($('ratioB').value) || 1;
  var c = parseFloat($('ratioC').value) || 0;
  var d = (b * c) / a;
  $('ratioResult').innerHTML = '<div class="result-item"><span>A:B = C:D → D</span><strong>' + d.toFixed(4) + '</strong></div>';
}

TOOL_FUNCTIONS.simpleInterest = function() {
  return '<input type="number" class="input" id="siP" placeholder="اصل پول" style="margin-bottom:10px"><input type="number" class="input" id="siR" placeholder="نرخ سالانه (٪)" value="20" style="margin-bottom:10px"><input type="number" class="input" id="siY" placeholder="سال" value="1" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doSI()">محاسبه</button></div><div class="tool-result" id="siResult"></div>';
};
function doSI() {
  var p = parseFloat($('siP').value) || 0;
  var r = parseFloat($('siR').value) || 20;
  var y = parseFloat($('siY').value) || 1;
  var interest = p * r * y / 100;
  $('siResult').innerHTML = '<div class="result-item"><span>سود</span><strong>' + interest.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>کل</span><strong>' + (p + interest).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.countdown = function() {
  return '<input type="datetime-local" class="input" id="cdTarget" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doCountdown()">شروع</button></div><div class="tool-result" id="cdResult"></div>';
};
function doCountdown() {
  if(window._cdInterval) clearInterval(window._cdInterval);
  var target = new Date($('cdTarget').value).getTime();
  function tick() {
    var diff = target - Date.now();
    if(diff <= 0) { $('cdResult').innerHTML = '<div style="text-align:center;color:var(--success);padding:20px;font-size:20px">⏰ رسید!</div>'; clearInterval(window._cdInterval); return; }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    $('cdResult').innerHTML = '<div style="text-align:center;font-family:monospace;font-size:28px;font-weight:900;padding:20px;color:var(--accent)">' + d + ' روز ' + h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '</div>';
  }
  tick();
  window._cdInterval = setInterval(tick, 1000);
}

/* ═══ DATE TOOLS (15) ═══ */
TOOL_FUNCTIONS.todayDate = function() {
  var d = new Date();
  return '<div class="result-grid"><div class="result-item"><span>شمسی</span><strong>' + d.toLocaleDateString('fa-IR') + '</strong></div><div class="result-item"><span>میلادی</span><strong style="direction:ltr">' + d.toLocaleDateString('en-US') + '</strong></div><div class="result-item"><span>روز هفته</span><strong>' + d.toLocaleDateString('fa-IR', { weekday: 'long' }) + '</strong></div><div class="result-item"><span>ساعت</span><strong style="font-family:monospace">' + d.toLocaleTimeString('fa-IR') + '</strong></div></div>';
}

TOOL_FUNCTIONS.dateDiff = function() {
  return '<input type="date" class="input" id="dd1" style="margin-bottom:10px"><input type="date" class="input" id="dd2" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doDateDiff()">محاسبه</button></div><div class="tool-result" id="ddResult"></div>';
};
function doDateDiff() {
  var d1 = new Date($('dd1').value);
  var d2 = new Date($('dd2').value);
  if(isNaN(d1) || isNaN(d2)) { $('ddResult').innerHTML = '<div style="color:var(--danger);padding:10px">تاریخ معتبر وارد کنید</div>'; return; }
  var diff = Math.abs(Math.floor((d2 - d1) / 86400000));
  $('ddResult').innerHTML = '<div class="result-item"><span>تعداد روز</span><strong style="font-size:28px;color:var(--accent)">' + diff + '</strong></div><div class="result-item"><span>هفته</span><strong>' + Math.floor(diff / 7) + '</strong></div><div class="result-item"><span>ماه (تقریبی)</span><strong>' + Math.floor(diff / 30) + '</strong></div>';
}

TOOL_FUNCTIONS.ageCalc = function() {
  return '<input type="date" class="input" id="ageBirth" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doAge()">محاسبه</button></div><div class="tool-result" id="ageResult"></div>';
};
function doAge() {
  var b = new Date($('ageBirth').value);
  if(isNaN(b)) { $('ageResult').innerHTML = '<div style="color:var(--danger);padding:10px">تاریخ معتبر وارد کنید</div>'; return; }
  var now = new Date();
  var years = now.getFullYear() - b.getFullYear();
  if(now.getMonth() < b.getMonth() || (now.getMonth() === b.getMonth() && now.getDate() < b.getDate())) years--;
  var days = Math.floor((now - b) / 86400000);
  $('ageResult').innerHTML = '<div class="result-item"><span>سن</span><strong style="font-size:28px;color:var(--accent)">' + years + ' سال</strong></div><div class="result-item"><span>کل روزها</span><strong>' + days.toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.addDays = function() {
  return '<input type="date" class="input" id="adBase" style="margin-bottom:10px"><input type="number" class="input" id="adDays" placeholder="تعداد روز" value="30" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doAddDays()">محاسبه</button></div><div class="tool-result" id="adResult"></div>';
};
function doAddDays() {
  var d = new Date($('adBase').value);
  var n = parseInt($('adDays').value) || 30;
  if(isNaN(d)) { $('adResult').innerHTML = '<div style="color:var(--danger);padding:10px">تاریخ معتبر وارد کنید</div>'; return; }
  d.setDate(d.getDate() + n);
  $('adResult').innerHTML = '<div class="result-item"><span>تاریخ جدید</span><strong>' + d.toLocaleDateString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.countdownTimer = function() {
  return '<input type="datetime-local" class="input" id="ctTarget" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doCountdownTimer()">شروع</button></div><div class="tool-result" id="ctResult"></div>';
};
function doCountdownTimer() {
  if(window._ctInt) clearInterval(window._ctInt);
  var target = new Date($('ctTarget').value).getTime();
  function tick() {
    var diff = target - Date.now();
    if(diff <= 0) { $('ctResult').innerHTML = '<div style="color:var(--success);text-align:center;padding:20px">⏰ رسید</div>'; clearInterval(window._ctInt); return; }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    $('ctResult').innerHTML = '<div style="text-align:center;padding:20px;font-family:monospace;font-size:24px;color:var(--accent)">' + d + 'd ' + h + 'h ' + m + 'm ' + s + 's</div>';
  }
  tick();
  window._ctInt = setInterval(tick, 1000);
}

TOOL_FUNCTIONS.worldClock = function() {
  return '<div id="worldClockList" class="tool-result"></div>';
};
TOOL_INIT.worldClock = function() {
  var cities = [
    { name: 'تهران', tz: 'Asia/Tehran', flag: '🇮🇷' },
    { name: 'لندن', tz: 'Europe/London', flag: '🇬🇧' },
    { name: 'نیویورک', tz: 'America/New_York', flag: '🇺🇸' },
    { name: 'توکیو', tz: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'دبی', tz: 'Asia/Dubai', flag: '🇦🇪' },
    { name: 'استانبول', tz: 'Europe/Istanbul', flag: '🇹🇷' }
  ];
  function render() {
    var el = $('worldClockList'); if(!el) return;
    el.innerHTML = cities.map(function(c) {
      try {
        var time = new Date().toLocaleTimeString('en-US', { timeZone: c.tz, hour12: false });
        return '<div class="result-item"><span>' + c.flag + ' ' + c.name + '</span><strong style="font-family:monospace;color:var(--accent)">' + time + '</strong></div>';
      } catch(e) { return ''; }
    }).join('');
  }
  render();
  if(window._wcInt) clearInterval(window._wcInt);
  window._wcInt = setInterval(render, 1000);
};

TOOL_FUNCTIONS.stopwatch = function() {
  return '<div id="swDisplay" style="text-align:center;font-size:48px;font-family:monospace;font-weight:900;padding:30px;color:var(--accent)">00:00:00</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="swStart()">▶️ شروع</button><button class="btn btn-outline" onclick="swStop()">⏸ توقف</button><button class="btn btn-outline" onclick="swReset()">🔄 ریست</button></div>';
};
var swTime = 0, swInt = null;
function swStart() { if(swInt) return; swInt = setInterval(function() { swTime += 100; swUpdate(); }, 100); }
function swStop() { if(swInt) { clearInterval(swInt); swInt = null; } }
function swReset() { swStop(); swTime = 0; swUpdate(); }
function swUpdate() {
  var el = $('swDisplay'); if(!el) return;
  var cs = Math.floor(swTime / 10) % 100;
  var s = Math.floor(swTime / 1000) % 60;
  var m = Math.floor(swTime / 60000) % 60;
  var h = Math.floor(swTime / 3600000);
  el.textContent = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '.' + String(cs).padStart(2, '0');
}

TOOL_FUNCTIONS.pomodoro = function() {
  return '<div id="pomoDisplay" style="text-align:center;font-size:60px;font-family:monospace;font-weight:900;padding:30px;color:var(--accent)">25:00</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="pomoStart()">▶️ شروع</button><button class="btn btn-outline" onclick="pomoStop()">⏸ توقف</button></div>';
};
var pomoTime = 1500, pomoInt = null;
function pomoStart() {
  if(pomoInt) return;
  pomoInt = setInterval(function() {
    if(pomoTime <= 0) { clearInterval(pomoInt); pomoInt = null; playSound('chime'); showNotif('🍅 پومودورو تمام شد!', 'success'); return; }
    pomoTime--;
    var m = Math.floor(pomoTime / 60);
    var s = pomoTime % 60;
    var el = $('pomoDisplay'); if(el) el.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }, 1000);
}
function pomoStop() { if(pomoInt) { clearInterval(pomoInt); pomoInt = null; } }

TOOL_FUNCTIONS.shamsiConvert = function() {
  return '<input type="date" class="input" id="scGregorian" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doShamsi()">تبدیل</button></div><div class="tool-result" id="scResult"></div>';
};
function doShamsi() {
  var d = new Date($('scGregorian').value);
  if(isNaN(d)) { $('scResult').innerHTML = '<div style="color:var(--danger);padding:10px">تاریخ معتبر وارد کنید</div>'; return; }
  $('scResult').innerHTML = '<div class="result-item"><span>شمسی</span><strong>' + d.toLocaleDateString('fa-IR') + '</strong></div><div class="result-item"><span>میلادی</span><strong style="direction:ltr">' + d.toLocaleDateString('en-US') + '</strong></div>';
}

TOOL_FUNCTIONS.dayOfWeek = function() {
  return '<input type="date" class="input" id="dowInput" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doDayOfWeek()">محاسبه</button></div><div class="tool-result" id="dowResult"></div>';
};
function doDayOfWeek() {
  var d = new Date($('dowInput').value);
  if(isNaN(d)) { $('dowResult').innerHTML = '<div style="color:var(--danger);padding:10px">تاریخ معتبر</div>'; return; }
  var days = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
  $('dowResult').innerHTML = '<div class="result-item"><span>روز هفته</span><strong>' + days[d.getDay()] + '</strong></div>';
}

TOOL_FUNCTIONS.weekNumber = function() {
  return '<input type="date" class="input" id="wnInput" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doWeekNum()">محاسبه</button></div><div class="tool-result" id="wnResult"></div>';
};
function doWeekNum() {
  var d = new Date($('wnInput').value);
  if(isNaN(d)) { $('wnResult').innerHTML = '<div style="color:var(--danger);padding:10px">تاریخ معتبر</div>'; return; }
  var start = new Date(d.getFullYear(), 0, 1);
  var week = Math.ceil(((d - start) / 86400000 + start.getDay() + 1) / 7);
  $('wnResult').innerHTML = '<div class="result-item"><span>هفته سال</span><strong>' + week + '</strong></div>';
}

TOOL_FUNCTIONS.isLeapYear = function() {
  return '<input type="number" class="input" id="lyYear" placeholder="سال میلادی" value="2024" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doLeap()">بررسی</button></div><div class="tool-result" id="lyResult"></div>';
};
function doLeap() {
  var y = parseInt($('lyYear').value) || 2024;
  var isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  $('lyResult').innerHTML = '<div style="color:' + (isLeap ? 'var(--success)' : 'var(--danger)') + ';text-align:center;padding:15px;font-size:16px"><i class="fas fa-' + (isLeap ? 'check' : 'times') + '-circle"></i> ' + (isLeap ? 'سال کبیسه است' : 'سال کبیسه نیست') + '</div>';
}

TOOL_FUNCTIONS.timezoneConvert = function() {
  return '<input type="datetime-local" class="input" id="tzInput" style="margin-bottom:10px"><select class="input" id="tzTo" style="margin-bottom:10px"><option value="Asia/Tehran">تهران</option><option value="Europe/London">لندن</option><option value="America/New_York">نیویورک</option><option value="Asia/Tokyo">توکیو</option><option value="Asia/Dubai">دبی</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doTzConvert()">تبدیل</button></div><div class="tool-result" id="tzResult"></div>';
};
function doTzConvert() {
  var d = new Date($('tzInput').value);
  if(isNaN(d)) { $('tzResult').innerHTML = '<div style="color:var(--danger);padding:10px">تاریخ معتبر</div>'; return; }
  var tz = $('tzTo').value;
  try {
    var result = d.toLocaleString('fa-IR', { timeZone: tz, dateStyle: 'full', timeStyle: 'medium' });
    $('tzResult').innerHTML = '<div class="result-item"><span>' + tz + '</span><strong>' + result + '</strong></div>';
  } catch(e) { $('tzResult').innerHTML = '<div style="color:var(--danger)">خطا</div>'; }
}

TOOL_FUNCTIONS.durationFormat = function() {
  return '<input type="number" class="input" id="dfSeconds" placeholder="ثانیه" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doDurationFormat()">قالب</button></div><div class="tool-result" id="dfResult"></div>';
};
function doDurationFormat() {
  var s = parseInt($('dfSeconds').value) || 0;
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var sec = s % 60;
  $('dfResult').innerHTML = '<div class="result-item"><span>قالب</span><strong style="font-family:monospace;font-size:22px">' + String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0') + '</strong></div>';
}

TOOL_FUNCTIONS.prayerTimes = function() {
  return '<div style="padding:15px;line-height:1.8;text-align:center"><p style="color:var(--text-dim);margin-bottom:10px">اوقات شرعی تقریبی (برای دقت بیشتر به سایت‌های تخصصی مراجعه کنید)</p><div class="result-item"><span>اذان صبح</span><strong>۰۵:۱۵</strong></div><div class="result-item"><span>طلوع آفتاب</span><strong>۰۶:۳۵</strong></div><div class="result-item"><span>اذان ظهر</span><strong>۱۲:۱۰</strong></div><div class="result-item"><span>غروب آفتاب</span><strong>۱۷:۴۵</strong></div><div class="result-item"><span>اذان مغرب</span><strong>۱۸:۰۰</strong></div><div class="result-item"><span>نیمه شب شرعی</span><strong>۲۳:۳۰</strong></div></div>';
}

/* ═══ WEB TOOLS (20) ═══ */
TOOL_FUNCTIONS.qrGenerator = function() {
  return '<input class="input" id="qrText" placeholder="متن یا لینک" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doQR()">تولید QR</button></div><div id="qrResult" class="tool-result" style="text-align:center"></div>';
};
function doQR() {
  var v = $('qrText').value.trim();
  if(!v) return;
  var url = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(v);
  $('qrResult').innerHTML = '<img src="' + url + '" alt="QR" style="border-radius:10px;background:#fff;padding:10px;margin:10px auto"><br><button class="btn btn-outline" onclick="downloadQR(\'' + url + '\')">📥 دانلود</button>';
}
function downloadQR(url) {
  var a = document.createElement('a'); a.href = url; a.download = 'qr.png'; a.target = '_blank'; a.click();
}

TOOL_FUNCTIONS.colorPicker = function() {
  return '<input type="color" class="input" id="cpInput" value="#2563eb" style="height:80px;cursor:pointer;margin-bottom:10px" oninput="doColorPicker()"><div class="tool-result" id="cpResult"></div>';
};
function doColorPicker() {
  var hex = $('cpInput').value;
  var r = parseInt(hex.substr(1, 2), 16);
  var g = parseInt(hex.substr(3, 2), 16);
  var b = parseInt(hex.substr(5, 2), 16);
  $('cpResult').innerHTML = '<div class="result-item"><span>HEX</span><strong style="direction:ltr;font-family:monospace">' + hex + '</strong></div><div class="result-item"><span>RGB</span><strong style="direction:ltr;font-family:monospace">rgb(' + r + ', ' + g + ', ' + b + ')</strong></div>';
}

TOOL_FUNCTIONS.contrastCheck = function() {
  return '<input type="color" class="input" id="ccFg" value="#ffffff" style="margin-bottom:10px"><input type="color" class="input" id="ccBg" value="#000000" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doContrast()">بررسی</button></div><div class="tool-result" id="ccCResult"></div>';
};
function doContrast() {
  function lum(hex) {
    var r = parseInt(hex.substr(1, 2), 16) / 255;
    var g = parseInt(hex.substr(3, 2), 16) / 255;
    var b = parseInt(hex.substr(5, 2), 16) / 255;
    return 0.2126 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) + 0.7152 * (g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)) + 0.0722 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4));
  }
  var l1 = lum($('ccFg').value);
  var l2 = lum($('ccBg').value);
  var ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  var aa = ratio >= 4.5 ? '✅ قبول' : '❌ رد';
  var aaa = ratio >= 7 ? '✅ قبول' : '❌ رد';
  $('ccCResult').innerHTML = '<div class="result-item"><span>نسبت</span><strong>' + ratio.toFixed(2) + ':1</strong></div><div class="result-item"><span>AA</span><strong>' + aa + '</strong></div><div class="result-item"><span>AAA</span><strong>' + aaa + '</strong></div>';
}

TOOL_FUNCTIONS.paletteGen = function() {
  return '<input type="color" class="input" id="pgBase" value="#2563eb" style="margin-bottom:10px" oninput="doPalette()"><div id="pgResult" class="tool-result"></div>';
};
function doPalette() {
  var base = $('pgBase').value;
  var r = parseInt(base.substr(1, 2), 16);
  var g = parseInt(base.substr(3, 2), 16);
  var b = parseInt(base.substr(5, 2), 16);
  var colors = [];
  for(var i = -2; i <= 2; i++) {
    var nr = Math.max(0, Math.min(255, r + i * 40));
    var ng = Math.max(0, Math.min(255, g + i * 40));
    var nb = Math.max(0, Math.min(255, b + i * 40));
    colors.push('#' + [nr, ng, nb].map(function(x) { return x.toString(16).padStart(2, '0'); }).join(''));
  }
  $('pgResult').innerHTML = '<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;padding:10px">' + colors.map(function(c) {
    return '<div onclick="copyText(\'' + c + '\')" style="width:60px;height:60px;background:' + c + ';border-radius:10px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2)" title="' + c + '"></div>';
  }).join('') + '</div>';
}

TOOL_FUNCTIONS.gradientCSS = function() {
  return '<input type="color" class="input" id="gc1" value="#2563eb" style="margin-bottom:10px"><input type="color" class="input" id="gc2" value="#8b5cf6" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doGradient()">ساخت</button></div><div id="gcPreview" style="height:100px;border-radius:10px;margin:10px 0"></div><textarea class="input" id="gcResult" rows="2" readonly style="direction:ltr;font-family:monospace"></textarea>';
};
function doGradient() {
  var c1 = $('gc1').value, c2 = $('gc2').value;
  var css = 'background: linear-gradient(135deg, ' + c1 + ', ' + c2 + ');';
  $('gcPreview').style.cssText = 'height:100px;border-radius:10px;margin:10px 0;' + css;
  $('gcResult').value = css;
}

TOOL_FUNCTIONS.boxShadow = function() {
  return '<div class="tool-actions"><button class="btn btn-primary" onclick="doBoxShadow()">ساخت</button></div><div id="bsPreview" style="height:100px;background:var(--glass);border-radius:10px;margin:20px 0;display:flex;align-items:center;justify-content:center"><div id="bsBox" style="width:80px;height:80px;background:var(--primary);border-radius:10px;transition:all .3s"></div></div><textarea class="input" id="bsResult" rows="2" readonly style="direction:ltr;font-family:monospace"></textarea>';
};
function doBoxShadow() {
  var x = Math.floor(Math.random() * 20) + 5;
  var y = Math.floor(Math.random() * 20) + 5;
  var blur = Math.floor(Math.random() * 30) + 10;
  var shadow = x + 'px ' + y + 'px ' + blur + 'px rgba(0,0,0,0.3)';
  $('bsBox').style.boxShadow = shadow;
  $('bsResult').value = 'box-shadow: ' + shadow + ';';
}

TOOL_FUNCTIONS.borderRadius = function() {
  return '<div class="tool-actions"><button class="btn btn-primary" onclick="doBorderRadius()">ساخت</button></div><div style="height:100px;background:var(--glass);border-radius:10px;margin:20px 0;display:flex;align-items:center;justify-content:center"><div id="brBox" style="width:80px;height:80px;background:var(--primary);transition:all .3s"></div></div><textarea class="input" id="brResult" rows="2" readonly style="direction:ltr;font-family:monospace"></textarea>';
};
function doBorderRadius() {
  var r = Math.floor(Math.random() * 50) + 5;
  $('brBox').style.borderRadius = r + 'px';
  $('brResult').value = 'border-radius: ' + r + 'px;';
}

TOOL_FUNCTIONS.metatags = function() {
  return '<input class="input" id="mtTitle" placeholder="عنوان" style="margin-bottom:10px"><textarea class="input" id="mtDesc" rows="3" placeholder="توضیحات" style="margin-bottom:10px"></textarea><input class="input" id="mtKeywords" placeholder="کلمات کلیدی (با کاما)" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doMeta()">تولید</button></div><textarea class="input" id="mtResult" rows="8" readonly style="direction:ltr;font-family:monospace;font-size:11px"></textarea>';
};
function doMeta() {
  var title = $('mtTitle').value || 'عنوان سایت';
  var desc = $('mtDesc').value || 'توضیحات سایت';
  var kw = $('mtKeywords').value || '';
  var result = '<title>' + esc(title) + '</title>\n<meta name="description" content="' + esc(desc) + '">\n<meta name="keywords" content="' + esc(kw) + '">\n<meta property="og:title" content="' + esc(title) + '">\n<meta property="og:description" content="' + esc(desc) + '">\n<meta name="twitter:card" content="summary_large_image">';
  $('mtResult').value = result;
}

TOOL_FUNCTIONS.sitemapGen = function() {
  return '<input class="input" id="smUrl" placeholder="https://example.com" style="margin-bottom:10px;direction:ltr"><div class="tool-actions"><button class="btn btn-primary" onclick="doSitemap()">تولید</button></div><textarea class="input" id="smResult" rows="8" readonly style="direction:ltr;font-family:monospace;font-size:11px"></textarea>';
};
function doSitemap() {
  var url = $('smUrl').value || 'https://example.com';
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>' + url + '/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>';
  $('smResult').value = xml;
}

TOOL_FUNCTIONS.robotsGen = function() {
  return '<textarea class="input" id="rbResult" rows="8" readonly style="direction:ltr;font-family:monospace;font-size:12px">User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml</textarea>';
}

TOOL_FUNCTIONS.schemaGen = function() {
  return '<input class="input" id="scName" placeholder="نام کسب‌وکار" style="margin-bottom:10px"><input class="input" id="scUrl" placeholder="URL" style="margin-bottom:10px;direction:ltr"><input class="input" id="scPhone" placeholder="تلفن" style="margin-bottom:10px;direction:ltr"><div class="tool-actions"><button class="btn btn-primary" onclick="doSchema()">تولید</button></div><textarea class="input" id="schResult" rows="10" readonly style="direction:ltr;font-family:monospace;font-size:11px"></textarea>';
};
function doSchema() {
  var name = $('scName').value || 'کسب‌وکار';
  var url = $('scUrl').value || 'https://example.com';
  var phone = $('scPhone').value || '';
  var schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "url": url,
    "telephone": phone
  };
  $('schResult').value = JSON.stringify(schema, null, 2);
}

TOOL_FUNCTIONS.urlParser = function() {
  return '<input class="input" id="upInput" placeholder="https://example.com/path?query=1" style="margin-bottom:10px;direction:ltr"><div class="tool-actions"><button class="btn btn-primary" onclick="doUrlParse()">تجزیه</button></div><div class="tool-result" id="upResult"></div>';
};
function doUrlParse() {
  try {
    var u = new URL($('upInput').value);
    $('upResult').innerHTML = '<div class="result-item"><span>Protocol</span><strong style="direction:ltr">' + u.protocol + '</strong></div><div class="result-item"><span>Host</span><strong style="direction:ltr">' + u.host + '</strong></div><div class="result-item"><span>Path</span><strong style="direction:ltr">' + u.pathname + '</strong></div><div class="result-item"><span>Query</span><strong style="direction:ltr">' + u.search + '</strong></div>';
  } catch(e) { $('upResult').innerHTML = '<div style="color:var(--danger)">URL نامعتبر</div>'; }
}

TOOL_FUNCTIONS.passwordGen = function() {
  return '<input type="number" class="input" id="pwdLen" placeholder="طول" value="16" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doPasswordGen()">تولید</button></div><input class="input" id="pwdResult" readonly style="margin-top:10px;direction:ltr;font-family:monospace;font-size:16px">';
};
function doPasswordGen() {
  var len = parseInt($('pwdLen').value) || 16;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
  var r = '';
  var arr = new Uint32Array(len);
  crypto.getRandomValues(arr);
  for(var i = 0; i < len; i++) r += chars[arr[i] % chars.length];
  $('pwdResult').value = r;
}

TOOL_FUNCTIONS.passwordStrength = function() {
  return '<input type="password" class="input" id="psInput" placeholder="رمز" style="margin-bottom:10px" oninput="doPasswordStrength()"><div id="psBar" style="height:10px;background:var(--glass);border-radius:5px;overflow:hidden;margin-bottom:10px"><div id="psFill" style="height:100%;width:0;transition:all .3s"></div></div><div id="psResult" class="tool-result"></div>';
};
function doPasswordStrength() {
  var v = $('psInput').value;
  var score = 0;
  if(v.length >= 8) score++;
  if(v.length >= 12) score++;
  if(/[a-z]/.test(v) && /[A-Z]/.test(v)) score++;
  if(/\d/.test(v)) score++;
  if(/[^a-zA-Z0-9]/.test(v)) score++;
  var labels = ['خیلی ضعیف', 'ضعیف', 'متوسط', 'خوب', 'قوی', 'عالی'];
  var colors = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#059669'];
  var pct = score / 5 * 100;
  $('psFill').style.width = pct + '%';
  $('psFill').style.background = colors[score];
  $('psResult').innerHTML = '<div style="text-align:center;color:' + colors[score] + ';font-weight:bold">' + labels[score] + '</div>';
}

TOOL_FUNCTIONS.uuidGen = function() {
  return '<div class="tool-actions"><button class="btn btn-primary" onclick="doUUID()">تولید UUID</button></div><div class="tool-result" id="uuidResult"></div>';
};
function doUUID() {
  var uuid = (crypto.randomUUID && crypto.randomUUID()) || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  $('uuidResult').innerHTML = '<div class="result-item"><strong style="direction:ltr;font-family:monospace;font-size:14px">' + uuid + '</strong></div>';
}

TOOL_FUNCTIONS.hashMD5 = function() {
  return '<input class="input" id="md5Input" placeholder="متن" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doHashMD5()">هش</button></div><div class="tool-result" id="md5Result"></div>';
};
function doHashMD5() {
  var v = $('md5Input').value;
  var hash = 0;
  for(var i = 0; i < v.length; i++) {
    hash = ((hash << 5) - hash) + v.charCodeAt(i);
    hash = hash & hash;
  }
  $('md5Result').innerHTML = '<div class="result-item"><span>هش ساده</span><strong style="direction:ltr;font-family:monospace">' + Math.abs(hash).toString(16) + '</strong></div><div style="font-size:11px;color:var(--text-dim);padding:10px">توجه: این هش ساده است. برای امنیت واقعی از SHA-256 استفاده کنید.</div>';
}

TOOL_FUNCTIONS.hashSHA = function() {
  return '<input class="input" id="shaInput" placeholder="متن" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doHashSHA()">هش SHA-256</button></div><div class="tool-result" id="shaResult"></div>';
};
async function doHashSHA() {
  var v = $('shaInput').value;
  if(!crypto.subtle) { $('shaResult').innerHTML = '<div style="color:var(--danger)">HTTPS نیاز است</div>'; return; }
  try {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v));
    var hex = Array.from(new Uint8Array(buf)).map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
    $('shaResult').innerHTML = '<div class="result-item"><strong style="direction:ltr;font-family:monospace;word-break:break-all;font-size:12px">' + hex + '</strong></div>';
  } catch(e) { $('shaResult').innerHTML = '<div style="color:var(--danger)">خطا</div>'; }
}

TOOL_FUNCTIONS.ipLookup = function() {
  return '<div class="tool-actions"><button class="btn btn-primary" onclick="doIPLookup()">دریافت IP</button></div><div class="tool-result" id="ipResult"></div>';
};
async function doIPLookup() {
  $('ipResult').innerHTML = '<div style="text-align:center;padding:10px">در حال دریافت...</div>';
  try {
    var r = await fetch('https://api.ipify.org?format=json');
    var data = await r.json();
    $('ipResult').innerHTML = '<div class="result-item"><span>IP عمومی</span><strong style="direction:ltr;font-family:monospace">' + data.ip + '</strong></div>';
  } catch(e) { $('ipResult').innerHTML = '<div style="color:var(--danger);text-align:center;padding:10px">خطا در دریافت</div>'; }
}

TOOL_FUNCTIONS.browserInfo = function() {
  return '<div class="tool-result"><div class="result-item"><span>مرورگر</span><strong style="direction:ltr">' + navigator.userAgent.split(' ').slice(-2).join(' ') + '</strong></div><div class="result-item"><span>زبان</span><strong style="direction:ltr">' + navigator.language + '</strong></div><div class="result-item"><span>پلتفرم</span><strong style="direction:ltr">' + (navigator.platform || 'unknown') + '</strong></div><div class="result-item"><span>رزولوشن</span><strong style="direction:ltr">' + screen.width + '×' + screen.height + '</strong></div><div class="result-item"><span>آنلاین</span><strong>' + (navigator.onLine ? '✅' : '❌') + '</strong></div></div>';
}

/* ═══ GAMES (15) ═══ */
TOOL_FUNCTIONS.wheelSpin = function() {
  return '<div style="text-align:center;padding:20px"><div id="wheelEl" style="font-size:100px;transition:transform 3s cubic-bezier(.17,.67,.83,.67)">🎡</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="doSpin()">🎡 بچرخون</button></div><div id="spinResult" style="margin-top:15px;font-size:16px;font-weight:bold;text-align:center"></div></div>';
};
function doSpin() {
  var prizes = [5, 10, 15, 20, 25, 30, 50, 100];
  var w = $('wheelEl');
  w.style.transform = 'rotate(' + (720 + Math.random() * 360) + 'deg)';
  setTimeout(function() {
    var p = prizes[Math.floor(Math.random() * prizes.length)];
    $('spinResult').innerHTML = '🎉 جایزه: <span style="color:var(--accent)">' + p + ' سکه</span>';
    addCoins(p); fireConfetti(); playSound('chime');
  }, 3100);
}

TOOL_FUNCTIONS.memoryGame = function() {
  var icons = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐', '🌼', '🏵️'];
  var cards = icons.concat(icons).sort(function() { return Math.random() - 0.5; });
  return '<div class="tool-actions"><button class="btn btn-primary" onclick="openTool(\'memoryGame\')">🔄 شروع مجدد</button></div><div id="memGrid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:400px;margin:15px auto">' +
    cards.map(function(icon, i) { return '<div class="mem-card" data-icon="' + icon + '" data-idx="' + i + '" onclick="memFlip(this)" style="aspect-ratio:1;background:var(--glass);border:1px solid var(--border);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:28px;cursor:pointer">❓</div>'; }).join('') +
    '</div><div id="memStats" style="text-align:center;padding:10px"></div>';
};
var memFirst = null, memLock = false, memMatched = 0;
function memFlip(el) {
  if(memLock || el.dataset.flipped === '1' || el.dataset.matched === '1') return;
  el.textContent = el.dataset.icon;
  el.dataset.flipped = '1';
  if(!memFirst) { memFirst = el; return; }
  if(memFirst.dataset.icon === el.dataset.icon) {
    memFirst.dataset.matched = '1';
    el.dataset.matched = '1';
    memMatched++;
    memFirst = null;
    if(memMatched === 8) { $('memStats').innerHTML = '<div style="color:var(--success);font-size:18px">🎉 برنده شدی!</div>'; addCoins(20); fireConfetti(); }
    else $('memStats').innerHTML = '<div>جفت‌های پیداشده: ' + memMatched + '/8</div>';
  } else {
    memLock = true;
    setTimeout(function() {
      memFirst.textContent = '❓';
      el.textContent = '❓';
      memFirst.dataset.flipped = '0';
      el.dataset.flipped = '0';
      memFirst = null;
      memLock = false;
    }, 800);
  }
}

TOOL_FUNCTIONS.tictactoe = function() {
  return '<div id="tttBoard" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:300px;margin:15px auto">' +
    [0,1,2,3,4,5,6,7,8].map(function(i) { return '<div onclick="tttClick(this)" data-idx="' + i + '" style="aspect-ratio:1;background:var(--glass);border:1px solid var(--border);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:bold;cursor:pointer">—</div>'; }).join('') +
    '</div><div id="tttStatus" style="text-align:center;padding:10px;font-size:14px"></div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="openTool(\'tictactoe\')">🔄 بازی جدید</button></div>';
};
var tttBoard = Array(9).fill(''), tttTurn = 'X', tttDone = false;
function tttClick(el) {
  if(tttDone) return;
  var i = parseInt(el.dataset.idx);
  if(tttBoard[i]) return;
  tttBoard[i] = tttTurn;
  el.textContent = tttTurn;
  el.style.color = tttTurn === 'X' ? 'var(--primary)' : 'var(--danger)';
  if(checkTTT()) { $('tttStatus').innerHTML = '<div style="color:var(--success)">🎉 ' + tttTurn + ' برنده شد!</div>'; tttDone = true; return; }
  if(!tttBoard.includes('')) { $('tttStatus').innerHTML = '<div>مساوی!</div>'; tttDone = true; return; }
  tttTurn = tttTurn === 'X' ? 'O' : 'X';
  $('tttStatus').innerHTML = 'نوبت: <strong>' + tttTurn + '</strong>';
}
function checkTTT() {
  var lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return lines.some(function(l) { return tttBoard[l[0]] && tttBoard[l[0]] === tttBoard[l[1]] && tttBoard[l[1]] === tttBoard[l[2]]; });
}

TOOL_FUNCTIONS.todayDate = TOOL_FUNCTIONS.todayDate;
TOOL_FUNCTIONS.todayDate = function() {
  var d = new Date();
  return '<div class="result-grid"><div class="result-item"><span>شمسی</span><strong>' + d.toLocaleDateString('fa-IR') + '</strong></div><div class="result-item"><span>میلادی</span><strong style="direction:ltr">' + d.toLocaleDateString('en-US') + '</strong></div><div class="result-item"><span>روز</span><strong>' + d.toLocaleDateString('fa-IR', { weekday: 'long' }) + '</strong></div><div class="result-item"><span>ساعت</span><strong style="font-family:monospace">' + d.toLocaleTimeString('fa-IR') + '</strong></div></div>';
}

TOOL_FUNCTIONS.diceGame = function() {
  return '<div style="text-align:center;padding:20px"><div id="diceEl" style="font-size:100px">🎲</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="doDiceRoll()">تاس</button></div></div>';
};
function doDiceRoll() {
  var dice = ['⚀','⚁','⚂','⚃','⚄','⚅'];
  var r = Math.floor(Math.random() * 6) + 1;
  $('diceEl').textContent = dice[r - 1];
  if(r === 6) { addCoins(10); playSound('chime'); }
}

TOOL_FUNCTIONS.rockPaperScissor = function() {
  return '<div style="text-align:center;padding:20px"><div id="rpsResult" style="font-size:60px;margin-bottom:20px">🤔</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="rps(\'rock\')">✊ سنگ</button><button class="btn btn-primary" onclick="rps(\'paper\')">📄 کاغذ</button><button class="btn btn-primary" onclick="rps(\'scissor\')">✂️ قیچی</button></div></div>';
};
function rps(choice) {
  var options = { rock: '✊', paper: '📄', scissor: '✂️' };
  var cpu = ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];
  var result;
  if(choice === cpu) result = 'مساوی';
  else if((choice === 'rock' && cpu === 'scissor') || (choice === 'paper' && cpu === 'rock') || (choice === 'scissor' && cpu === 'paper')) result = '🎉 بردی!';
  else result = '😢 باختی';
  $('rpsResult').innerHTML = options[choice] + ' vs ' + options[cpu] + '<div style="font-size:18px;margin-top:10px">' + result + '</div>';
}

TOOL_FUNCTIONS.numberGuess = function() {
  window._ngNum = Math.floor(Math.random() * 100) + 1;
  window._ngTries = 0;
  return '<div style="padding:15px"><p style="text-align:center;margin-bottom:15px">عددی بین ۱ تا ۱۰۰ حدس بزن</p><input type="number" class="input" id="ngInput" placeholder="حدس" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doGuess()">حدس</button></div><div id="ngResult" style="text-align:center;padding:15px;font-size:16px"></div></div>';
};
function doGuess() {
  var g = parseInt($('ngInput').value) || 0;
  window._ngTries++;
  if(g === window._ngNum) { $('ngResult').innerHTML = '<div style="color:var(--success);font-size:18px">🎉 درست! در ' + window._ngTries + ' تلاش</div>'; addCoins(15); fireConfetti(); }
  else if(g < window._ngNum) $('ngResult').innerHTML = '<div style="color:var(--warning)">⬆️ بالاتر</div>';
  else $('ngResult').innerHTML = '<div style="color:var(--warning)">⬇️ پایین‌تر</div>';
}

TOOL_FUNCTIONS.fortune = function() {
  var poems = ['الا یا ایها الساقی ادر کاساً و ناولها', 'دوش وقت سحر از غصه نجاتم دادند', 'رسید مژده که ایام غم نخواهد ماند', 'یوسف گم‌گشته بازآید به کنعان غم مخور', 'هر که را جامه ز عشقی چاک شد', 'به جهان خرم از آنم که جهان خرم از اوست'];
  return '<div style="padding:20px;text-align:center"><div style="font-size:60px;margin-bottom:15px">📖</div><div id="fortuneResult" style="padding:20px;background:var(--glass);border-radius:12px;font-size:16px;line-height:2;min-height:80px">برای گرفتن فال کلیک کنید</div><div class="tool-actions" style="justify-content:center;margin-top:15px"><button class="btn btn-primary" onclick="doFortune()">🔮 فال</button></div></div>';
};
function doFortune() {
  var poems = ['الا یا ایها الساقی ادر کاساً و ناولها', 'دوش وقت سحر از غصه نجاتم دادند', 'رسید مژده که ایام غم نخواهد ماند', 'یوسف گم‌گشته بازآید به کنعان غم مخور', 'هر که را جامه ز عشقی چاک شد', 'به جهان خرم از آنم که جهان خرم از اوست'];
  $('fortuneResult').textContent = poems[Math.floor(Math.random() * poems.length)];
}

TOOL_FUNCTIONS.dailyQuote = function() {
  var quotes = [
    { t: 'موفقیت نتیجه پشتکار است.', a: 'ناشناس' },
    { t: 'کیفیت هرگز تصادفی نیست.', a: 'جان راسکین' },
    { t: 'دانش قدرت است.', a: 'فرانسیس بیکن' },
    { t: 'تنها راه انجام کار بزرگ، عشق به کاری است که انجام می‌دهی.', a: 'استیو جابز' }
  ];
  return '<div style="padding:20px;text-align:center"><div style="font-size:60px;margin-bottom:15px">💭</div><div id="quoteResult" style="padding:20px;background:var(--glass);border-radius:12px;font-size:16px;line-height:2;font-style:italic;min-height:80px">برای دریافت جمله کلیک کنید</div><div class="tool-actions" style="justify-content:center;margin-top:15px"><button class="btn btn-primary" onclick="doQuote()">💭 جمله جدید</button></div></div>';
};
function doQuote() {
  var quotes = [
    { t: 'موفقیت نتیجه پشتکار است.', a: 'ناشناس' },
    { t: 'کیفیت هرگز تصادفی نیست.', a: 'جان راسکین' },
    { t: 'دانش قدرت است.', a: 'فرانسیس بیکن' }
  ];
  var q = quotes[Math.floor(Math.random() * quotes.length)];
  $('quoteResult').innerHTML = '«' + q.t + '»<br><small style="color:var(--text-dim);margin-top:10px;display:block">— ' + q.a + '</small>';
}

TOOL_FUNCTIONS.breathe = function() {
  return '<div style="padding:20px;text-align:center"><div id="breatheCircle" style="width:150px;height:150px;margin:20px auto;border-radius:50%;background:radial-gradient(circle, var(--primary), var(--secondary));display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-weight:bold;transition:all 4s">آماده</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="doBreathe()">▶️ شروع تمرین</button></div></div>';
};
function doBreathe() {
  var c = $('breatheCircle');
  c.style.width = c.style.height = '250px';
  c.textContent = 'دم (4s)';
  setTimeout(function() { c.textContent = 'نگه دار (7s)'; }, 4000);
  setTimeout(function() { c.style.width = c.style.height = '150px'; c.textContent = 'بازدم (8s)'; }, 11000);
  setTimeout(function() { c.textContent = '✅ تمام'; }, 19000);
}

TOOL_FUNCTIONS.moodSelector = function() {
  var moods = [
    { icon: '😊', name: 'خوشحال', color: '#fbbf24' },
    { icon: '😢', name: 'غمگین', color: '#3b82f6' },
    { icon: '😡', name: 'عصبانی', color: '#ef4444' },
    { icon: '😴', name: 'خسته', color: '#8b5cf6' },
    { icon: '😰', name: 'نگران', color: '#f97316' },
    { icon: '😌', name: 'آرام', color: '#10b981' }
  ];
  return '<div style="padding:15px"><p style="text-align:center;margin-bottom:15px">امروز چه حالی داری؟</p><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">' +
    moods.map(function(m) { return '<button class="btn btn-outline" style="padding:20px;font-size:40px" onclick="showToast(\'حال شما: ' + m.name + '\')">' + m.icon + '</button>'; }).join('') +
    '</div></div>';
}

/* ═══ HEALTH (10) ═══ */
TOOL_FUNCTIONS.waterIntake = function() {
  return '<input type="number" class="input" id="wiWeight" placeholder="وزن (kg)" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doWater()">محاسبه</button></div><div class="tool-result" id="wiResult"></div>';
};
function doWater() {
  var w = parseFloat($('wiWeight').value) || 70;
  var liters = w * 0.033;
  $('wiResult').innerHTML = '<div class="result-item"><span>آب روزانه</span><strong style="font-size:28px;color:var(--accent)">' + liters.toFixed(1) + ' لیتر</strong></div><div class="result-item"><span>لیوان (۲۵۰ml)</span><strong>' + Math.round(liters * 4) + ' لیوان</strong></div>';
}

TOOL_FUNCTIONS.calorieCalc = function() {
  return '<select class="input" id="calGender" style="margin-bottom:10px"><option value="m">مرد</option><option value="f">زن</option></select><input type="number" class="input" id="calAge" placeholder="سن" style="margin-bottom:10px"><input type="number" class="input" id="calWeight" placeholder="وزن (kg)" style="margin-bottom:10px"><input type="number" class="input" id="calHeight" placeholder="قد (cm)" style="margin-bottom:10px"><select class="input" id="calActivity" style="margin-bottom:10px"><option value="1.2">کم‌تحرک</option><option value="1.375">متوسط</option><option value="1.55">فعال</option><option value="1.725">خیلی فعال</option></select><div class="tool-actions"><button class="btn btn-primary" onclick="doCalorie()">محاسبه</button></div><div class="tool-result" id="calResult"></div>';
};
function doCalorie() {
  var g = $('calGender').value, a = parseFloat($('calAge').value) || 30, w = parseFloat($('calWeight').value) || 70, h = parseFloat($('calHeight').value) || 170, act = parseFloat($('calActivity').value) || 1.375;
  var bmr = g === 'm' ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
  var tdee = bmr * act;
  $('calResult').innerHTML = '<div class="result-item"><span>BMR</span><strong>' + Math.round(bmr) + ' kcal</strong></div><div class="result-item"><span>TDEE</span><strong style="color:var(--accent);font-size:22px">' + Math.round(tdee) + ' kcal</strong></div>';
}

/* ═══ FINANCE (20) ═══ */
TOOL_FUNCTIONS.loanPayment = TOOL_FUNCTIONS.loanCalc;
TOOL_FUNCTIONS.savingsGoal = function() {
  return '<input type="number" class="input" id="sgGoal" placeholder="هدف (تومان)" style="margin-bottom:10px"><input type="number" class="input" id="sgMonthly" placeholder="پس‌انداز ماهانه" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doSavings()">محاسبه</button></div><div class="tool-result" id="sgResult"></div>';
};
function doSavings() {
  var g = parseFloat($('sgGoal').value) || 0;
  var m = parseFloat($('sgMonthly').value) || 0;
  if(m === 0) { $('sgResult').innerHTML = '<div style="color:var(--danger)">پس‌انداز ماهانه را وارد کنید</div>'; return; }
  var months = Math.ceil(g / m);
  $('sgResult').innerHTML = '<div class="result-item"><span>مدت</span><strong style="font-size:22px;color:var(--accent)">' + months + ' ماه</strong></div>';
}

TOOL_FUNCTIONS.investment = function() {
  return '<input type="number" class="input" id="invAmount" placeholder="سرمایه" style="margin-bottom:10px"><input type="number" class="input" id="invRate" placeholder="نرخ سالانه (٪)" value="20" style="margin-bottom:10px"><input type="number" class="input" id="invYears" placeholder="سال" value="10" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doInvestment()">محاسبه</button></div><div class="tool-result" id="invResult"></div>';
};
function doInvestment() {
  var p = parseFloat($('invAmount').value) || 0;
  var r = (parseFloat($('invRate').value) || 20) / 100;
  var y = parseInt($('invYears').value) || 10;
  var total = p * Math.pow(1 + r, y);
  $('invResult').innerHTML = '<div class="result-item"><span>ارزش نهایی</span><strong style="color:var(--success);font-size:22px">' + Math.round(total).toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>سود</span><strong>' + Math.round(total - p).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.budget50_30_20 = function() {
  return '<input type="number" class="input" id="budgetIncome" placeholder="درآمد ماهانه" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doBudget()">تقسیم</button></div><div class="tool-result" id="budgetResult"></div>';
};
function doBudget() {
  var i = parseFloat($('budgetIncome').value) || 0;
  $('budgetResult').innerHTML = '<div class="result-item"><span>نیازها (۵۰٪)</span><strong>' + (i * 0.5).toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>خواسته‌ها (۳۰٪)</span><strong>' + (i * 0.3).toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>پس‌انداز (۲۰٪)</span><strong style="color:var(--success)">' + (i * 0.2).toLocaleString('fa-IR') + '</strong></div>';
}

TOOL_FUNCTIONS.currencyConvert = function() {
  return '<input type="number" class="input" id="ccVal" placeholder="مقدار" style="margin-bottom:10px"><select class="input" id="ccCur" style="margin-bottom:10px"><option value="usd">دلار → تومان</option><option value="eur">یورو → تومان</option></select><input type="number" class="input" id="ccRate" placeholder="نرخ" value="68500" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doCurrencyConvert()">تبدیل</button></div><div class="tool-result" id="ccRes"></div>';
};
function doCurrencyConvert() {
  var v = parseFloat($('ccVal').value) || 0;
  var r = parseFloat($('ccRate').value) || 68500;
  $('ccRes').innerHTML = '<div class="result-item"><span>نتیجه</span><strong style="font-size:22px;color:var(--accent)">' + (v * r).toLocaleString('fa-IR') + ' تومان</strong></div>';
}

TOOL_FUNCTIONS.profitMargin = function() {
  return '<input type="number" class="input" id="pmRevenue" placeholder="درآمد" style="margin-bottom:10px"><input type="number" class="input" id="pmCost" placeholder="هزینه" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doProfitMargin()">محاسبه</button></div><div class="tool-result" id="pmResult"></div>';
};
function doProfitMargin() {
  var r = parseFloat($('pmRevenue').value) || 0;
  var c = parseFloat($('pmCost').value) || 0;
  var profit = r - c;
  var margin = r > 0 ? (profit / r * 100) : 0;
  $('pmResult').innerHTML = '<div class="result-item"><span>سود</span><strong>' + profit.toLocaleString('fa-IR') + '</strong></div><div class="result-item"><span>حاشیه سود</span><strong style="color:' + (margin >= 0 ? 'var(--success)' : 'var(--danger)') + ';font-size:22px">' + margin.toFixed(1) + '٪</strong></div>';
}

TOOL_FUNCTIONS.roiCalc = function() {
  return '<input type="number" class="input" id="roiInvest" placeholder="سرمایه‌گذاری" style="margin-bottom:10px"><input type="number" class="input" id="roiReturn" placeholder="بازگشت" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doROI()">محاسبه</button></div><div class="tool-result" id="roiResult"></div>';
};
function doROI() {
  var i = parseFloat($('roiInvest').value) || 0;
  var r = parseFloat($('roiReturn').value) || 0;
  if(i === 0) return;
  var roi = ((r - i) / i) * 100;
  $('roiResult').innerHTML = '<div class="result-item"><span>ROI</span><strong style="color:' + (roi >= 0 ? 'var(--success)' : 'var(--danger)') + ';font-size:26px">' + roi.toFixed(1) + '٪</strong></div>';
}

/* ═══ MISC (30) ═══ */
TOOL_FUNCTIONS.randomPicker = function() {
  return '<textarea class="input" id="rpOptions" rows="5" placeholder="هر گزینه در یک خط..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doRandomPicker()">انتخاب</button></div><div class="tool-result" id="rpResult"></div>';
};
function doRandomPicker() {
  var opts = $('rpOptions').value.split(/\r?\n/).filter(function(x) { return x.trim(); });
  if(!opts.length) return;
  var pick = opts[Math.floor(Math.random() * opts.length)];
  $('rpResult').innerHTML = '<div style="text-align:center;padding:20px;font-size:24px;color:var(--accent);font-weight:bold">🎯 ' + esc(pick) + '</div>';
}

TOOL_FUNCTIONS.listShuffle = function() {
  return '<textarea class="input" id="lsInput" rows="5" placeholder="هر مورد در یک خط..."></textarea><div class="tool-actions"><button class="btn btn-primary" onclick="doShuffle()">شافل</button></div><textarea class="input" id="lsResult" rows="5" readonly style="margin-top:10px"></textarea>';
};
function doShuffle() {
  var arr = $('lsInput').value.split(/\r?\n/).filter(Boolean);
  for(var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var temp = arr[i]; arr[i] = arr[j]; arr[j] = temp; }
  $('lsResult').value = arr.join('\n');
}

TOOL_FUNCTIONS.yesNo = function() {
  return '<div style="text-align:center;padding:20px"><div id="ynResult" style="font-size:80px;margin-bottom:20px">❓</div><div class="tool-actions" style="justify-content:center"><button class="btn btn-primary" onclick="doYesNo()">🎲 بنداز</button></div></div>';
};
function doYesNo() {
  var r = Math.random() < 0.5 ? '✅ بله' : '❌ خیر';
  $('ynResult').textContent = r;
}

TOOL_FUNCTIONS.randomColor = function() {
  return '<div class="tool-actions"><button class="btn btn-primary" onclick="doRandomColor()">🎨 رنگ جدید</button></div><div id="rcPreview" style="height:150px;border-radius:10px;margin:20px 0;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.5)"></div><div class="tool-result" id="rcResult"></div>';
};
function doRandomColor() {
  var hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  $('rcPreview').style.background = hex;
  $('rcPreview').textContent = hex;
  $('rcResult').innerHTML = '<div class="result-item"><span>کلیک کنید تا کپی شود</span><button class="btn btn-primary" onclick="copyText(\'' + hex + '\')">📋 کپی</button></div>';
}

TOOL_FUNCTIONS.numberToWords = function() {
  return '<input type="number" class="input" id="ntwInput" placeholder="عدد" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doNumberToWords()">تبدیل</button></div><div class="tool-result" id="ntwResult"></div>';
};
function doNumberToWords() {
  var n = parseInt($('ntwInput').value) || 0;
  var ones = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
  var teens = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
  var tens = ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
  var hundreds = ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
  function convert(num) {
    if(num === 0) return 'صفر';
    var parts = [];
    if(num >= 1000000000) { parts.push(convert(Math.floor(num / 1000000000)) + ' میلیارد'); num %= 1000000000; }
    if(num >= 1000000) { parts.push(convert(Math.floor(num / 1000000)) + ' میلیون'); num %= 1000000; }
    if(num >= 1000) { parts.push(convert(Math.floor(num / 1000)) + ' هزار'); num %= 1000; }
    if(num >= 100) { parts.push(hundreds[Math.floor(num / 100)]); num %= 100; }
    if(num >= 20) { parts.push(tens[Math.floor(num / 10)]); num %= 10; }
    if(num >= 10) { parts.push(teens[num - 10]); num = 0; }
    if(num > 0) parts.push(ones[num]);
    return parts.join(' و ');
  }
  $('ntwResult').innerHTML = '<div style="padding:15px;text-align:center;font-size:18px;line-height:2">' + convert(n) + '</div>';
}

TOOL_FUNCTIONS.nationalCodeCheck = function() {
  return '<input type="text" class="input" id="nccInput" placeholder="کد ملی ۱۰ رقمی" maxlength="10" style="margin-bottom:10px;direction:ltr"><div class="tool-actions"><button class="btn btn-primary" onclick="doNCCheck()">بررسی</button></div><div class="tool-result" id="nccResult"></div>';
};
function doNCCheck() {
  var code = $('nccInput').value;
  if(!/^\d{10}$/.test(code)) { $('nccResult').innerHTML = '<div style="color:var(--danger);padding:10px;text-align:center">کد ملی باید ۱۰ رقم باشد</div>'; return; }
  var sum = 0;
  for(var i = 0; i < 9; i++) sum += parseInt(code[i]) * (10 - i);
  var rem = sum % 11;
  var check = parseInt(code[9]);
  var valid = (rem < 2 && check === rem) || (rem >= 2 && check === 11 - rem);
  $('nccResult').innerHTML = '<div style="color:' + (valid ? 'var(--success)' : 'var(--danger)') + ';padding:15px;text-align:center;font-size:16px"><i class="fas fa-' + (valid ? 'check' : 'times') + '-circle"></i> ' + (valid ? 'کد ملی معتبر' : 'کد ملی نامعتبر') + '</div>';
}

TOOL_FUNCTIONS.romanNumeral = function() {
  return '<input type="number" class="input" id="rn2Input" placeholder="عدد" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doRoman()">تبدیل</button></div><div class="tool-result" id="rn2Result"></div>';
};
function doRoman() {
  var n = parseInt($('rn2Input').value) || 0;
  if(n < 1 || n > 3999) { $('rn2Result').innerHTML = '<div style="color:var(--danger)">عدد ۱ تا ۳۹۹۹</div>'; return; }
  var map = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  var result = '';
  map.forEach(function(m) { while(n >= m[0]) { result += m[1]; n -= m[0]; } });
  $('rn2Result').innerHTML = '<div style="text-align:center;font-size:32px;font-family:serif;color:var(--accent);padding:15px">' + result + '</div>';
}

TOOL_FUNCTIONS.factorization = function() {
  return '<input type="number" class="input" id="factN" placeholder="عدد" style="margin-bottom:10px"><div class="tool-actions"><button class="btn btn-primary" onclick="doFactorize()">تجزیه</button></div><div class="tool-result" id="factR"></div>';
};
function doFactorize() {
  var n = parseInt($('factN').value) || 0;
  var factors = [];
  var d = 2;
  while(n > 1) { while(n % d === 0) { factors.push(d); n /= d; } d++; if(d * d > n && n > 1) { factors.push(n); break; } }
  $('factR').innerHTML = '<div class="result-item"><span>عوامل اول</span><strong style="direction:ltr">' + factors.join(' × ') + '</strong></div>';
}

TOOL_FUNCTIONS.dailyAffirmation = function() {
  var affirmations = ['من توانایی رسیدن به اهدافم را دارم', 'هر روز بهتر از دیروز هستم', 'آرامش و شادی در زندگی من جریان دارد', 'من لایق بهترین‌ها هستم', 'قدرت درون من بی‌پایان است'];
  return '<div style="padding:20px;text-align:center"><div style="font-size:60px;margin-bottom:15px">✨</div><div id="affResult" style="padding:20px;background:var(--glass);border-radius:12px;font-size:18px;line-height:2;min-height:80px">جمله تاکیدی امروزت رو بگیر</div><div class="tool-actions" style="justify-content:center;margin-top:15px"><button class="btn btn-primary" onclick="doAffirmation()">✨ جدید</button></div></div>';
};
function doAffirmation() {
  var aff = ['من توانایی رسیدن به اهدافم را دارم', 'هر روز بهتر از دیروز هستم', 'آرامش و شادی در زندگی من جریان دارد', 'من لایق بهترین‌ها هستم', 'قدرت درون من بی‌پایان است'];
  $('affResult').textContent = aff[Math.floor(Math.random() * aff.length)];
}

/* ═══════════════ CART ═══════════════ */
function addToCart(id) {
  var p = PRODUCTS.find(function(x) { return x.id === id; });
  if(!p) return;
  var ex = STATE.cart.find(function(c) { return c.id === id; });
  if(ex) ex.qty++; else STATE.cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
  saveAll(); updateCartUI();
  showNotif('🛒 ' + L(p.name), 'success');
  playSound('pop'); addCoins(5);
}
function removeFromCart(id) {
  STATE.cart = STATE.cart.filter(function(c) { return c.id !== id; });
  saveAll(); updateCartUI();
}
function updateCartUI() {
  var items = $('cartItems'); var total = $('cartTotal'); var badge = $('cartBadge');
  var qty = STATE.cart.reduce(function(s, c) { return s + c.qty; }, 0);
  var price = STATE.cart.reduce(function(s, c) { return s + c.price * c.qty; }, 0);
  if(badge) badge.textContent = qty;
  if(total) total.textContent = price.toLocaleString('fa-IR');
  if(items) {
    items.innerHTML = STATE.cart.length === 0
      ? '<p style="text-align:center;color:var(--text-dim);padding:30px;font-size:12px">' + t('emptyCart') + '</p>'
      : STATE.cart.map(function(it) {
          return '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--glass);border-radius:10px;margin-bottom:8px;border:1px solid var(--border);gap:10px"><div style="min-width:0"><h5 style="font-size:12px">' + esc(L(it.name)) + ' × ' + it.qty + '</h5><p style="color:var(--accent);font-size:11px;font-weight:bold">' + (it.price * it.qty).toLocaleString('fa-IR') + '</p></div><button onclick="removeFromCart(' + it.id + ')" style="background:var(--danger);color:#fff;border:none;width:30px;height:30px;border-radius:7px;font-size:11px;flex-shrink:0"><i class="fas fa-trash"></i></button></div>';
        }).join('');
  }
}
function toggleFav(id) {
  var i = STATE.favorites.indexOf(id);
  if(i > -1) STATE.favorites.splice(i, 1); else STATE.favorites.push(id);
  saveAll(); renderProducts(); playSound('pop');
}

/* ═══════════════ AUTH (OTP) ═══════════════ */
function sendOTP() {
  var ee = $('emailInput'); var email = ee ? ee.value.trim() : '';
  if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { showToast('⚠️ ایمیل معتبر'); return; }
  STATE.otpCode = String(Math.floor(100000 + Math.random() * 900000));
  STATE.otpEmail = email; STATE.otpExpiry = Date.now() + 300000;
  showNotif('📧 کد نمایشی: ' + STATE.otpCode, 'success');
  playSound('chime');
  $('authForm').style.display = 'none';
  $('otpForm').style.display = 'block';
  var first = document.querySelector('.otp-input');
  if(first) setTimeout(function() { first.focus(); }, 300);
}
function verifyOTP() {
  var inputs = document.querySelectorAll('.otp-input'); var code = '';
  inputs.forEach(function(i) { code += i.value; });
  if(code.length !== 6) { showOTPError('کد ۶ رقمی را کامل کنید'); return; }
  if(code === STATE.otpCode) {
    localStorage.setItem('dz_loggedIn', 'true');
    closeModal('authModal');
    showNotif('🎉 خوش آمدید!', 'success');
    playSound('chime'); addCoins(10); fireConfetti();
    var a = $('authBtn'); if(a) a.innerHTML = '<i class="fas fa-user-check" style="color:var(--success)"></i>';
    inputs.forEach(function(i) { i.value = ''; i.classList.remove('filled'); });
    $('authForm').style.display = 'block'; $('otpForm').style.display = 'none';
  } else {
    showOTPError('❌ کد نادرست');
    inputs.forEach(function(i) { i.value = ''; i.classList.remove('filled'); });
  }
}
function showOTPError(m) { var e = $('otpError'); if(!e) return; e.textContent = m; e.style.display = 'block'; setTimeout(function() { e.style.display = 'none'; }, 4000); }
function backToEmail() { $('authForm').style.display = 'block'; $('otpForm').style.display = 'none'; }

/* ═══════════════ REVIEWS ═══════════════ */
function submitReview() {
  var n = $('revName'); var tx = $('revText');
  var name = n ? n.value.trim() : ''; var text = tx ? tx.value.trim() : '';
  if(!name || !text || !STATE.currentSectionRating) { showToast('⚠️ فیلدها را پر کنید'); return; }
  STATE.reviews.unshift({ id: Date.now(), name: name, text: text, rating: STATE.currentSectionRating, date: new Date().toISOString() });
  saveAll(); renderReviews();
  if(n) n.value = ''; if(tx) tx.value = ''; STATE.currentSectionRating = 0;
  document.querySelectorAll('#sectionRating span').forEach(function(s) { s.classList.remove('active'); });
  showNotif('✅ نظر ثبت شد', 'success'); playSound('chime'); addCoins(10); fireConfetti();
}
function renderReviews() {
  var l = $('reviewsList'); if(!l) return;
  if(!STATE.reviews.length) { l.innerHTML = '<p style="text-align:center;color:var(--text-dim);padding:30px">هنوز نظری ثبت نشده</p>'; return; }
  l.innerHTML = STATE.reviews.map(function(r) {
    return '<div class="review-item"><div class="review-header"><div style="display:flex;gap:10px;align-items:center"><div class="review-avatar">' + esc(r.name.charAt(0).toUpperCase()) + '</div><div><h5>' + esc(r.name) + '</h5><span style="font-size:11px;color:var(--text-dim)">' + new Date(r.date).toLocaleDateString('fa-IR') + '</span></div></div><div class="review-stars">' + '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating) + '</div></div><p class="review-text">' + esc(r.text) + '</p></div>';
  }).join('');
}

/* ═══════════════ SETTINGS ═══════════════ */
function toggleMotion(b) { b.classList.toggle('on'); }
function exportData() {
  var data = { cart: STATE.cart, favorites: STATE.favorites, coins: STATE.coins, reviews: STATE.reviews, exported: new Date().toISOString() };
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'digitalize-' + Date.now() + '.json'; a.click();
  showNotif('✅ خروجی گرفته شد', 'success');
}
function resetAll() { if(!confirm('همه داده‌ها پاک شود؟')) return; localStorage.clear(); location.reload(); }

/* ═══════════════ CHAT ═══════════════ */
function openChat() { $('chatWidget').classList.add('open'); }
function closeChat() { $('chatWidget').classList.remove('open'); }
function quickChat(t) { var i = $('chatInput'); if(i) { i.value = t; sendChat(); } }
function sendChat() {
  var inp = $('chatInput'); var text = inp ? inp.value.trim() : '';
  if(!text) return;
  var msgs = $('chatMessages');
  var u = document.createElement('div'); u.className = 'chat-message user'; u.textContent = text; msgs.appendChild(u);
  inp.value = ''; msgs.scrollTop = msgs.scrollHeight;
  setTimeout(function() {
    var b = document.createElement('div'); b.className = 'chat-message bot'; b.textContent = getReply(text);
    msgs.appendChild(b); msgs.scrollTop = msgs.scrollHeight;
  }, 600);
}
function getReply(t) {
  var lower = t.toLowerCase();
  if(lower.indexOf('قیمت') > -1 || lower.indexOf('price') > -1) return '💰 سایت: ۹M | اپ: ۳۲M | سئو: ۵M';
  if(lower.indexOf('سایت') > -1 || lower.indexOf('site') > -1) return '🌐 سایت فروشگاهی ۴۸.۵M';
  if(lower.indexOf('اپ') > -1 || lower.indexOf('app') > -1) return '📱 اپلیکیشن ۳۲M';
  if(lower.indexOf('سئو') > -1 || lower.indexOf('seo') > -1) return '🔍 سئو از ۵M';
  if(lower.indexOf('تخفیف') > -1 || lower.indexOf('discount') > -1) return '🎁 ۲۶٪ تخفیف فعال!';
  if(lower.indexOf('سلام') > -1 || lower.indexOf('hello') > -1) return 'سلام! 😊 چطور کمکتون کنم؟';
  return 'برای اطلاعات بیشتر با @digitalize_admin تماس بگیرید.';
}

/* ═══════════════ CHECKOUT ═══════════════ */
function openCheckout() {
  if(!STATE.cart.length) { showToast('⚠️ سبد خالی'); return; }
  var total = STATE.cart.reduce(function(s, c) { return s + c.price * c.qty; }, 0);
  $('checkoutAmount').textContent = total.toLocaleString('fa-IR') + ' تومان';
  openModal('checkoutModal');
}
function sendBankOTP() { STATE.bankOTP = String(Math.floor(100000 + Math.random() * 900000)); showToast('🔐 کد نمایشی: ' + STATE.bankOTP); }
function processPayment() {
  var otp = $('bankOTP') ? $('bankOTP').value : '';
  if(otp !== STATE.bankOTP) { showToast('❌ رمز نادرست'); return; }
  var card = $('cardNumber') ? $('cardNumber').value.replace(/\s/g, '') : '';
  if(card.length < 16) { showToast('⚠️ شماره کارت نامعتبر'); return; }
  closeModal('checkoutModal');
  showNotif('✅ پرداخت موفق (نمایشی)!', 'success'); playSound('chime'); addCoins(50);
  STATE.cart = []; saveAll(); updateCartUI(); fireConfetti();
}

/* ═══════════════ CONFETTI ═══════════════ */
function fireConfetti() {
  var colors = ['#2563eb', '#60a5fa', '#ef4444', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
  for(var i = 0; i < 50; i++) {
    var piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.5 + 's';
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    if(Math.random() > 0.5) piece.style.borderRadius = '50%';
    document.body.appendChild(piece);
    setTimeout(function(p) { return function() { p.remove(); }; }(piece), 5000);
  }
}

/* ═══════════════ SHARE ═══════════════ */
function sharePage() {
  if(navigator.share) { navigator.share({ title: 'دیجیتالایز', url: location.href }).catch(function() {}); }
  else { copyText(location.href); }
}
function copyText(text) {
  if(navigator.clipboard) { navigator.clipboard.writeText(text).then(function() { showToast('📋 کپی شد!'); }); }
  else { showToast('📋 ' + text); }
}

/* ═══════════════ PWA ═══════════════ */
function installPWA() {
  if(STATE.deferredPrompt) {
    STATE.deferredPrompt.prompt();
    STATE.deferredPrompt.userChoice.then(function(c) {
      if(c.outcome === 'accepted') showNotif('✅ نصب شد!', 'success');
      STATE.deferredPrompt = null;
      closePWA();
    });
  } else {
    showNotif(t('installHint'), 'info');
  }
}
function closePWA() { $('pwaInstall').classList.remove('show'); localStorage.setItem('dz_pwaDismissed', 'true'); }

/* ═══════════════ SEARCH ═══════════════ */
function setupSearch() {
  var input = $('searchInput'); if(!input) return;
  input.addEventListener('input', function(e) {
    STATE.searchQuery = e.target.value.trim();
    renderTools();
    var sug = $('searchSug');
    if(!sug) return;
    if(!STATE.searchQuery) { sug.classList.remove('active'); return; }
    var q = STATE.searchQuery.toLowerCase();
    var matches = TOOLS.filter(function(t) { return t.name.toLowerCase().indexOf(q) > -1 || t.desc.toLowerCase().indexOf(q) > -1; }).slice(0, 5);
    if(!matches.length) { sug.classList.remove('active'); return; }
    sug.innerHTML = matches.map(function(t) {
      return '<div class="sug-item" onclick="openTool(\'' + t.id + '\');this.parentElement.classList.remove(\'active\')"><i class="sug-icon fas ' + t.icon + '"></i><div class="sug-info"><h5>' + esc(t.name) + '</h5><p>' + esc(t.desc) + '</p></div></div>';
    }).join('');
    sug.classList.add('active');
  });
  document.addEventListener('click', function(e) {
    if(!e.target.closest('.search-box')) {
      var sug = $('searchSug'); if(sug) sug.classList.remove('active');
    }
  });
}

/* ═══════════════ LISTENERS ═══════════════ */
function setupListeners() {
  if($('themeBtn')) $('themeBtn').onclick = function() { STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('dz_theme', STATE.theme); applyTheme(); playSound('pop'); };
  if($('langBtn')) $('langBtn').onclick = function() { openPanel('langPanel'); };
  if($('mobileLang')) $('mobileLang').onclick = function(e) { e.preventDefault(); $('mobileMenu').classList.remove('open'); openPanel('langPanel'); };
  if($('settingsBtn')) $('settingsBtn').onclick = function() { openPanel('settingsPanel'); };
  if($('mobileSettings')) $('mobileSettings').onclick = function(e) { e.preventDefault(); $('mobileMenu').classList.remove('open'); openPanel('settingsPanel'); };
  if($('authBtn')) $('authBtn').onclick = function() {
    if(localStorage.getItem('dz_loggedIn') === 'true') {
      if(confirm('خروج؟')) { localStorage.removeItem('dz_loggedIn'); $('authBtn').innerHTML = '<i class="fas fa-user"></i>'; showToast('👋 خارج شدید'); }
    } else { openModal('authModal'); }
  };
  if($('cartBtn')) $('cartBtn').onclick = function() { openPanel('cartPanel'); };
  if($('menuBtn')) $('menuBtn').onclick = function() { $('mobileMenu').classList.toggle('open'); };
  
  document.querySelectorAll('.color-swatch').forEach(function(sw) {
    sw.onclick = function() {
      document.querySelectorAll('.color-swatch').forEach(function(x) { x.classList.remove('active'); });
      this.classList.add('active');
      STATE.color = this.dataset.color;
      localStorage.setItem('dz_color', STATE.color);
      applyTheme(); playSound('pop');
    };
  });
  
  document.querySelectorAll('.filter-btn[data-filter]').forEach(function(b) {
    b.onclick = function() {
      var g = this.parentElement;
      g.querySelectorAll('.filter-btn').forEach(function(x) { x.classList.remove('active'); });
      this.classList.add('active');
      STATE.currentFilter = this.dataset.filter;
      renderProducts();
    };
  });
  
  document.querySelectorAll('#sectionRating span').forEach(function(s) {
    s.onclick = function() {
      STATE.currentSectionRating = parseInt(this.dataset.rating);
      document.querySelectorAll('#sectionRating span').forEach(function(x, i) { x.classList.toggle('active', i < STATE.currentSectionRating); });
    };
  });
  
  var otpInputs = document.querySelectorAll('.otp-input');
  otpInputs.forEach(function(inp, idx) {
    inp.oninput = function() {
      this.value = this.value.replace(/\D/g, '');
      if(this.value) { this.classList.add('filled'); if(idx < otpInputs.length - 1) otpInputs[idx + 1].focus(); }
      else { this.classList.remove('filled'); }
      var all = Array.from(otpInputs).every(function(i) { return i.value; });
      if(all) setTimeout(verifyOTP, 300);
    };
    inp.onkeydown = function(e) { if(e.key === 'Backspace' && !this.value && idx > 0) { otpInputs[idx - 1].focus(); otpInputs[idx - 1].value = ''; } };
  });
  
  if($('cardNumber')) $('cardNumber').oninput = function() { this.value = this.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim(); };
  if($('contactForm')) $('contactForm').onsubmit = function(e) { e.preventDefault(); showNotif('✅ پیام ارسال شد', 'success'); playSound('chime'); addCoins(5); fireConfetti(); this.reset(); };
  
  document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
      document.querySelectorAll('.modal-bg.active').forEach(function(m) { m.classList.remove('active'); });
      document.querySelectorAll('.panel.open').forEach(function(p) { p.classList.remove('open'); });
      $('mobileMenu').classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  
  window.addEventListener('scroll', function() {
    var n = $('nav'), tp = $('fabTop'), p = $('scrollProgress');
    var y = window.scrollY;
    if(n) n.classList.toggle('scrolled', y > 50);
    if(tp) tp.classList.toggle('visible', y > 400);
    if(p) { var h = document.documentElement.scrollHeight - window.innerHeight; p.style.width = ((y / h) * 100) + '%'; }
  }, { passive: true });
  
  setupSearch();
}

/* ═══════════════ INIT ═══════════════ */
function hidePreloader() { var p = $('preloader'); if(p) p.classList.add('hidden'); }

function initAll() {
  try {
    applyTheme();
    applyLanguage();
    renderProducts();
    renderReviews();
    updateCartUI();
    document.querySelectorAll('.color-swatch').forEach(function(s) { s.classList.toggle('active', s.dataset.color === STATE.color); });
    document.querySelectorAll('.sound-btn[data-sound]').forEach(function(b) { b.classList.toggle('active', b.dataset.sound === (localStorage.getItem('dz_sound') || 'chime')); });
    if(localStorage.getItem('dz_loggedIn') === 'true') { var a = $('authBtn'); if(a) a.innerHTML = '<i class="fas fa-user-check" style="color:var(--success)"></i>'; }
    setupListeners();
    typewriter();
    document.querySelectorAll('.stat-num[data-count]').forEach(function(el) {
      var target = parseInt(el.dataset.count || 0); var c = 0; var step = target / 40;
      var iv = setInterval(function() { c += step; if(c >= target) { c = target; clearInterval(iv); } el.textContent = Math.floor(c) + (target > 50 ? '+' : (target === 99 ? '٪' : '')); }, 25);
    });
    setTimeout(function() {
      if(!sessionStorage.getItem('dz_welcome')) {
        showNotif('🎉 خوش آمدید به دیجیتالایز ۲۵!', 'success');
        playSound('chime');
        sessionStorage.setItem('dz_welcome', 'true');
      }
    }, 1500);
    console.log('%c🚀 Digitalize 25.0 Loaded!', 'color:#2563eb;font-size:20px;font-weight:bold');
    console.log('%c✅ 6 Languages | 300 Tools | PWA | Cart | OTP', 'color:#60a5fa;font-size:12px');
  } catch(e) { console.error(e); hidePreloader(); }
}

if(document.readyState === 'complete' || document.readyState === 'interactive') {
  hidePreloader(); setTimeout(initAll, 100);
} else {
  window.addEventListener('load', function() { hidePreloader(); setTimeout(initAll, 100); });
}
setTimeout(hidePreloader, 3000);

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault(); STATE.deferredPrompt = e;
  if(!localStorage.getItem('dz_pwaDismissed')) {
    setTimeout(function() { var b = $('pwaInstall'); if(b) b.classList.add('show'); }, 3000);
  }
});

if('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
  window.addEventListener('load', function() { navigator.serviceWorker.register('./sw.js').catch(function(err) { console.warn('SW:', err); }); });
}