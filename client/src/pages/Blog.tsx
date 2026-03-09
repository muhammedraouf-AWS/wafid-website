import { Link, useRoute } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS, blogPosts, blogCategories } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, Calendar, ChevronLeft, ChevronRight, Tag, Search } from "lucide-react";
import { useState, useMemo } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

const POSTS_PER_PAGE = 12;

function BlogArticle({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-[#054A57]">{isAr ? "المقال غير موجود" : "Article not found"}</h1>
        <Link href="/blog" className="text-[#076072] mt-4 inline-block">{isAr ? "العودة للمدونة" : "Back to Blog"}</Link>
      </div>
    );
  }

  const related = blogPosts.filter(p => p.categoryEn === post.categoryEn && p.id !== post.id).slice(0, 3);

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-[#C9A84C] mb-6 transition-colors text-sm">
            {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {isAr ? "العودة للمدونة" : "Back to Blog"}
          </Link>
          <span className="block text-[#C9A84C] text-sm font-semibold uppercase tracking-wider mb-3">
            {isAr ? post.categoryAr : post.categoryEn}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? post.titleAr : post.titleEn}
          </h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} {isAr ? "قراءة" : "read"}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#333] leading-relaxed mb-6">
              {isAr ? post.excerptAr : post.excerptEn}
            </p>
            <div className="text-[#444] leading-relaxed space-y-4">
              <p>{isAr
                ? `هذا الدليل الشامل يغطي كل ما تحتاج معرفته حول ${post.titleAr}. في وافد، نقدم لك المعلومات والخبرة اللازمة لاتخاذ قرارات مستنيرة بشأن تأسيس أعمالك في الإمارات العربية المتحدة.`
                : `This comprehensive guide covers everything you need to know about ${post.titleEn.toLowerCase()}. At WAFID, we provide you with the information and expertise needed to make informed decisions about your business setup in the UAE.`
              }</p>
              <p>{isAr
                ? "للحصول على استشارة مجانية ومخصصة حول هذا الموضوع، لا تتردد في التواصل مع فريق خبرائنا. نحن هنا لمساعدتك في كل خطوة من رحلة تأسيس أعمالك."
                : "For a free, personalized consultation on this topic, don't hesitate to reach out to our team of experts. We're here to help you every step of the way on your business setup journey."
              }</p>
            </div>
            <div className="mt-10 p-6 bg-[#076072]/5 border border-[#076072]/10">
              <h3 className="font-bold text-[#054A57] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {isAr ? "هل تحتاج مساعدة؟" : "Need Help?"}
              </h3>
              <p className="text-[#666] text-sm mb-4">
                {isAr ? "فريق وافد جاهز لمساعدتك. احصل على استشارة مجانية اليوم." : "The WAFID team is ready to help. Get a free consultation today."}
              </p>
              <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white font-semibold hover:bg-[#A68A3A] transition-all text-sm"
                style={{ fontFamily: "var(--font-heading)" }}>
                {t("cta.quoteButton")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#FAFAFA]">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#054A57] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              {isAr ? "مقالات ذات صلة" : "Related Articles"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group block bg-white border border-gray-100 hover:shadow-lg transition-all overflow-hidden">
                  <div className="h-1.5 bg-[#C9A84C]" />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#076072] uppercase tracking-wider">
                      {isAr ? p.categoryAr : p.categoryEn}
                    </span>
                    <h3 className="text-base font-bold text-[#054A57] mt-2 mb-2 group-hover:text-[#076072] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {isAr ? p.titleAr : p.titleEn}
                    </h3>
                    <div className="text-xs text-[#999]">{p.date} &middot; {p.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function Blog() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [, params] = useRoute("/blog/:slug");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  if (params?.slug) {
    return <BlogArticle slug={params.slug} />;
  }

  const filtered = useMemo(() => {
    let posts = [...blogPosts];
    if (activeCategory !== "All") {
      posts = posts.filter(p => p.categoryEn === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(p =>
        p.titleEn.toLowerCase().includes(q) ||
        p.titleAr.includes(q) ||
        p.excerptEn.toLowerCase().includes(q) ||
        p.excerptAr.includes(q)
      );
    }
    return posts;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginatedPosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className={isAr ? "text-right" : "text-left"} dir={isAr ? "rtl" : "ltr"}>
      <section className="relative py-20 bg-[#054A57] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.pattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "المدونة" : "Blog"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {isAr ? "أحدث المقالات والأدلة" : "Latest Articles & Guides"}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {isAr ? "رؤى ونصائح من خبراء تأسيس الأعمال في الإمارات" : "Insights and tips from UAE business setup experts"}
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container">
          <div className="relative max-w-md mx-auto mb-6">
            <Search size={18} className={`absolute top-1/2 -translate-y-1/2 ${isAr ? "right-4" : "left-4"} text-[#999]`} />
            <input
              type="text"
              placeholder={isAr ? "ابحث في المقالات..." : "Search articles..."}
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className={`w-full ${isAr ? "pr-11 pl-4" : "pl-11 pr-4"} py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#076072] transition-colors`}
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {blogCategories.map((cat) => (
              <button
                key={cat.en}
                onClick={() => { setActiveCategory(cat.en); setCurrentPage(1); }}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.en
                    ? "bg-[#076072] text-white"
                    : "bg-[#FAFAFA] text-[#666] hover:bg-[#076072]/10"
                }`}
              >
                {isAr ? cat.ar : cat.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA]">
        <div className="container">
          <div className="mb-6 text-sm text-[#666]">
            {isAr ? `${filtered.length} مقال` : `${filtered.length} articles`}
          </div>
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#666]">{isAr ? "لا توجد مقالات مطابقة" : "No matching articles found"}</p>
            </div>
          ) : (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <motion.div key={post.id} variants={fadeUp}>
                  <Link href={`/blog/${post.slug}`} className="group block bg-white border border-gray-100 hover:shadow-lg transition-all overflow-hidden h-full">
                    <div className="h-1.5 bg-[#C9A84C]" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag size={12} className="text-[#076072]" />
                        <span className="text-xs font-semibold text-[#076072] uppercase tracking-wider">
                          {isAr ? post.categoryAr : post.categoryEn}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#054A57] mb-3 group-hover:text-[#076072] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-heading)" }}>
                        {isAr ? post.titleAr : post.titleEn}
                      </h3>
                      <p className="text-[#666] text-sm mb-4 line-clamp-2">
                        {isAr ? post.excerptAr : post.excerptEn}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#999]">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#666] hover:bg-[#076072] hover:text-white disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-all ${
                    currentPage === page
                      ? "bg-[#076072] text-white"
                      : "border border-gray-200 text-[#666] hover:bg-[#076072]/10"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#666] hover:bg-[#076072] hover:text-white disabled:opacity-30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
