import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, freeZones } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

export default function FreeZones() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  // Group by location (emirate)
  const emirateOrder = ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "Ajman", "Umm Al Quwain", "Fujairah"];
  const emirateNameAr: Record<string, string> = {
    "Dubai": "دبي", "Abu Dhabi": "أبوظبي", "Sharjah": "الشارقة",
    "Ras Al Khaimah": "رأس الخيمة", "Ajman": "عجمان", "Fujairah": "الفجيرة", "Umm Al Quwain": "أم القيوين"
  };

  const groupedByEmirate = emirateOrder
    .map(em => ({ emirate: em, zones: freeZones.filter(z => z.locationEn === em) }))
    .filter(g => g.zones.length > 0);

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "المناطق الحرة" : "Free Zones"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "المناطق الحرة في الإمارات" : "UAE Free Zones"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {isAr ? "اكتشف أكثر من 20 منطقة حرة واختر الأنسب لنشاطك التجاري" : "Explore 20+ free zones and choose the best fit for your business"}
          </p>
        </div>
      </section>

      {/* Why Free Zones */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { text: isAr ? "ملكية أجنبية 100%" : "100% Foreign Ownership" },
              { text: isAr ? "0% ضريبة شركات" : "0% Corporate Tax" },
              { text: isAr ? "إعادة الأرباح بالكامل" : "Full Profit Repatriation" },
              { text: isAr ? "إعداد سريع" : "Fast Setup" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 justify-center">
                <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm font-medium text-[#333]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Zones by Emirate */}
      {groupedByEmirate.map((group, idx) => (
        <section key={group.emirate} className={idx % 2 === 0 ? "py-16 bg-[#FAFAFA]" : "py-16 bg-white"}>
          <div className="container">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={20} className="text-[#076072]" />
              <h2 className="text-2xl font-bold text-[#054A57]" style={{ fontFamily: "var(--font-heading)" }}>
                {isAr ? emirateNameAr[group.emirate] || group.emirate : group.emirate}
              </h2>
            </div>
            <div className="w-12 h-0.5 bg-[#C9A84C] mb-8" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {group.zones.map((zone) => (
                <motion.div key={zone.slug} variants={fadeUp}>
                  <div className="bg-white p-6 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all h-full">
                    <h3 className="text-lg font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {zone.name}
                    </h3>
                    <p className="text-sm text-[#666] mb-3 leading-relaxed">
                      <span className="font-semibold text-[#054A57]">{isAr ? "التخصص:" : "Focus:"}</span>{" "}
                      {isAr ? zone.focusAr : zone.focusEn}
                    </p>
                    <p className="text-sm mb-4">
                      <span className="font-semibold text-[#054A57]">{isAr ? "يبدأ من:" : "From:"}</span>{" "}
                      <span className="text-[#C9A84C] font-bold">{zone.priceFrom}</span>
                    </p>
                    <Link href="/quote" className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold hover:gap-2 transition-all">
                      {isAr ? "احصل على عرض سعر" : "Get Quote"} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#054A57]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "لا تعرف أي منطقة حرة تناسبك؟" : "Not Sure Which Free Zone Suits You?"}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {isAr ? "دعنا نساعدك في اختيار المنطقة الحرة المثالية لنشاطك التجاري." : "Let us help you choose the ideal free zone for your business activity."}
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all"
            style={{ fontFamily: "var(--font-heading)" }}>
            {t("cta.quoteButton")} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
