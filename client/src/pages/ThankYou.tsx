import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function ThankYou() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  return (
    <div className={`min-h-[70vh] flex items-center ${isAr ? "text-right" : "text-left"}`} dir={isAr ? "rtl" : "ltr"}>
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#076072]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-[#076072]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#054A57] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "شكراً لتواصلك معنا!" : "Thank You for Reaching Out!"}
          </h1>
          <p className="text-lg text-[#666] mb-8 leading-relaxed">
            {isAr
              ? "تم استلام طلبك بنجاح. سيتواصل معك أحد مستشارينا خلال 24 ساعة عمل لمناقشة احتياجاتك وتقديم أفضل الحلول."
              : "Your request has been received successfully. One of our consultants will contact you within 24 business hours to discuss your needs and provide the best solutions."}
          </p>
          <div className="bg-[#FAFAFA] p-6 mb-8 border border-gray-100">
            <h3 className="font-bold text-[#054A57] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {isAr ? "ماذا بعد؟" : "What Happens Next?"}
            </h3>
            <div className="space-y-3 text-sm text-[#666]">
              <p>{isAr ? "1. سيراجع فريقنا طلبك ويعد عرضاً مخصصاً" : "1. Our team will review your request and prepare a customized proposal"}</p>
              <p>{isAr ? "2. سيتواصل معك مستشار مخصص لمناقشة التفاصيل" : "2. A dedicated consultant will contact you to discuss the details"}</p>
              <p>{isAr ? "3. ستحصل على خطة واضحة مع جدول زمني وتكاليف محددة" : "3. You'll receive a clear plan with timeline and defined costs"}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#076072] text-white font-semibold hover:bg-[#054A57] transition-all"
              style={{ fontFamily: "var(--font-heading)" }}>
              {isAr ? "العودة للرئيسية" : "Back to Home"} <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-all"
              style={{ fontFamily: "var(--font-heading)" }}>
              <MessageCircle size={18} />
              {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
