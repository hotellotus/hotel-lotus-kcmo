export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)] text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cancellation Policy
          </h1>
          <p className="text-white/60">Last updated: March 28, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              1. Cancellation Overview
            </h2>
            <p>
              At Hotel Lotus KCMO, we understand that plans can change. We strive to offer flexible cancellation policies to accommodate our guests. Please review the specific terms of your reservation, as cancellation policies may vary depending on the rate type and booking terms.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              2. Standard Cancellation Policy
            </h2>
            <p className="mb-4">
              For most reservations made at Hotel Lotus KCMO, the following standard cancellation policy applies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Free Cancellation:</strong> Reservations may be cancelled free of charge up to 48 hours before the scheduled arrival date.</li>
              <li><strong>Cancellation Fee:</strong> Cancellations made within 48 hours of arrival or no-shows will result in a charge equal to the first night's room rate.</li>
              <li><strong>Group Reservations:</strong> Group reservations have different cancellation terms and must be cancelled 7 days prior to arrival.</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              3. Non-Refundable Rates
            </h2>
            <p>
              Some rates offered by Hotel Lotus KCMO are non-refundable. These rates are typically offered at a discounted price and cannot be cancelled or modified. Guests who book non-refundable rates are not eligible for a refund in the event of cancellation.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              4. How to Cancel
            </h2>
            <p className="mb-4">
              To cancel your reservation, please:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact the hotel directly at (816) 921-6000</li>
              <li>Email us at Hotellotusstadium@gmail.com</li>
              <li>Use the cancellation option on your booking confirmation email</li>
              <li>Cancel through the third-party booking platform where you made your reservation</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              5. Refund Processing
            </h2>
            <p>
              Refunds for eligible cancellations will be processed to the original payment method used at the time of booking. Please allow 5-7 business days for the refund to appear in your account. Some financial institutions may take additional time to process the refund.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              6. Modifications to Reservations
            </h2>
            <p className="mb-4">
              Changes to your reservation (such as arrival date, departure date, or room type) may be made subject to availability and the following terms:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modifications must be requested at least 48 hours before arrival</li>
              <li>Changes to dates may result in rate adjustments</li>
              <li>Modified reservations are subject to the same cancellation policy as the original booking</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              7. Special Circumstances
            </h2>
            <p>
              In cases of emergency, death in the family, or other extenuating circumstances, Hotel Lotus KCMO may consider exceptions to our standard cancellation policy. Please contact us directly to discuss your situation.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              8. Third-Party Bookings
            </h2>
            <p>
              If you booked through a third-party platform (such as Expedia, Booking.com, or Airbnb), please note that the cancellation policy of that platform may apply in addition to or instead of Hotel Lotus KCMO's policy. Please review the terms provided by the third-party platform for specific cancellation details.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              9. Contact Us
            </h2>
            <p>
              For questions about our cancellation policy or to discuss your specific reservation, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Hotel Lotus KCMO</strong></p>
              <p>3830 Blue Ridge Cutoff<br />Kansas City, MO 64133</p>
              <p>Phone: (816) 921-6000<br />Email: Hotellotusstadium@gmail.com</p>
            </div>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              10. Policy Updates
            </h2>
            <p>
              Hotel Lotus KCMO reserves the right to update this cancellation policy at any time. Changes will be effective immediately upon posting to the website. We encourage you to review this policy periodically for updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
