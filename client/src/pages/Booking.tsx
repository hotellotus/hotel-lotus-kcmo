/*
 * Hotel Lotus KCMO — Booking Page
 * Design: Full-page booking experience with calendar
 */

import BookingCalendar from "@/components/BookingCalendar";

export default function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.12_0_0)] to-[oklch(0.08_0_0)] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Reserve Your Stay
          </p>
          <h1
            className="text-white text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book Your Room
          </h1>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-white/60 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Select your dates, choose your preferred room type, and complete your booking directly on our website.
          </p>
        </div>

        {/* Booking Calendar */}
        <BookingCalendar />

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Best Rate Guarantee",
              description: "Book directly with us for the lowest rates available online.",
            },
            {
              title: "Instant Confirmation",
              description: "Receive your booking confirmation immediately via email.",
            },
            {
              title: "24/7 Support",
              description: "Our team is available around the clock to assist you.",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <h3
                className="text-white text-lg font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/60 text-sm"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
