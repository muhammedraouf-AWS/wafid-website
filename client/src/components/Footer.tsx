import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS } from "@/lib/data";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <footer className="bg-[#054A57] text-white" dir={isAr ? "rtl" : "ltr"}>
      {/* Gold thread */}
      <div className="h-[3px] bg-[#C9A84C]" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={ASSETS.logoDark} alt="WAFID" className="h-10 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da851] transition-all rounded-sm">
              <MessageCircle size={16} />
              {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: t("nav.about") },
                { href: "/services", label: t("nav.services") },
                { href: "/free-zones", label: t("nav.freeZones") },
                { href: "/jurisdictions", label: t("nav.jurisdictions") },
                { href: "/industries", label: isAr ? "القطاعات" : "Industries" },
                { href: "/how-it-works", label: isAr ? "كيف نعمل" : "How It Works" },
                { href: "/why-us", label: isAr ? "لماذا وافد" : "Why WAFID" },
                { href: "/blog", label: t("nav.blog") },
                { href: "/faq", label: isAr ? "الأسئلة الشائعة" : "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: isAr ? "تأسيس شركة البر الرئيسي" : "Mainland Company Formation" },
                { label: isAr ? "تأسيس شركة المنطقة الحرة" : "Free Zone Company Formation" },
                { label: isAr ? "الرخصة التجارية" : "Trade License" },
                { label: isAr ? "التأشيرات والإقامة" : "Visa & Residency" },
                { label: isAr ? "خدمات العلاقات الحكومية" : "PRO Services" },
                { label: isAr ? "فتح حساب بنكي" : "Bank Account Opening" },
                { label: isAr ? "الإقامة الذهبية" : "Golden Visa" },
                { label: isAr ? "ضريبة القيمة المضافة" : "VAT Registration" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href="/services" className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] mt-1 shrink-0" />
                <span className="text-white/60 text-sm">{t("contact.address")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A84C] mt-1 shrink-0" />
                <span className="text-white/60 text-sm">{t("contact.emailAddress")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C9A84C] mt-1 shrink-0" />
                <span className="text-white/60 text-sm">{t("contact.phoneNumber")}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/quote" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A84C] text-white text-sm font-semibold hover:bg-[#A68A3A] transition-all"
                style={{ fontFamily: "var(--font-heading)" }}>
                {t("cta.quoteButton")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} WAFID. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 text-xs hover:text-[#C9A84C] transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-white/40 text-xs hover:text-[#C9A84C] transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/contact" className="text-white/40 text-xs hover:text-[#C9A84C] transition-colors">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
