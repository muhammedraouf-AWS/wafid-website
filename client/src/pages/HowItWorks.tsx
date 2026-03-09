import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, FileSearch, FileCheck, Rocket, CheckCircle, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function HowItWorks() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const steps = [
    { icon: MessageSquare, numEn: "01", titleEn: "Free Consultation", titleAr: "استشارة مجانية", descEn: "Tell us about your business idea. We'll analyze your needs, recommend the best jurisdiction, and provide a clear cost breakdown — all for free.", descAr: "أخبرنا عن فكرة عملك. سنحلل احتياجاتك ونوصي بأفضل ولاية قضائية ونقدم تفصيلاً واضحاً للتكاليف — كل ذلك مجاناً.", timeline: isAr ? "اليوم الأول" : "Day 1" },
    { icon: FileSearch, numEn: "02", titleEn: "Documentation & Approvals", titleAr: "التوثيق والموافقات", descEn: "We prepare all required documents, submit applications to the relevant authorities, and handle all government interactions on your behalf.", descAr: "نعد جميع المستندات المطلوبة ونقدم الطلبات للجهات المعنية ونتعامل مع جميع التعاملات الحكومية نيابة عنك.", timeline: isAr ? "الأيام 2-5" : "Days 2-5" },
    { icon: FileCheck, numEn: "03", titleEn: "License & Visa Processing", titleAr: "معالجة الرخصة والتأشيرة", descEn: "Once approved, we collect your trade license, process investor/employee visas, and arrange Emirates ID appointments.", descAr: "بمجرد الموافقة، نستلم رخصتك التجارية ونعالج تأشيرات المستثمرين/الموظفين ونرتب مواعيد الهوية الإماراتية.", timeline: isAr ? "الأيام 5-8" : "Days 5-8" },
    { icon: Rocket, numEn: "04", titleEn: "Business Launch", titleAr: "إطلاق الأعمال", descEn: "Your company is officially registered. We help you open a bank account, set up your office, and ensure you're fully operational.", descAr: "شركتك مسجلة رسمياً. نساعدك في فتح حساب بنكي وإعداد مكتبك والتأكد من أنك جاهز للعمل بالكامل.", timeline: isAr ? "الأيام 8-10" : "Days 8-10" },
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
            {isAr ? "كيف نعمل" : "How It Works"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "أربع خطوات بسيطة لتأسيس عملك" : "Four Simple Steps to Launch Your Business"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {isAr ? "من الفكرة إلى الإطلاق في أقل من 10 أيام عمل" : "From idea to launch in as little as 10 business days"}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-8 items-start">
                <div className="flex-shrink-0 text-center">
                  <div className="w-16 h-16 bg-[#076072] flex items-center justify-center mb-2">
                    <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{step.numEn}</span>
                  </div>
                  <span className="text-xs text-[#C9A84C] font-semibold flex items-center gap-1 justify-center">
                    <Clock size={12} /> {step.timeline}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-[#C9A84C]/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-[#054A57] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {isAr ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-[#666] leading-relaxed">
                    {isAr ? step.descAr : step.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#054A57] text-center mb-10" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "ما يشمله كل تأسيس" : "What's Included in Every Setup"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {(isAr
              ? ["استشارة مجانية", "اختيار الاسم التجاري", "إعداد المستندات", "تقديم الطلبات الحكومية", "استلام الرخصة التجارية", "معالجة التأشيرات", "الهوية الإماراتية", "المساعدة في فتح حساب بنكي", "مدير حساب مخصص"]
              : ["Free Consultation", "Trade Name Selection", "Document Preparation", "Government Submissions", "Trade License Collection", "Visa Processing", "Emirates ID", "Bank Account Assistance", "Dedicated Account Manager"]
            ).map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100">
                <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm text-[#333]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#054A57]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "مستعد للبدء؟" : "Ready to Get Started?"}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {isAr ? "احصل على عرض سعر مخصص في أقل من دقيقتين" : "Get a personalized quote in less than 2 minutes"}
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
