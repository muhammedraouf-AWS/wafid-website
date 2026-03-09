import { Link, useRoute } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, services } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Building2, Landmark, Globe, FileCheck, RefreshCw, UserCheck, CreditCard,
  Fingerprint, HeartPulse, Stamp, Languages, Wallet, Building, FileText,
  Shield, Award, GitBranch, PenTool, Receipt, Ship, CalendarCheck, XCircle,
  TrendingUp, Network, ArrowRight, ChevronRight, ArrowLeft
} from "lucide-react";

const iconMap: Record<string, any> = {
  Building2, Landmark, Globe, FileCheck, RefreshCw, UserCheck, CreditCard,
  Fingerprint, HeartPulse, Stamp, Languages, Wallet, Building, FileText,
  Shield, Award, GitBranch, PenTool, Receipt, Ship, CalendarCheck, XCircle,
  TrendingUp, Network
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const categoryLabels: Record<string, { en: string; ar: string }> = {
  core: { en: "Core Services", ar: "الخدمات الأساسية" },
  supporting: { en: "Supporting Services", ar: "الخدمات المساندة" },
  specialized: { en: "Specialized Services", ar: "الخدمات المتخصصة" },
  premium: { en: "Premium Services", ar: "الخدمات المميزة" },
};

function ServiceDetail({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-[#054A57]">{isAr ? "الخدمة غير موجودة" : "Service not found"}</h1>
        <Link href="/services" className="text-[#076072] mt-4 inline-block">{isAr ? "العودة للخدمات" : "Back to Services"}</Link>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Building2;
  const related = services.filter(s => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-[#C9A84C] mb-6 transition-colors text-sm">
            {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {isAr ? "العودة للخدمات" : "Back to Services"}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-[#C9A84C]/20 flex items-center justify-center">
              <Icon size={28} className="text-[#C9A84C]" />
            </div>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-wider">
              {isAr ? categoryLabels[service.category].ar : categoryLabels[service.category].en}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? service.nameAr : service.nameEn}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-lg text-[#333] leading-relaxed mb-8">
              {isAr ? service.detailAr : service.detailEn}
            </p>
            <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all"
              style={{ fontFamily: "var(--font-heading)" }}>
              {t("services.getStarted")} <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#FAFAFA]">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#054A57] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              {isAr ? "خدمات ذات صلة" : "Related Services"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((s) => {
                const SIcon = iconMap[s.icon] || Building2;
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group block bg-white p-6 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all">
                    <SIcon size={24} className="text-[#076072] mb-4" />
                    <h3 className="font-bold text-[#054A57] mb-2 group-hover:text-[#076072] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {isAr ? s.nameAr : s.nameEn}
                    </h3>
                    <p className="text-sm text-[#666]">{isAr ? s.shortAr : s.shortEn}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#076072]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {t("cta.title")}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="px-8 py-3 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all" style={{ fontFamily: "var(--font-heading)" }}>
              {t("cta.quoteButton")}
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all" style={{ fontFamily: "var(--font-heading)" }}>
              {t("common.contactUs")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Services() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [, params] = useRoute("/services/:slug");

  if (params?.slug) {
    return <ServiceDetail slug={params.slug} />;
  }

  const categories = ["core", "supporting", "specialized", "premium"] as const;

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.heroServices} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            {t("services.label")}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {t("services.pageTitle")}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">{t("services.pageSubtitle")}</p>
        </div>
      </section>

      {categories.map((cat, idx) => {
        const catServices = services.filter(s => s.category === cat);
        return (
          <section key={cat} className={idx % 2 === 1 ? "py-16 bg-[#FAFAFA]" : "py-16 bg-white"}>
            <div className="container">
              <h2 className="text-2xl font-bold text-[#054A57] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {isAr ? categoryLabels[cat].ar : categoryLabels[cat].en}
              </h2>
              <div className="w-12 h-0.5 bg-[#C9A84C] mb-8" />
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {catServices.map((service) => {
                  const Icon = iconMap[service.icon] || Building2;
                  return (
                    <motion.div key={service.slug} variants={fadeUp}>
                      <Link href={`/services/${service.slug}`} className="group block bg-white p-6 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-[#076072]/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <Icon size={20} className="text-[#076072]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#054A57] mb-2 group-hover:text-[#076072] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                              {isAr ? service.nameAr : service.nameEn}
                            </h3>
                            <p className="text-sm text-[#666] leading-relaxed mb-3">
                              {isAr ? service.shortAr : service.shortEn}
                            </p>
                            <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold">
                              {t("services.learnMore")} <ChevronRight size={14} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        );
      })}

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
