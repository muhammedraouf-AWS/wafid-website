/*
 * Gulf Luxe Design: Contact Page
 * - Contact form + info
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117178986/UbC8QyuJw6HptZEKgwxE7W/hero-contact-MvQrHnkCa4A3vGv3w9Qgni.webp";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-[#076072]/80" />
        <div className="relative container pt-32 pb-16">
          <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
            {t("contact.label")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            {t("contact.title")}
          </h1>
          <p className="text-white/70 mt-4 max-w-xl text-lg">{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#076072]/5 p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#076072] flex items-center justify-center">
                    <Send className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#076072] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {lang === "ar" ? "شكرًا لتواصلك!" : "Thank You!"}
                  </h3>
                  <p className="text-gray-600">
                    {lang === "ar" ? "سيتصل بك أحد مستشارينا في أقرب وقت." : "One of our consultants will be in touch shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 bg-[#FAFAFA] focus:border-[#C9A84C] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 bg-[#FAFAFA] focus:border-[#C9A84C] focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-200 bg-[#FAFAFA] focus:border-[#C9A84C] focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {t("contact.message")}
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-200 bg-[#FAFAFA] focus:border-[#C9A84C] focus:outline-none transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#C9A84C] text-white px-10 py-4 text-sm font-semibold hover:bg-[#b8963e] transition-all inline-flex items-center gap-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t("contact.send")}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-[#076072] p-8 lg:p-10 text-white">
                <h3 className="text-xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                  {t("footer.contactInfo")}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#C9A84C] mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{lang === "ar" ? "العنوان" : "Address"}</p>
                      <p className="text-white/70 text-sm">{t("contact.address")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#C9A84C] mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{lang === "ar" ? "البريد الإلكتروني" : "Email"}</p>
                      <p className="text-white/70 text-sm">{t("contact.emailAddress")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#C9A84C] mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{lang === "ar" ? "الهاتف" : "Phone"}</p>
                      <p className="text-white/70 text-sm">{t("contact.phoneNumber")}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/70">
                    {lang === "ar"
                      ? "ساعات العمل: الأحد - الخميس، 9 صباحًا - 6 مساءً"
                      : "Working Hours: Sun - Thu, 9:00 AM - 6:00 PM"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
