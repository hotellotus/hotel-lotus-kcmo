/*
 * Hotel Lotus KCMO — Navbar Component
 * Design: Noir Luxury — transparent over hero, dark on scroll
 * Colors: Black bg, gold accents, white text
 * Typography: Lato (nav links), Playfair Display (logo text)
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/logo_5bdbd6fb.jpg";
const BOOKING_URL = "https://booking.hotelkeyapp.com/#/booking/search?pc=0689&property_id=8e221710-3e95-455c-9e0e-9c50a862f01b&url=http%3A%2F%2Fwww.lotuskcmo.com%2F";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Explore", href: "#explore" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.08_0_0)] shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <img
                src={LOGO_URL}
                alt="Hotel Lotus"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover"
              />
              <div className="hidden sm:block">
                <div
                  className="font-display text-white text-lg lg:text-xl font-semibold leading-tight tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Hotel Lotus
                </div>
                <div
                  className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest"
                  style={{ fontFamily: "'Gilda Display', serif" }}
                >
                  Essence In Hospitality
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/80 hover:text-[oklch(0.73_0.12_85)] text-xs font-body tracking-widest uppercase transition-colors duration-300"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:8169216000"
                className="hidden md:flex items-center gap-2 text-[oklch(0.73_0.12_85)] text-xs tracking-widest hover:text-white transition-colors"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <Phone className="w-3 h-3" />
                (816) 921-6000
              </a>
              <a
                href={BOOKING_URL}
                className="btn-gold text-xs px-4 py-2 lg:px-6 lg:py-2.5"
                style={{
                  backgroundColor: "oklch(0.73 0.12 85)",
                  color: "oklch(0.08 0 0)",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                  padding: "0.5rem 1.25rem",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Book Now
              </a>
              <button
                className="lg:hidden text-white p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[oklch(0.08_0_0)] border-t border-[oklch(0.73_0.12_85)]/30">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block text-white/80 hover:text-[oklch(0.73_0.12_85)] text-sm tracking-widest uppercase py-2 border-b border-white/10 transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:8169216000"
                className="flex items-center gap-2 text-[oklch(0.73_0.12_85)] text-sm py-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                (816) 921-6000
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
