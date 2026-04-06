/*
 * Hotel Lotus KCMO — Business Center Section
 * Design: Light cream background, image-focused layout
 * Colors: Cream background, dark text, gold accents
 */

export default function BusinessCenter() {
  return (
    <section id="business-center" className="py-20 lg:py-28 bg-[oklch(0.97_0.005_85)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Business Amenities
          </p>
          <h2
            className="text-[oklch(0.12_0_0)] text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Business Center & Lounge
          </h2>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-[oklch(0.45_0.01_65)] text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Stay productive with our fully equipped business center and comfortable lounge area, perfect for meetings or focused work.
          </p>
        </div>

        {/* Business Center Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/canvaedut_a61dd70a.png"
              alt="Business Center Lounge"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-[oklch(0.12_0_0)] text-2xl font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Professional Workspace
              </h3>
              <p
                className="text-[oklch(0.45_0.01_65)]"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Our business center features high-speed internet, comfortable seating, and modern amenities to support your work needs. Whether you're attending a video conference or catching up on emails, we have everything you need.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.73_0.12_85)] flex-shrink-0 mt-1" />
                <div>
                  <h4
                    className="text-[oklch(0.12_0_0)] font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    High-Speed WiFi
                  </h4>
                  <p
                    className="text-[oklch(0.45_0.01_65)] text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Fast, reliable internet connectivity throughout the center
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.73_0.12_85)] flex-shrink-0 mt-1" />
                <div>
                  <h4
                    className="text-[oklch(0.12_0_0)] font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Meeting Rooms
                  </h4>
                  <p
                    className="text-[oklch(0.45_0.01_65)] text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Private spaces available for client meetings and presentations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.73_0.12_85)] flex-shrink-0 mt-1" />
                <div>
                  <h4
                    className="text-[oklch(0.12_0_0)] font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Comfortable Lounge
                  </h4>
                  <p
                    className="text-[oklch(0.45_0.01_65)] text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Relax between meetings in our professionally designed lounge area
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.73_0.12_85)] flex-shrink-0 mt-1" />
                <div>
                  <h4
                    className="text-[oklch(0.12_0_0)] font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Printing Services
                  </h4>
                  <p
                    className="text-[oklch(0.45_0.01_65)] text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    On-site printing and document services available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
