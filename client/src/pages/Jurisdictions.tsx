/*
 * Gulf Luxe Design: Jurisdictions Page
 * - Mainland vs Free Zone vs Offshore comparison
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building, Globe2, Shield, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export default function Jurisdictions() {
  const { lang, t } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const jurisdictions = [
    {
      icon: Building,
      title: lang === "ar" ? "البر الرئيسي" : "Mainland",
      subtitle: lang === "ar" ? "للتجارة المحلية والدولية" : "For Local & International Trade",
      desc: lang === "ar"
        ? "تأسيس شركة في البر الرئيسي يتيح لك التجارة بحرية في جميع أنحاء الإمارات والعالم دون قيود."
        : "Setting up on the Mainland allows you to trade freely across the UAE and internationally without restrictions.",
      features: lang === "ar"
        ? ["تجارة غير مقيدة في الإمارات", "ملكية أجنبية 100%", "مرونة في اختيار الموقع", "عقود حكومية"]
        : ["Unrestricted UAE trade", "100% foreign ownership", "Flexible location choice", "Government contracts eligible"],
      color: "#076072",
    },
    {
      icon: Globe2,
      title: lang === "ar" ? "المنطقة الحرة" : "Free Zone",
      subtitle: lang === "ar" ? "للتجارة الدولية" : "For International Trade",
      desc: lang === "ar"
        ? "المناطق الحرة توفر بيئة أعمال متميزة مع إعفاءات ضريبية وملكية أجنبية كاملة."
        : "Free Zones offer a premium business environment with tax exemptions and full foreign ownership.",
      features: lang === "ar"
        ? ["ملكية أجنبية 100%", "إعفاء من ضريبة الشركات", "إعادة الأرباح بالكامل", "بنية تحتية متطورة"]
        : ["100% foreign ownership", "Corporate tax exemption", "Full profit repatriation", "World-class infrastructure"],
      color: "#C9A84C",
    },
    {
      icon: Shield,
      title: lang === "ar" ? "الشركات الخارجية" : "Offshore",
      subtitle: lang === "ar" ? "لحماية الأصول والشركات القابضة" : "For Asset Protection & Holding",
      desc: lang === "ar"
        ? "الشركات الخارجية مثالية للشركات القابضة وحماية الأصول والأعمال التجارية الدولية."
        : "Offshore companies are ideal for holding companies, asset protection, and international business operations.",
      features: lang === "ar"
        ? ["خصوصية تامة", "حماية الأصول", "لا ضرائب", "مرونة في الهيكل"]
        : ["Complete privacy", "Asset protection", "Zero taxation", "Flexible structure"],
      color: "#076072",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#076072] pt-32 pb-20">
        <div className="container">
          <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
            {t("nav.jurisdictions")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "اختر منطقة العمل المناسبة لشركتك" : "Choose the Right Jurisdiction for Your Business"}
          </h1>
          <p className="text-white/70 mt-4 max-w-xl text-lg">
            {lang === "ar"
              ? "فهم الفروق بين مناطق العمل في الإمارات هو الخطوة الأولى نحو تأسيس ناجح."
              : "Understanding the differences between UAE jurisdictions is the first step to a successful setup."}
          </p>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="space-y-12">
            {jurisdictions.map((j, i) => (
              <div key={i} className="bg-[#FAFAFA] p-8 lg:p-12 golden-thread-left">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <j.icon className="w-10 h-10 mb-4" style={{ color: j.color }} />
                    <h2 className="text-2xl font-bold text-[#076072] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{j.title}</h2>
                    <p className="text-[#C9A84C] text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>{j.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{j.desc}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {j.features.map((f, k) => (
                        <div key={k} className="flex items-center gap-3 bg-white p-4">
                          <CheckCircle className="w-5 h-5 text-[#C9A84C] shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/quote" className="inline-flex items-center gap-2 mt-6 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all" style={{ fontFamily: "var(--font-heading)" }}>
                      {t("nav.getQuote")} <Arrow className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#076072] py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "لا تعرف أي منطقة تناسبك؟" : "Not Sure Which Jurisdiction Is Right?"}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {lang === "ar" ? "خبراؤنا سيساعدونك في اتخاذ القرار الأمثل بناءً على نشاطك التجاري." : "Our experts will help you make the optimal decision based on your business activity."}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-10 py-4 text-sm font-semibold hover:bg-[#b8963e] transition-all" style={{ fontFamily: "var(--font-heading)" }}>
            {t("cta.button")} <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
