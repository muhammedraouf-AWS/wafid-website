/*
 * Gulf Luxe Design: About Page
 * - Hero with architectural image
 * - Mission/Vision split
 * - Values section
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye, Shield, Clock, Heart, Award, ArrowRight, ArrowLeft } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117178986/UbC8QyuJw6HptZEKgwxE7W/hero-about-9EntAfF7mWHcb3zrRreCG2.webp";

export default function About() {
  const { t, lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const values = [
    { icon: Shield, title: lang === "ar" ? "النزاهة" : "Integrity", desc: lang === "ar" ? "نعمل بشفافية كاملة في كل تعامل." : "We operate with complete transparency in every interaction." },
    { icon: Clock, title: lang === "ar" ? "الكفاءة" : "Efficiency", desc: lang === "ar" ? "نحترم وقتك ونسعى لتقديم أسرع الحلول." : "We respect your time and strive for the fastest solutions." },
    { icon: Heart, title: lang === "ar" ? "التفاني" : "Dedication", desc: lang === "ar" ? "نجاحك هو نجاحنا. نذهب أبعد مما هو متوقع." : "Your success is our success. We go above and beyond." },
    { icon: Award, title: lang === "ar" ? "التميز" : "Excellence", desc: lang === "ar" ? "نلتزم بأعلى معايير الجودة في كل خدمة." : "We commit to the highest quality standards in every service." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-[#076072]/75" />
        <div className="relative container pt-32 pb-16">
          <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
            {t("about.label")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            {t("about.title")}
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="golden-thread-left pl-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#C9A84C]" />
                <h2 className="text-2xl font-bold text-[#076072]" style={{ fontFamily: "var(--font-heading)" }}>
                  {t("about.mission")}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{t("about.missionText")}</p>
            </div>
            <div className="golden-thread-left pl-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#C9A84C]" />
                <h2 className="text-2xl font-bold text-[#076072]" style={{ fontFamily: "var(--font-heading)" }}>
                  {t("about.vision")}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{t("about.visionText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
              {lang === "ar" ? "قيمنا" : "Our Values"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#076072] mt-3" style={{ fontFamily: "var(--font-heading)" }}>
              {lang === "ar" ? "المبادئ التي توجهنا" : "The Principles That Guide Us"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 bg-[#076072] flex items-center justify-center">
                  <val.icon className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <h3 className="text-lg font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#076072] py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {t("cta.title")}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-10 py-4 text-sm font-semibold hover:bg-[#b8963e] transition-all" style={{ fontFamily: "var(--font-heading)" }}>
            {t("cta.button")} <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
