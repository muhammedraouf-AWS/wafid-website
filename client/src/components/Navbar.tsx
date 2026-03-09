/*
 * Gulf Luxe Design: Navbar
 * - Real Wafid logo
 * - Transparent on hero, solid white on scroll
 * - Gold accent line at bottom
 * - Language toggle EN/AR
 * - Complete navigation with all pages
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS } from "@/lib/data";
import { Menu, X, Globe, Phone } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/free-zones", label: t("nav.freeZones") },
    { href: "/industries", label: t("nav.industries") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isHome = location === "/";

  return (
    <>
      {/* Top utility bar — desktop only */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled ? "bg-[#054A57]" : "bg-[#054A57]/90"
      }`}>
        <div className="container flex items-center justify-between py-1.5 text-xs text-white/80">
          <div className="flex items-center gap-5">
            <a href="tel:+97140000000" className="flex items-center gap-1 hover:text-[#C9A84C] transition-colors">
              <Phone size={12} />
              <span>+971 4 XXX XXXX</span>
            </a>
            <span>info@wafid.ae</span>
          </div>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1 font-semibold hover:text-[#C9A84C] transition-colors"
          >
            <Globe size={12} />
            {lang === "en" ? "العربية" : "English"}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`fixed top-0 lg:top-[32px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-[#054A57]/60 backdrop-blur-sm"
        }`}
      >
        <div className="border-b-[3px] border-[#C9A84C]/40">
          <div className="container flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src={scrolled || !isHome ? ASSETS.logoLight : ASSETS.logoDark}
                alt="WAFID - Business Setup & PRO Services"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-300 hover:text-[#C9A84C] ${
                    location === link.href || (link.href !== "/" && location.startsWith(link.href))
                      ? "text-[#C9A84C]"
                      : scrolled || !isHome
                      ? "text-[#333]"
                      : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                  {(location === link.href || (link.href !== "/" && location.startsWith(link.href))) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A84C]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side: CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/quote"
                className="bg-[#C9A84C] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#A68A3A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("nav.getQuote")}
              </Link>
            </div>

            {/* Mobile: language + menu */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className={`text-sm font-bold px-2 py-1 transition-colors ${
                  scrolled || !isHome ? "text-[#076072]" : "text-white"
                }`}
              >
                {lang === "en" ? "ع" : "EN"}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-1 transition-colors ${
                  scrolled || !isHome ? "text-[#076072]" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#C9A84C]/20 shadow-lg">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-3 px-4 rounded-md transition-colors ${
                    location === link.href
                      ? "text-[#076072] bg-[#E8F4F6] font-bold"
                      : "text-[#333] hover:bg-[#FAFAFA]"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100">
                <Link
                  href="/quote"
                  className="block w-full text-center bg-[#C9A84C] text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-[#A68A3A] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("nav.getQuote")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed nav */}
      <div className="h-20 lg:h-[112px]" />
    </>
  );
}
