import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Shield, Globe, CreditCard, UserCheck, Zap, FileCheck,
  ArrowRight, Star, CheckCircle, Award, Clock, HeartHandshake
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function WhyUs() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const reasons = [
    { icon: Shield, titleEn: "Licensed & Regulated", titleAr: "مرخصة ومنظمة", descEn: "Fully licensed by the UAE government with all required approvals to operate as a business setup consultancy.", descAr: "مرخصة بالكامل من حكومة الإمارات مع جميع الموافقات المطلوبة للعمل كاستشارات تأسيس أعمال." },
    { icon: Globe, titleEn: "Bilingual Service", titleAr: "خدمة ثنائية اللغة", descEn: "Full service in English and Arabic. Our team speaks your language and understands your culture.", descAr: "خدمة كاملة بالعربية والإنجليزية. فريقنا يتحدث لغتك ويفهم ثقافتك." },
    { icon: CreditCard, titleEn: "Transparent Pricing", titleAr: "أسعار شفافة", descEn: "No hidden fees, no surprises. Our quote builder gives you a clear breakdown of all costs upfront.", descAr: "لا رسوم خفية ولا مفاجآت. أداة عرض الأسعار تقدم لك تفصيلاً واضحاً لجميع التكاليف مقدماً." },
    { icon: UserCheck, titleEn: "Dedicated Account Manager", titleAr: "مدير حساب مخصص", descEn: "One point of contact from start to finish. Your account manager knows your business inside out.", descAr: "نقطة اتصال واحدة من البداية حتى النهاية. مدير حسابك يعرف عملك من الداخل والخارج." },
    { icon: Zap, titleEn: "Fast Processing", titleAr: "معالجة سريعة", descEn: "Get your business up and running in as little as 2 days. We know the fastest routes through the system.", descAr: "ابدأ عملك في أقل من يومين. نعرف أسرع الطرق عبر النظام." },
    { icon: FileCheck, titleEn: "100% Compliance", titleAr: "امتثال 100%", descEn: "We ensure your business meets all UAE regulatory requirements from day one and beyond.", descAr: "نضمن أن عملك يلبي جميع المتطلبات التنظيمية في الإمارات من اليوم الأول وما بعده." },
    { icon: HeartHandshake, titleEn: "End-to-End Support", titleAr: "دعم شامل", descEn: "From company formation to visa processing, bank accounts, and ongoing compliance — we handle it all.", descAr: "من تأسيس الشركة إلى معالجة التأشيرات وفتح الحسابات البنكية والامتثال المستمر — نتولى كل شيء." },
    { icon: Award, titleEn: "Proven Track Record", titleAr: "سجل حافل بالنجاحات", descEn: "Thousands of businesses successfully established across all UAE jurisdictions and free zones.", descAr: "آلاف الشركات تأسست بنجاح في جميع الولايات القضائية والمناطق الحرة في الإمارات." },
    { icon: Clock, titleEn: "Ongoing Annual Support", titleAr: "دعم سنوي مستمر", descEn: "We don't disappear after setup. Annual retainers keep your business compliant year after year.", descAr: "لا نختفي بعد التأسيس. خدمات الاحتفاظ السنوية تبقي عملك ملتزماً عاماً بعد عام." },
  ];

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "لماذا وافد" : "Why WAFID"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "لماذا تختار وافد لتأسيس أعمالك" : "Why Choose WAFID for Your Business Setup"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {isAr ? "شريكك الموثوق في تأسيس الأعمال والخدمات المؤسسية في الإمارات" : "Your trusted partner for business setup and corporate services in the UAE"}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "5,000+", label: isAr ? "شركة تأسست" : "Companies Formed" },
              { val: "50+", label: isAr ? "منطقة حرة" : "Free Zones" },
              { val: "98%", label: isAr ? "رضا العملاء" : "Client Satisfaction" },
              { val: "48h", label: isAr ? "أسرع تأسيس" : "Fastest Setup" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#C9A84C] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{stat.val}</div>
                <div className="text-sm text-[#666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#076072]/10 flex items-center justify-center mb-5">
                  <reason.icon size={24} className="text-[#076072]" />
                </div>
                <h3 className="text-lg font-bold text-[#054A57] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {isAr ? reason.titleAr : reason.titleEn}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {isAr ? reason.descAr : reason.descEn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#054A57]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {t("cta.title")}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all"
            style={{ fontFamily: "var(--font-heading)" }}>
            {t("cta.quoteButton")} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
