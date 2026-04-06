/*
 * Hotel Lotus KCMO — Welcome/About Section
 * Design: Light cream background, gold accents, serif headings
 * Layout: Two-column with image on left, text on right
 */


const IMG3_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/img3_ea19cf06.png";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="lg:pl-0">
            <p
              className="section-label text-[oklch(0.73_0.12_85)] mb-3"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Welcome To
            </p>
            
            <h2
              className="text-4xl lg:text-5xl font-semibold text-[oklch(0.12_0_0)] mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hotel Lotus
            </h2>
            
            <p
              className="text-[oklch(0.73_0.12_85)] text-lg mb-6"
              style={{ fontFamily: "'Gilda Display', serif" }}
            >
              Kansas City
            </p>
            
            <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mb-8" />
            
            <p
              className="text-[oklch(0.35_0.01_65)] text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Whether you're a business traveler in Kansas City or a visitor here on an unforgettable vacation, Hotel Lotus is equipped with amenities and extras to make every stay a success! Perks begin right away with a 24-hour front desk, while our accommodations come with in-room temperature control, flat-screen TVs, and comforts of home like a microwave and mini-fridge.
            </p>
            
            <p
              className="text-[oklch(0.35_0.01_65)] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Business travelers will appreciate the free WiFi and comfortable work desks in every room, while our business center and meeting rooms are an added convenience for guests needing to host a meeting or print important documents.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: "24/7", label: "Front Desk" },
                { value: "Free", label: "Breakfast" },
                { value: "Pet", label: "Friendly" },
              ].map((stat) => (
                <div key={stat.label} className="text-center border-r border-[oklch(0.88_0.005_85)] last:border-0">
                  <div
                    className="text-2xl font-semibold text-[oklch(0.73_0.12_85)] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-[oklch(0.50_0.01_65)] tracking-widest uppercase"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <a
              href="/booking"
              className="inline-block btn-gold"
              style={{
                backgroundColor: "oklch(0.73 0.12 85)",
                color: "oklch(0.08 0 0)",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.875rem 2.5rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
