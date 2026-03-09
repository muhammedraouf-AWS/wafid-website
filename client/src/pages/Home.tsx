import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, services, industries, blogPosts, faqs } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Building2, Landmark, Globe, FileCheck, UserCheck, CreditCard, Wallet, Shield,
  Award, Receipt, ChevronRight, ArrowRight, CheckCircle, Star, Phone,
  ShoppingCart, Cpu, Briefcase, HeartPulse, Megaphone, GraduationCap,
  Factory, Plane, TrendingUp, UtensilsCrossed, ChevronDown, ChevronUp,
  Download, MessageCircle
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, any> = {
  Building2, Landmark, Globe, FileCheck, UserCheck, CreditCard, Wallet, Shield,
  Award, Receipt, ShoppingCart, Cpu, Briefcase, HeartPulse, Megaphone,
  GraduationCap, Factory, Plane, TrendingUp, UtensilsCrossed
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const coreServices = services.filter(s => s.category === "core").slice(0, 6);
  const featuredBlogs = blogPosts.slice(0, 3);
  const featuredFaqs = faqs.slice(0, 6);

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden -mt-20 lg:-mt-[112px] pt-20 lg:pt-[112px]">
        <div className="absolute inset-0">
          <img src={ASSETS.heroHome} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#032C35]/95 via-[#054A57]/90 to-[#054A57]/75" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold tracking-wider uppercase"
                style={{ fontFamily: "var(--font-heading)" }}>
                {isAr ? "وافد — تأسيس الأعمال في الإمارات" : "WAFID — UAE Business Setup"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              {t("hero.title")}{" "}
              <span className="text-[#C9A84C]">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold text-lg hover:bg-[#A68A3A] transition-all"
                style={{ fontFamily: "var(--font-heading)" }}>
                {t("hero.cta1")}
                <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold text-lg hover:bg-white/10 transition-all"
                style={{ fontFamily: "var(--font-heading)" }}>
                {t("hero.cta2")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-white border-b border-gray-100">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={20} className="text-[#076072]" />, text: t("trust.licensed") },
              { icon: <Globe size={20} className="text-[#076072]" />, text: t("trust.bilingual") },
              { icon: <CheckCircle size={20} className="text-[#076072]" />, text: t("trust.transparent") },
              { icon: <UserCheck size={20} className="text-[#076072]" />, text: t("trust.dedicated") },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                {item.icon}
                <span className="text-sm font-medium text-[#333]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {t("services.label")}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#054A57] mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("services.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#666] max-w-2xl mx-auto text-lg">
              {t("services.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {coreServices.map((service) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link href={`/services/${service.slug}`} className="block group bg-white p-8 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 bg-[#076072]/10 flex items-center justify-center mb-5">
                      <Icon size={24} className="text-[#076072]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#054A57] mb-3 group-hover:text-[#076072] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {isAr ? service.nameAr : service.nameEn}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-4">
                      {isAr ? service.shortAr : service.shortEn}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold group-hover:gap-2 transition-all">
                      {t("services.learnMore")} <ChevronRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#076072] text-[#076072] font-semibold hover:bg-[#076072] hover:text-white transition-all"
              style={{ fontFamily: "var(--font-heading)" }}>
              {t("services.viewAll")} ({services.length}+)
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {t("howItWorks.label")}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#054A57] mt-3" style={{ fontFamily: "var(--font-heading)" }}>
              {t("howItWorks.title")}
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: t("howItWorks.step1Title"), desc: t("howItWorks.step1Desc") },
              { num: "02", title: t("howItWorks.step2Title"), desc: t("howItWorks.step2Desc") },
              { num: "03", title: t("howItWorks.step3Title"), desc: t("howItWorks.step3Desc") },
              { num: "04", title: t("howItWorks.step4Title"), desc: t("howItWorks.step4Desc") },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-[#076072] text-white flex items-center justify-center text-xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#054A57] mb-3" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS / WHY WAFID ===== */}
      <section className="py-20 bg-[#054A57] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {t("whyUs.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("whyUs.title")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">{t("whyUs.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { val: t("whyUs.stat1"), label: t("whyUs.stat1Label") },
              { val: t("whyUs.stat2"), label: t("whyUs.stat2Label") },
              { val: t("whyUs.stat3"), label: t("whyUs.stat3Label") },
              { val: t("whyUs.stat4"), label: t("whyUs.stat4Label") },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{stat.val}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: t("whyUs.oneStop"), desc: t("whyUs.oneStopDesc") },
              { title: t("whyUs.bilingualTitle"), desc: t("whyUs.bilingualDesc") },
              { title: t("whyUs.pricingTitle"), desc: t("whyUs.pricingDesc") },
              { title: t("whyUs.dedicatedTitle"), desc: t("whyUs.dedicatedDesc") },
              { title: t("whyUs.speedTitle"), desc: t("whyUs.speedDesc") },
              { title: t("whyUs.complianceTitle"), desc: t("whyUs.complianceDesc") },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6">
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {t("industries.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#054A57] mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("industries.title")}
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-lg">{t("industries.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Briefcase;
              return (
                <Link key={i} href="/industries" className="group flex items-center gap-3 p-5 bg-[#FAFAFA] border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
                  <Icon size={22} className="text-[#076072] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#333] group-hover:text-[#076072] transition-colors">
                    {isAr ? ind.nameAr : ind.nameEn}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {t("testimonials.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#054A57] mt-3" style={{ fontFamily: "var(--font-heading)" }}>
              {t("testimonials.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", role: isAr ? "مؤسسة شركة تقنية" : "Tech Startup Founder", text: isAr ? "وافد جعل تأسيس شركتي في دبي سهلاً للغاية. من الاستشارة الأولى إلى استلام الرخصة، كان كل شيء سلسًا واحترافيًا." : "WAFID made setting up my company in Dubai incredibly easy. From the initial consultation to receiving my license, everything was smooth and professional." },
              { name: "Ahmed K.", role: isAr ? "مدير شركة تجارية" : "Trading Company Director", text: isAr ? "خدمات العلاقات الحكومية من وافد وفرت علي ساعات لا تحصى. فريقهم يتعامل مع كل شيء بكفاءة عالية." : "WAFID's PRO services saved me countless hours. Their team handles everything with incredible efficiency." },
              { name: "Lisa T.", role: isAr ? "مستشارة أعمال" : "Business Consultant", text: isAr ? "أوصي بوافد لأي شخص يتطلع لتأسيس عمل في الإمارات. أسعارهم شفافة وفريقهم يعرف ما يفعله حقًا." : "I recommend WAFID to anyone looking to set up a business in the UAE. Their pricing is transparent and their team really knows what they're doing." },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-[#333] mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-[#054A57]" style={{ fontFamily: "var(--font-heading)" }}>{testimonial.name}</div>
                  <div className="text-sm text-[#666]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {t("blog.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#054A57] mt-3" style={{ fontFamily: "var(--font-heading)" }}>
              {t("blog.latestPosts")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featuredBlogs.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-[#FAFAFA] border border-gray-100 hover:shadow-lg transition-all overflow-hidden">
                <div className="h-2 bg-[#C9A84C]" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#076072] uppercase tracking-wider">
                    {isAr ? post.categoryAr : post.categoryEn}
                  </span>
                  <h3 className="text-lg font-bold text-[#054A57] mt-2 mb-3 group-hover:text-[#076072] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {isAr ? post.titleAr : post.titleEn}
                  </h3>
                  <p className="text-[#666] text-sm mb-4 line-clamp-2">
                    {isAr ? post.excerptAr : post.excerptEn}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#999]">
                    <span>{post.date}</span>
                    <span>{post.readTime} {t("blog.minRead")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#076072] font-semibold hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}>
              {t("blog.viewAll")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LEAD MAGNET ===== */}
      <section className="py-16 bg-[#076072]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {t("leadMagnet.title")}
              </h2>
              <p className="text-white/70">{t("leadMagnet.subtitle")}</p>
            </div>
            <Link href="/free-guide" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold text-lg hover:bg-[#A68A3A] transition-all flex-shrink-0"
              style={{ fontFamily: "var(--font-heading)" }}>
              <Download size={20} />
              {t("leadMagnet.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {t("faq.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#054A57] mt-3" style={{ fontFamily: "var(--font-heading)" }}>
              {t("faq.title")}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {featuredFaqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[#054A57] pr-4" style={{ fontFamily: "var(--font-heading)" }}>
                    {isAr ? faq.qAr : faq.qEn}
                  </span>
                  {openFaq === i ? <ChevronUp size={20} className="text-[#C9A84C] flex-shrink-0" /> : <ChevronDown size={20} className="text-[#666] flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-[#666] leading-relaxed">
                    {isAr ? faq.aAr : faq.aEn}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-[#076072] font-semibold hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}>
              {isAr ? "عرض جميع الأسئلة" : "View All FAQs"} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-[#054A57] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {t("cta.title")}
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">{t("cta.subtitle")}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {t("cta.quoteButton")}
                  <ArrowRight size={20} />
                </Link>
                <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  <MessageCircle size={20} />
                  {t("cta.whatsapp")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/971500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
}
