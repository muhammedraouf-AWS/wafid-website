import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen">
      <section className="bg-[#076072] pt-32 pb-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "شروط الخدمة" : "Terms of Service"}
          </h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container max-w-3xl prose prose-gray">
          <p className="text-gray-600 leading-relaxed mb-6">
            {lang === "ar"
              ? "باستخدام موقع وافد وخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام خدماتنا."
              : "By using the Wafid website and our services, you agree to be bound by these terms and conditions. Please read them carefully before using our services."}
          </p>
          <h2 className="text-xl font-bold text-[#076072] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "نطاق الخدمات" : "Scope of Services"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {lang === "ar"
              ? "تقدم وافد خدمات استشارية في مجال تأسيس الشركات والخدمات المؤسسية في الإمارات العربية المتحدة. تشمل خدماتنا تأسيس الشركات والترخيص ومعالجة التأشيرات وخدمات العلاقات الحكومية."
              : "Wafid provides consultancy services in business setup and corporate services in the United Arab Emirates. Our services include company formation, licensing, visa processing, and PRO services."}
          </p>
          <h2 className="text-xl font-bold text-[#076072] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "المسؤولية" : "Liability"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {lang === "ar"
              ? "بينما نبذل قصارى جهدنا لتقديم معلومات دقيقة ومحدثة، فإن المعلومات المقدمة على هذا الموقع هي لأغراض إعلامية عامة فقط ولا تشكل نصيحة قانونية أو مالية."
              : "While we strive to provide accurate and up-to-date information, the information provided on this website is for general informational purposes only and does not constitute legal or financial advice."}
          </p>
          <h2 className="text-xl font-bold text-[#076072] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "الملكية الفكرية" : "Intellectual Property"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {lang === "ar"
              ? "جميع المحتويات على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملكية لشركة وافد ومحمية بموجب قوانين حقوق الملكية الفكرية."
              : "All content on this website, including text, graphics, logos, and images, is the property of Wafid and is protected by intellectual property laws."}
          </p>
        </div>
      </section>
    </div>
  );
}
