import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, industries } from "@/lib/data";
import { motion } from "framer-motion";
import {
  ShoppingCart, Cpu, Globe, Briefcase, Building2, UtensilsCrossed,
  HeartPulse, Megaphone, GraduationCap, Factory, Plane, TrendingUp,
  ArrowRight, CheckCircle
} from "lucide-react";

const iconMap: Record<string, any> = {
  ShoppingCart, Cpu, Globe, Briefcase, Building2, UtensilsCrossed,
  HeartPulse, Megaphone, GraduationCap, Factory, Plane, TrendingUp
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Industries() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "القطاعات" : "Industries"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "قطاعات الأعمال التي نخدمها" : "Industries We Serve"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {isAr ? "نساعد رواد الأعمال في مختلف القطاعات على تأسيس أعمالهم في الإمارات بنجاح" : "We help entrepreneurs across diverse sectors establish their businesses in the UAE successfully"}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Briefcase;
              const descriptions: Record<string, { en: string; ar: string }> = {
                "Trading & General Commerce": { en: "Import/export, wholesale, retail, and general trading licenses across mainland and free zones.", ar: "رخص الاستيراد/التصدير والجملة والتجزئة والتجارة العامة في البر الرئيسي والمناطق الحرة." },
                "Technology & IT": { en: "Software development, IT consulting, SaaS, AI, and tech startup formation with specialized licenses.", ar: "تطوير البرمجيات واستشارات تقنية المعلومات والحوسبة السحابية والذكاء الاصطناعي وتأسيس الشركات الناشئة." },
                "E-Commerce": { en: "Online retail, marketplace platforms, and digital commerce licenses with payment gateway setup.", ar: "التجزئة عبر الإنترنت ومنصات السوق ورخص التجارة الرقمية مع إعداد بوابات الدفع." },
                "Consulting & Professional Services": { en: "Management consulting, legal, accounting, and professional service firm licensing.", ar: "الاستشارات الإدارية والقانونية والمحاسبية وترخيص شركات الخدمات المهنية." },
                "Real Estate & Construction": { en: "Property development, brokerage, construction, and facility management licensing.", ar: "التطوير العقاري والوساطة والبناء وإدارة المرافق." },
                "Food & Beverage": { en: "Restaurant, catering, food trading, and F&B manufacturing licenses with health permits.", ar: "رخص المطاعم والتموين وتجارة الأغذية والتصنيع الغذائي مع التصاريح الصحية." },
                "Healthcare & Wellness": { en: "Medical clinics, wellness centers, pharmaceutical, and health technology licensing.", ar: "العيادات الطبية ومراكز العافية والأدوية وتراخيص التكنولوجيا الصحية." },
                "Media & Marketing": { en: "Advertising agencies, digital marketing, media production, and creative services licensing.", ar: "وكالات الإعلان والتسويق الرقمي والإنتاج الإعلامي وتراخيص الخدمات الإبداعية." },
                "Education & Training": { en: "Training centers, e-learning platforms, tutoring services, and educational consultancy.", ar: "مراكز التدريب ومنصات التعلم الإلكتروني وخدمات التدريس والاستشارات التعليمية." },
                "Manufacturing & Industrial": { en: "Factory setup, industrial licenses, warehouse operations, and manufacturing permits.", ar: "إنشاء المصانع والرخص الصناعية وعمليات المستودعات وتصاريح التصنيع." },
                "Tourism & Hospitality": { en: "Travel agencies, hotel management, tour operators, and hospitality service licensing.", ar: "وكالات السفر وإدارة الفنادق ومنظمي الرحلات وتراخيص خدمات الضيافة." },
                "Financial Services": { en: "Fintech, investment advisory, insurance brokerage, and financial consulting licenses.", ar: "التكنولوجيا المالية والاستشارات الاستثمارية ووساطة التأمين وتراخيص الاستشارات المالية." },
              };
              const desc = descriptions[ind.nameEn] || { en: "", ar: "" };

              return (
                <motion.div key={i} variants={fadeUp} className="bg-[#FAFAFA] p-8 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-[#076072]/10 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-[#076072]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#054A57] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {isAr ? ind.nameAr : ind.nameEn}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed mb-5">
                    {isAr ? desc.ar : desc.en}
                  </p>
                  <Link href="/quote" className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold hover:gap-2 transition-all">
                    {isAr ? "احصل على عرض سعر" : "Get a Quote"} <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#076072]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "لا ترى قطاعك؟ لا تقلق" : "Don't See Your Industry? No Worries"}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {isAr ? "نخدم أكثر من 2,000 نشاط تجاري في الإمارات. تواصل معنا لمناقشة احتياجاتك المحددة." : "We serve over 2,000 business activities in the UAE. Contact us to discuss your specific needs."}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all"
            style={{ fontFamily: "var(--font-heading)" }}>
            {t("common.contactUs")} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
