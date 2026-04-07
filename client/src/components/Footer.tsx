/*
 * Hotel Lotus KCMO — Footer Component
 * Design: Very dark background, gold accents, organized columns
 * Colors: Near-black background, gold text, white/muted links
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/logo_5bdbd6fb.jpg";
const BOOKING_URL = "https://booking.hotelkeyapp.com/#/booking/search?pc=0689&property_id=8e221710-3e95-455c-9e0e-9c50a862f01b&url=http%3A%2F%2Fwww.lotuskcmo.com%2F";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Photo Gallery", href: "#gallery" },
  { label: "Explore Kansas City", href: "#explore" },
  { label: "Contact Us", href: "#contact" },
];

const policies = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Pet Policy", href: "/pet-policy" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("/")) {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[oklch(0.05_0_0)] border-t border-[oklch(0.73_0.12_85)]/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO_URL}
                alt="Hotel Lotus"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div
                  className="text-white text-lg font-semibold leading-tight"
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
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Your home away from home in Kansas City. We're committed to providing exceptional hospitality for every guest.
            </p>
            <a
              href={BOOKING_URL}
              style={{
                backgroundColor: "oklch(0.73 0.12 85)",
                color: "oklch(0.08 0 0)",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.625rem 1.5rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
            >
              Book Directly
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-sm font-semibold mb-5 tracking-widest uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/50 hover:text-[oklch(0.73_0.12_85)] text-sm transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4
              className="text-white text-sm font-semibold mb-5 tracking-widest uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <p
                className="text-white/50 text-sm"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                3830 Blue Ridge Cutoff<br />
                Kansas City, MO 64133
              </p>
              <a
                href="tel:8169216000"
                className="block text-white/50 hover:text-[oklch(0.73_0.12_85)] text-sm transition-colors"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                (816) 921-6000
              </a>
              <a
                href="mailto:Hotellotusstadium@gmail.com"
                className="block text-white/50 hover:text-[oklch(0.73_0.12_85)] text-sm transition-colors break-all"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Hotellotusstadium@gmail.com
              </a>
            </div>
          </div>
          
          {/* Hours & Policies */}
          <div>
            <h4
              className="text-white text-sm font-semibold mb-5 tracking-widest uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Hotel Hours
            </h4>
            <div className="space-y-3 mb-8">
              <div>
                <p
                  className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                >
                  Check-in
                </p>
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  4:00 PM
                </p>
              </div>
              <div>
                <p
                  className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                >
                  Check-out
                </p>
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  11:00 AM
                </p>
              </div>
              <div>
                <p
                  className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                >
                  Front Desk
                </p>
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  24 Hours / 7 Days
                </p>
              </div>
            </div>
            
            <h4
              className="text-white text-sm font-semibold mb-3 tracking-widest uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Policies
            </h4>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <a
                    href={policy.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(policy.href); }}
                    className="text-white/50 hover:text-[oklch(0.73_0.12_85)] text-xs transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)]"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs text-center sm:text-left"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Hotel Lotus Kansas City. All rights reserved.
          </p>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            For Lowest Fares, Book Directly on Hotel Website
          </p>
        </div>
      </div>
    </footer>
  );
}
