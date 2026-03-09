import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen">
      <section className="bg-[#076072] pt-32 pb-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container max-w-3xl prose prose-gray">
          <p className="text-gray-600 leading-relaxed mb-6">
            {lang === "ar"
              ? "في وافد، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند استخدام موقعنا الإلكتروني وخدماتنا."
              : "At Wafid, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and services."}
          </p>
          <h2 className="text-xl font-bold text-[#076072] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "المعلومات التي نجمعها" : "Information We Collect"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {lang === "ar"
              ? "نجمع المعلومات التي تقدمها لنا مباشرة، مثل اسمك وبريدك الإلكتروني ورقم هاتفك عند ملء نماذج الاتصال أو طلب عرض سعر. كما نجمع بيانات الاستخدام تلقائيًا عند تصفح موقعنا."
              : "We collect information you provide directly to us, such as your name, email address, and phone number when you fill out contact forms or request a quote. We also automatically collect usage data when you browse our website."}
          </p>
          <h2 className="text-xl font-bold text-[#076072] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "كيف نستخدم معلوماتك" : "How We Use Your Information"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {lang === "ar"
              ? "نستخدم معلوماتك للرد على استفساراتك، وتقديم خدماتنا، وتحسين تجربة المستخدم، وإرسال معلومات تسويقية بموافقتك."
              : "We use your information to respond to your inquiries, provide our services, improve user experience, and send marketing information with your consent."}
          </p>
          <h2 className="text-xl font-bold text-[#076072] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {lang === "ar" ? "حماية البيانات" : "Data Protection"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {lang === "ar"
              ? "نتخذ تدابير أمنية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير."
              : "We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction."}
          </p>
        </div>
      </section>
    </div>
  );
}
