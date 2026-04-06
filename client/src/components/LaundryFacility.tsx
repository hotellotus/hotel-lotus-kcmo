/*
 * Hotel Lotus KCMO — Laundry Facility Section
 * Design: Light cream background, image-focused layout
 * Colors: Cream background, dark text, gold accents
 */

export default function LaundryFacility() {
  return (
    <section id="laundry-facility" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Guest Services
          </p>
          <h2
            className="text-[oklch(0.12_0_0)] text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Laundry Facilities
          </h2>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-[oklch(0.45_0.01_65)] text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Extended stays made easy with our convenient on-site laundry facilities and professional laundry services.
          </p>
        </div>

        {/* Laundry Facility Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h3
                className="text-[oklch(0.12_0_0)] text-2xl font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Convenient Laundry Services
              </h3>
              <p
                className="text-[oklch(0.45_0.01_65)]"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Whether you need to do your own laundry or prefer our professional services, we have options to meet your needs. Our modern facilities are clean, well-maintained, and available 24/7 for guest use.
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
                    Self-Service Laundry
                  </h4>
                  <p
                    className="text-[oklch(0.45_0.01_65)] text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Modern washers and dryers available 24/7 for guest use
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
                    Supplies Available
                  </h4>
                  <p
                    className="text-[oklch(0.45_0.01_65)] text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Detergent, bleach, and softeners available for purchase
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
                    Clean & Maintained
                  </h4>
                  <p
                    className="text-[oklch(0.45_0.01_65)] text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Regularly cleaned and well-maintained facilities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg order-1 lg:order-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/E3153F43-BAC8-41DE-812F-1EFFB0FCB54C_55fe3223.png"
              alt="Laundry Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
