import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  dir: "ltr" | "rtl";
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.jurisdictions": { en: "Jurisdictions", ar: "مناطق العمل" },
  "nav.freeZones": { en: "Free Zones", ar: "المناطق الحرة" },
  "nav.blog": { en: "Blog", ar: "المدونة" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.getQuote": { en: "Get a Free Quote", ar: "احصل على عرض سعر مجاني" },
  "nav.industries": { en: "Industries", ar: "القطاعات" },
  "nav.whyUs": { en: "Why Wafid", ar: "لماذا وافد" },
  "nav.howItWorks": { en: "How It Works", ar: "كيف نعمل" },
  "nav.faq": { en: "FAQ", ar: "الأسئلة الشائعة" },
  "nav.freeGuide": { en: "Free Guide", ar: "دليل مجاني" },

  // Hero
  "hero.title": { en: "Your Arrival,", ar: "وصولك،" },
  "hero.titleHighlight": { en: "Our Mission", ar: "مهمتنا" },
  "hero.subtitle": { en: "End-to-end business setup, licensing, and corporate services in the UAE. We handle the complexity so you can focus on growth.", ar: "خدمات تأسيس الشركات والترخيص والخدمات المؤسسية في الإمارات من الألف إلى الياء. نتولى التعقيدات حتى تتمكن من التركيز على النمو." },
  "hero.cta1": { en: "Get a Free Quote", ar: "احصل على عرض سعر مجاني" },
  "hero.cta2": { en: "Book a Free Consultation", ar: "احجز استشارة مجانية" },

  // Trust Bar
  "trust.licensed": { en: "Licensed & Regulated", ar: "مرخصة ومنظمة" },
  "trust.bilingual": { en: "Bilingual Arabic-English", ar: "ثنائية اللغة عربي-إنجليزي" },
  "trust.transparent": { en: "Transparent Pricing", ar: "أسعار شفافة" },
  "trust.dedicated": { en: "Dedicated Account Manager", ar: "مدير حساب مخصص" },

  // Services
  "services.label": { en: "Our Services", ar: "خدماتنا" },
  "services.title": { en: "Comprehensive Business Solutions", ar: "حلول أعمال شاملة" },
  "services.subtitle": { en: "From company formation to full operational support, we provide everything you need to establish and grow your business in the UAE.", ar: "من تأسيس الشركات إلى الدعم التشغيلي الكامل، نقدم كل ما تحتاجه لتأسيس وتنمية أعمالك في الإمارات." },
  "services.learnMore": { en: "Learn More", ar: "اعرف المزيد" },
  "services.viewAll": { en: "View All Services", ar: "عرض جميع الخدمات" },
  "services.core": { en: "Core Services", ar: "الخدمات الأساسية" },
  "services.supporting": { en: "Supporting Services", ar: "الخدمات المساندة" },
  "services.specialized": { en: "Specialized Services", ar: "الخدمات المتخصصة" },
  "services.premium": { en: "Premium Services", ar: "الخدمات المميزة" },
  "services.getStarted": { en: "Get Started", ar: "ابدأ الآن" },
  "services.pageTitle": { en: "Our Services", ar: "خدماتنا" },
  "services.pageSubtitle": { en: "25+ professional services to establish, manage, and grow your business in the UAE.", ar: "أكثر من 25 خدمة احترافية لتأسيس وإدارة وتنمية أعمالك في الإمارات." },

  // How It Works
  "howItWorks.label": { en: "How It Works", ar: "كيف نعمل" },
  "howItWorks.title": { en: "Your Business Journey in 4 Simple Steps", ar: "رحلة عملك في 4 خطوات بسيطة" },
  "howItWorks.step1Title": { en: "Free Consultation", ar: "استشارة مجانية" },
  "howItWorks.step1Desc": { en: "Share your business goals with our experts. We analyze your needs and recommend the optimal structure, jurisdiction, and license type.", ar: "شارك أهدافك التجارية مع خبرائنا. نحلل احتياجاتك ونوصي بالهيكل والمنطقة ونوع الترخيص الأمثل." },
  "howItWorks.step2Title": { en: "Document Preparation", ar: "إعداد المستندات" },
  "howItWorks.step2Desc": { en: "We prepare all required documents, forms, and applications. You provide basic information — we handle the rest.", ar: "نعد جميع المستندات والنماذج والطلبات المطلوبة. تقدم المعلومات الأساسية — ونتولى الباقي." },
  "howItWorks.step3Title": { en: "Government Processing", ar: "المعالجة الحكومية" },
  "howItWorks.step3Desc": { en: "We submit and follow up on all government applications. Your dedicated account manager keeps you informed at every stage.", ar: "نقدم ونتابع جميع الطلبات الحكومية. مدير حسابك المخصص يبقيك على اطلاع في كل مرحلة." },
  "howItWorks.step4Title": { en: "Business Launch", ar: "إطلاق العمل" },
  "howItWorks.step4Desc": { en: "Receive your trade license, visa, and bank account. Your business is ready to operate in the UAE.", ar: "استلم رخصتك التجارية وتأشيرتك وحسابك البنكي. عملك جاهز للعمل في الإمارات." },

  // Industries
  "industries.label": { en: "Industries We Serve", ar: "القطاعات التي نخدمها" },
  "industries.title": { en: "Expertise Across Every Sector", ar: "خبرة في كل قطاع" },
  "industries.subtitle": { en: "We have helped businesses across all major industries establish their presence in the UAE.", ar: "ساعدنا الشركات في جميع القطاعات الرئيسية على تأسيس وجودها في الإمارات." },

  // Why Choose Us
  "whyUs.label": { en: "Why Choose Wafid", ar: "لماذا تختار وافد" },
  "whyUs.title": { en: "Your Trusted Partner in the UAE", ar: "شريكك الموثوق في الإمارات" },
  "whyUs.subtitle": { en: "We are not just a service provider — we are your long-term business partner.", ar: "لسنا مجرد مزود خدمة — نحن شريكك التجاري طويل الأمد." },
  "whyUs.stat1": { en: "500+", ar: "+500" },
  "whyUs.stat1Label": { en: "Companies Formed", ar: "شركة تم تأسيسها" },
  "whyUs.stat2": { en: "98%", ar: "%98" },
  "whyUs.stat2Label": { en: "Client Satisfaction", ar: "رضا العملاء" },
  "whyUs.stat3": { en: "10+", ar: "+10" },
  "whyUs.stat3Label": { en: "Years Experience", ar: "سنوات خبرة" },
  "whyUs.stat4": { en: "48h", ar: "48 ساعة" },
  "whyUs.stat4Label": { en: "Average Setup Time", ar: "متوسط وقت التأسيس" },
  "whyUs.oneStop": { en: "One-Stop Solution", ar: "حل شامل" },
  "whyUs.oneStopDesc": { en: "All business and government services under one roof — no need to coordinate with multiple providers.", ar: "جميع الخدمات التجارية والحكومية تحت سقف واحد — لا حاجة للتنسيق مع مزودين متعددين." },
  "whyUs.bilingualTitle": { en: "Bilingual Expertise", ar: "خبرة ثنائية اللغة" },
  "whyUs.bilingualDesc": { en: "Our team is fluent in Arabic and English, ensuring seamless communication with all government entities.", ar: "فريقنا يجيد العربية والإنجليزية، مما يضمن تواصلاً سلسًا مع جميع الجهات الحكومية." },
  "whyUs.pricingTitle": { en: "Transparent Pricing", ar: "أسعار شفافة" },
  "whyUs.pricingDesc": { en: "No hidden fees, no surprises. Get a clear quote upfront with our interactive quote builder.", ar: "لا رسوم مخفية، لا مفاجآت. احصل على عرض سعر واضح مقدمًا مع أداة عرض الأسعار التفاعلية." },
  "whyUs.dedicatedTitle": { en: "Dedicated Account Manager", ar: "مدير حساب مخصص" },
  "whyUs.dedicatedDesc": { en: "Every client gets a personal account manager who stays with them throughout their entire journey.", ar: "كل عميل يحصل على مدير حساب شخصي يرافقه طوال رحلته." },
  "whyUs.speedTitle": { en: "Speed & Efficiency", ar: "السرعة والكفاءة" },
  "whyUs.speedDesc": { en: "Our established government relationships mean faster processing and fewer delays.", ar: "علاقاتنا الراسخة مع الجهات الحكومية تعني معالجة أسرع وتأخيرات أقل." },
  "whyUs.complianceTitle": { en: "Proactive Compliance", ar: "امتثال استباقي" },
  "whyUs.complianceDesc": { en: "We track your renewals and deadlines so you never miss a compliance requirement.", ar: "نتابع تجديداتك ومواعيدك النهائية حتى لا تفوت أي متطلب امتثال." },

  // Lead Magnet
  "leadMagnet.title": { en: "Download Your Free UAE Business Setup Guide", ar: "حمّل دليلك المجاني لتأسيس الأعمال في الإمارات" },
  "leadMagnet.subtitle": { en: "The Ultimate UAE Business Setup Guide 2026 — everything you need to know before starting a business in the UAE.", ar: "الدليل الشامل لتأسيس الأعمال في الإمارات 2026 — كل ما تحتاج معرفته قبل بدء عمل تجاري." },
  "leadMagnet.cta": { en: "Download Free Guide", ar: "حمّل الدليل المجاني" },

  // Quote Builder
  "quote.title": { en: "Get Your Free Quote", ar: "احصل على عرض سعرك المجاني" },
  "quote.subtitle": { en: "Answer a few questions and get a personalized estimate in under 2 minutes.", ar: "أجب عن بعض الأسئلة واحصل على تقدير مخصص في أقل من دقيقتين." },
  "quote.step": { en: "Step", ar: "الخطوة" },
  "quote.of": { en: "of", ar: "من" },
  "quote.next": { en: "Next", ar: "التالي" },
  "quote.prev": { en: "Previous", ar: "السابق" },
  "quote.submit": { en: "Get My Quote", ar: "احصل على عرض السعر" },

  // Blog
  "blog.label": { en: "Our Blog", ar: "مدونتنا" },
  "blog.title": { en: "Insights & Guides", ar: "رؤى وأدلة" },
  "blog.subtitle": { en: "Expert articles, guides, and insights to help you navigate business in the UAE.", ar: "مقالات وأدلة ورؤى من الخبراء لمساعدتك في التنقل في عالم الأعمال في الإمارات." },
  "blog.readMore": { en: "Read More", ar: "اقرأ المزيد" },
  "blog.viewAll": { en: "View All Articles", ar: "عرض جميع المقالات" },
  "blog.latestPosts": { en: "Latest Articles", ar: "أحدث المقالات" },
  "blog.searchPlaceholder": { en: "Search articles...", ar: "ابحث في المقالات..." },
  "blog.noResults": { en: "No articles found.", ar: "لم يتم العثور على مقالات." },
  "blog.minRead": { en: "min read", ar: "دقائق قراءة" },

  // CTA
  "cta.title": { en: "Ready to Start Your Business in the UAE?", ar: "هل أنت مستعد لبدء عملك في الإمارات؟" },
  "cta.subtitle": { en: "Get a free, personalized consultation with one of our business setup experts.", ar: "احصل على استشارة مجانية ومخصصة مع أحد خبراء تأسيس الشركات لدينا." },
  "cta.button": { en: "Schedule Free Consultation", ar: "حدد موعد استشارة مجانية" },
  "cta.quoteButton": { en: "Get a Free Quote", ar: "احصل على عرض سعر مجاني" },
  "cta.whatsapp": { en: "WhatsApp Us", ar: "تواصل عبر واتساب" },

  // FAQ
  "faq.label": { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
  "faq.title": { en: "Got Questions? We Have Answers", ar: "لديك أسئلة؟ لدينا إجابات" },
  "faq.subtitle": { en: "Find answers to the most common questions about business setup in the UAE.", ar: "اعثر على إجابات لأكثر الأسئلة شيوعًا حول تأسيس الأعمال في الإمارات." },

  // Testimonials
  "testimonials.label": { en: "Testimonials", ar: "آراء العملاء" },
  "testimonials.title": { en: "What Our Clients Say", ar: "ماذا يقول عملاؤنا" },
  "testimonials.subtitle": { en: "Hear from entrepreneurs and businesses who trusted Wafid with their UAE journey.", ar: "اسمع من رواد الأعمال والشركات الذين وثقوا بوافد في رحلتهم في الإمارات." },

  // About Page
  "about.label": { en: "About Wafid", ar: "عن وافد" },
  "about.title": { en: "Your Arrival, Our Mission", ar: "وصولك، مهمتنا" },
  "about.subtitle": { en: "WAFID is a premier business setup and corporate services consultancy in the UAE.", ar: "وافد هي شركة استشارية رائدة في مجال تأسيس الشركات والخدمات المؤسسية في الإمارات." },
  "about.story": { en: "Our Story", ar: "قصتنا" },
  "about.storyText": { en: "Founded with a clear mission to simplify business establishment in the UAE, WAFID has grown into a trusted partner for entrepreneurs, companies, and individuals from around the world. Our name — meaning 'newcomer' or 'arriving' in Arabic — reflects our core purpose: welcoming and guiding those who arrive in the UAE with business ambitions.", ar: "تأسست وافد بمهمة واضحة لتبسيط تأسيس الأعمال في الإمارات، ونمت لتصبح شريكًا موثوقًا لرواد الأعمال والشركات والأفراد من جميع أنحاء العالم. اسمنا — الذي يعني 'القادم' أو 'الوافد' بالعربية — يعكس هدفنا الأساسي: الترحيب بمن يصلون إلى الإمارات بطموحات تجارية وإرشادهم." },
  "about.mission": { en: "Our Mission", ar: "مهمتنا" },
  "about.missionText": { en: "To make business establishment and government processes in the UAE accessible, transparent, and stress-free for every entrepreneur, company, and individual.", ar: "جعل تأسيس الأعمال والعمليات الحكومية في الإمارات متاحة وشفافة وخالية من التوتر لكل رائد أعمال وشركة وفرد." },
  "about.vision": { en: "Our Vision", ar: "رؤيتنا" },
  "about.visionText": { en: "To be the most trusted and comprehensive business services partner in the UAE — the first name that comes to mind when anyone thinks of starting or managing a business in the Emirates.", ar: "أن نكون الشريك الأكثر ثقة وشمولاً في خدمات الأعمال في الإمارات — الاسم الأول الذي يتبادر إلى الذهن عندما يفكر أي شخص في بدء أو إدارة عمل تجاري في الإمارات." },
  "about.promise": { en: "Brand Promise", ar: "وعد العلامة التجارية" },
  "about.promiseText": { en: "We handle the complexity so you can focus on your business. Every process, every document, every deadline — managed professionally and transparently.", ar: "نتولى التعقيدات حتى تتمكن من التركيز على عملك. كل عملية، كل مستند، كل موعد نهائي — يُدار باحترافية وشفافية." },
  "about.values": { en: "Our Values", ar: "قيمنا" },

  // Contact
  "contact.label": { en: "Get in Touch", ar: "تواصل معنا" },
  "contact.title": { en: "Let's Start a Conversation", ar: "لنبدأ محادثة" },
  "contact.subtitle": { en: "Whether you have a question or are ready to start your business journey, we're here to help.", ar: "سواء كان لديك سؤال أو كنت مستعدًا لبدء رحلة عملك، نحن هنا للمساعدة." },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.service": { en: "Service Interested In", ar: "الخدمة المطلوبة" },
  "contact.message": { en: "Your Message", ar: "رسالتك" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.address": { en: "Dubai, United Arab Emirates", ar: "دبي، الإمارات العربية المتحدة" },
  "contact.emailAddress": { en: "info@wafid.ae", ar: "info@wafid.ae" },
  "contact.phoneNumber": { en: "+971 4 XXX XXXX", ar: "+971 4 XXX XXXX" },
  "contact.whatsapp": { en: "+971 50 XXX XXXX", ar: "+971 50 XXX XXXX" },

  // Free Zones
  "freeZones.label": { en: "UAE Free Zones", ar: "المناطق الحرة في الإمارات" },
  "freeZones.title": { en: "Find the Right Free Zone for Your Business", ar: "اعثر على المنطقة الحرة المناسبة لعملك" },
  "freeZones.subtitle": { en: "Compare 20+ UAE free zones and find the perfect match for your business activity, budget, and growth plans.", ar: "قارن بين أكثر من 20 منطقة حرة في الإمارات واعثر على التطابق المثالي لنشاطك التجاري وميزانيتك وخطط نموك." },
  "freeZones.location": { en: "Location", ar: "الموقع" },
  "freeZones.focus": { en: "Focus", ar: "التخصص" },
  "freeZones.startingFrom": { en: "Starting from", ar: "بدءًا من" },

  // Jurisdictions
  "jurisdictions.label": { en: "UAE Jurisdictions", ar: "الولايات القضائية في الإمارات" },
  "jurisdictions.title": { en: "Choose the Right Jurisdiction", ar: "اختر الولاية القضائية المناسبة" },
  "jurisdictions.subtitle": { en: "Understand the differences between Mainland, Free Zone, and Offshore to make the right choice.", ar: "افهم الفروقات بين البر الرئيسي والمنطقة الحرة والشركات الخارجية لاتخاذ القرار الصحيح." },

  // Footer
  "footer.description": { en: "WAFID is a premier business setup and corporate services consultancy in the UAE, helping entrepreneurs and companies establish and grow their presence across the Emirates.", ar: "وافد هي شركة استشارية رائدة في مجال تأسيس الشركات والخدمات المؤسسية في الإمارات، تساعد رواد الأعمال والشركات على تأسيس وتنمية وجودهم في جميع أنحاء الإمارات." },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.services": { en: "Services", ar: "الخدمات" },
  "footer.contactInfo": { en: "Contact Info", ar: "معلومات الاتصال" },
  "footer.resources": { en: "Resources", ar: "الموارد" },
  "footer.rights": { en: "All Rights Reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "footer.cookies": { en: "Cookies Policy", ar: "سياسة ملفات تعريف الارتباط" },
  "footer.disclaimer": { en: "Disclaimer", ar: "إخلاء المسؤولية" },
  "footer.tagline": { en: "Your Arrival, Our Mission", ar: "وصولك، مهمتنا" },

  // Common
  "common.readMore": { en: "Read More", ar: "اقرأ المزيد" },
  "common.getStarted": { en: "Get Started", ar: "ابدأ الآن" },
  "common.contactUs": { en: "Contact Us", ar: "تواصل معنا" },
  "common.backToHome": { en: "Back to Home", ar: "العودة للرئيسية" },
  "common.loading": { en: "Loading...", ar: "جاري التحميل..." },
  "common.thankYou": { en: "Thank You!", ar: "شكرًا لك!" },
  "common.thankYouMessage": { en: "We have received your message and will get back to you within 24 hours.", ar: "لقد استلمنا رسالتك وسنعود إليك خلال 24 ساعة." },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    if (newLang === "ar") {
      document.body.style.fontFamily = "'Cairo', 'Tahoma', sans-serif";
    } else {
      document.body.style.fontFamily = "'Open Sans', 'Arial', sans-serif";
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[lang] || key;
    },
    [lang]
  );

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
