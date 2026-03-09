/*
 * Gulf Luxe Design: Quote Builder
 * - Multi-step form wizard
 * - Progress indicator
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft, CheckCircle, Building2, Briefcase, Users, MapPin, Wrench, Send } from "lucide-react";
import { toast } from "sonner";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export default function Quote() {
  const { lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const BackArrow = lang === "ar" ? ArrowRight : ArrowLeft;
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    businessType: "",
    activity: "",
    visas: "",
    office: "",
    additionalServices: [] as string[],
    name: "",
    email: "",
    phone: "",
  });

  const steps = [
    { num: 1, icon: Building2, label: lang === "ar" ? "نوع الشركة" : "Business Type" },
    { num: 2, icon: Briefcase, label: lang === "ar" ? "النشاط" : "Activity" },
    { num: 3, icon: Users, label: lang === "ar" ? "التأشيرات" : "Visas" },
    { num: 4, icon: MapPin, label: lang === "ar" ? "المكتب" : "Office" },
    { num: 5, icon: Wrench, label: lang === "ar" ? "خدمات إضافية" : "Add-ons" },
    { num: 6, icon: Send, label: lang === "ar" ? "التواصل" : "Contact" },
  ];

  const businessTypes = [
    { value: "mainland", en: "Mainland", ar: "البر الرئيسي" },
    { value: "freezone", en: "Free Zone", ar: "المنطقة الحرة" },
    { value: "offshore", en: "Offshore", ar: "شركة خارجية" },
    { value: "not-sure", en: "Not Sure Yet", ar: "لست متأكدًا بعد" },
  ];

  const activities = [
    { value: "trading", en: "General Trading", ar: "تجارة عامة" },
    { value: "consulting", en: "Consulting", ar: "استشارات" },
    { value: "technology", en: "Technology / IT", ar: "تكنولوجيا / تقنية المعلومات" },
    { value: "ecommerce", en: "E-Commerce", ar: "تجارة إلكترونية" },
    { value: "food", en: "Food & Beverage", ar: "أغذية ومشروبات" },
    { value: "real-estate", en: "Real Estate", ar: "عقارات" },
    { value: "media", en: "Media & Marketing", ar: "إعلام وتسويق" },
    { value: "other", en: "Other", ar: "أخرى" },
  ];

  const visaOptions = [
    { value: "0", en: "No visas needed", ar: "لا حاجة لتأشيرات" },
    { value: "1-2", en: "1-2 visas", ar: "1-2 تأشيرة" },
    { value: "3-5", en: "3-5 visas", ar: "3-5 تأشيرات" },
    { value: "6-10", en: "6-10 visas", ar: "6-10 تأشيرات" },
    { value: "10+", en: "10+ visas", ar: "+10 تأشيرات" },
  ];

  const officeOptions = [
    { value: "virtual", en: "Virtual Office / Flexi-desk", ar: "مكتب افتراضي / مكتب مرن" },
    { value: "coworking", en: "Co-working Space", ar: "مساحة عمل مشتركة" },
    { value: "private", en: "Private Office", ar: "مكتب خاص" },
    { value: "warehouse", en: "Warehouse / Industrial", ar: "مستودع / صناعي" },
    { value: "none", en: "No office needed", ar: "لا حاجة لمكتب" },
  ];

  const additionalOptions = [
    { value: "bank", en: "Bank Account Opening", ar: "فتح حساب بنكي" },
    { value: "pro", en: "PRO Services", ar: "خدمات العلاقات الحكومية" },
    { value: "vat", en: "VAT Registration", ar: "تسجيل ضريبة القيمة المضافة" },
    { value: "accounting", en: "Accounting & Bookkeeping", ar: "المحاسبة ومسك الدفاتر" },
    { value: "trademark", en: "Trademark Registration", ar: "تسجيل العلامة التجارية" },
    { value: "golden-visa", en: "Golden Visa Assistance", ar: "المساعدة في الإقامة الذهبية" },
  ];

  const handleSubmit = () => {
    toast.success(lang === "ar" ? "تم إرسال طلبك بنجاح! سنتواصل معك قريبًا." : "Your quote request has been submitted! We'll be in touch soon.");
    setStep(1);
    setFormData({ businessType: "", activity: "", visas: "", office: "", additionalServices: [], name: "", email: "", phone: "" });
  };

  const toggleAdditional = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(value)
        ? prev.additionalServices.filter((v) => v !== value)
        : [...prev.additionalServices, value],
    }));
  };

  const OptionButton = ({ value, label, selected, onClick }: { value: string; label: string; selected: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 border-2 transition-all duration-300 flex items-center justify-between ${
        selected ? "border-[#C9A84C] bg-[#C9A84C]/5" : "border-gray-200 hover:border-[#076072]/30"
      }`}
    >
      <span className="text-sm font-medium text-[#333]">{label}</span>
      {selected && <CheckCircle className="w-5 h-5 text-[#C9A84C]" />}
    </button>
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#076072] pt-32 pb-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "احصل على عرض سعر مخصص" : "Get Your Custom Quote"}
          </h1>
          <p className="text-white/70 mt-3 max-w-xl">
            {lang === "ar"
              ? "أجب على بعض الأسئلة وسنقدم لك عرض سعر مخصص لاحتياجاتك."
              : "Answer a few questions and we'll provide a tailored quote for your needs."}
          </p>
        </div>
      </section>

      {/* Progress */}
      <section className="bg-[#076072] pb-8">
        <div className="container">
          <div className="flex items-center justify-between max-w-3xl">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 flex items-center justify-center transition-all ${
                  step >= s.num ? "bg-[#C9A84C]" : "bg-white/20"
                }`}>
                  <s.icon className={`w-5 h-5 ${step >= s.num ? "text-white" : "text-white/50"}`} />
                </div>
                <span className={`text-xs hidden sm:block ${step >= s.num ? "text-[#C9A84C]" : "text-white/40"}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="container max-w-2xl">
          {/* Step 1: Business Type */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "ما نوع الشركة التي ترغب في تأسيسها؟" : "What type of company do you want to set up?"}
              </h2>
              <p className="text-gray-500 text-sm mb-8">{lang === "ar" ? "اختر الخيار الأنسب لك" : "Select the option that best fits your needs"}</p>
              <div className="space-y-3">
                {businessTypes.map((bt) => (
                  <OptionButton key={bt.value} value={bt.value} label={lang === "ar" ? bt.ar : bt.en} selected={formData.businessType === bt.value} onClick={() => setFormData({ ...formData, businessType: bt.value })} />
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Activity */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "ما هو نشاطك التجاري؟" : "What is your business activity?"}
              </h2>
              <p className="text-gray-500 text-sm mb-8">{lang === "ar" ? "اختر النشاط الرئيسي" : "Select your primary activity"}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activities.map((a) => (
                  <OptionButton key={a.value} value={a.value} label={lang === "ar" ? a.ar : a.en} selected={formData.activity === a.value} onClick={() => setFormData({ ...formData, activity: a.value })} />
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Visas */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "كم عدد التأشيرات التي تحتاجها؟" : "How many visas do you need?"}
              </h2>
              <p className="text-gray-500 text-sm mb-8">{lang === "ar" ? "بما في ذلك تأشيرتك الخاصة" : "Including your own visa"}</p>
              <div className="space-y-3">
                {visaOptions.map((v) => (
                  <OptionButton key={v.value} value={v.value} label={lang === "ar" ? v.ar : v.en} selected={formData.visas === v.value} onClick={() => setFormData({ ...formData, visas: v.value })} />
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Office */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "ما نوع المكتب الذي تحتاجه؟" : "What type of office do you need?"}
              </h2>
              <p className="text-gray-500 text-sm mb-8">{lang === "ar" ? "اختر الحل المكتبي المناسب" : "Choose the right office solution"}</p>
              <div className="space-y-3">
                {officeOptions.map((o) => (
                  <OptionButton key={o.value} value={o.value} label={lang === "ar" ? o.ar : o.en} selected={formData.office === o.value} onClick={() => setFormData({ ...formData, office: o.value })} />
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Additional Services */}
          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "هل تحتاج خدمات إضافية؟" : "Do you need any additional services?"}
              </h2>
              <p className="text-gray-500 text-sm mb-8">{lang === "ar" ? "اختر كل ما ينطبق" : "Select all that apply"}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalOptions.map((a) => (
                  <OptionButton key={a.value} value={a.value} label={lang === "ar" ? a.ar : a.en} selected={formData.additionalServices.includes(a.value)} onClick={() => toggleAdditional(a.value)} />
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Contact */}
          {step === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "كيف يمكننا التواصل معك؟" : "How can we reach you?"}
              </h2>
              <p className="text-gray-500 text-sm mb-8">{lang === "ar" ? "أدخل بياناتك وسنرسل لك العرض" : "Enter your details and we'll send your quote"}</p>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {lang === "ar" ? "الاسم الكامل" : "Full Name"} *
                  </label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 bg-[#FAFAFA] focus:border-[#C9A84C] focus:outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {lang === "ar" ? "البريد الإلكتروني" : "Email Address"} *
                  </label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-200 bg-[#FAFAFA] focus:border-[#C9A84C] focus:outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#076072] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                  </label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-200 bg-[#FAFAFA] focus:border-[#C9A84C] focus:outline-none transition-colors text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
            {step > 1 ? (
              <button onClick={() => setStep((step - 1) as Step)} className="inline-flex items-center gap-2 text-gray-500 text-sm font-semibold hover:text-[#076072] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                <BackArrow className="w-4 h-4" />
                {lang === "ar" ? "السابق" : "Previous"}
              </button>
            ) : <div />}
            {step < 6 ? (
              <button onClick={() => setStep((step + 1) as Step)} className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b8963e] transition-all" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "التالي" : "Next"}
                <Arrow className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={handleSubmit} className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b8963e] transition-all" style={{ fontFamily: "var(--font-heading)" }}>
                {lang === "ar" ? "إرسال الطلب" : "Submit Request"}
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
