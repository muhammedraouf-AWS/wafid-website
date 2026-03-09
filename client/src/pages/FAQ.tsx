import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, faqs } from "@/lib/data";
import { ChevronDown, ChevronUp, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "الأسئلة الشائعة" : "FAQ"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "الأسئلة الأكثر شيوعاً" : "Frequently Asked Questions"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {isAr ? "إجابات على أكثر الأسئلة شيوعاً حول تأسيس الأعمال في الإمارات" : "Answers to the most common questions about setting up a business in the UAE"}
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#FAFAFA] border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#054A57] pr-4" style={{ fontFamily: "var(--font-heading)" }}>
                    {isAr ? faq.qAr : faq.qEn}
                  </span>
                  {openFaq === i ? <ChevronUp size={20} className="text-[#C9A84C] flex-shrink-0" /> : <ChevronDown size={20} className="text-[#666] flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[#666] leading-relaxed border-t border-gray-100 pt-4">
                    {isAr ? faq.aAr : faq.aEn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#054A57] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "لا تزال لديك أسئلة؟" : "Still Have Questions?"}
          </h2>
          <p className="text-[#666] mb-8 max-w-xl mx-auto">
            {isAr ? "فريقنا جاهز لمساعدتك. تواصل معنا للحصول على استشارة مجانية." : "Our team is ready to help. Contact us for a free consultation."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all"
              style={{ fontFamily: "var(--font-heading)" }}>
              {t("common.contactUs")} <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-all"
              style={{ fontFamily: "var(--font-heading)" }}>
              <MessageCircle size={20} />
              {isAr ? "واتساب" : "WhatsApp"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
