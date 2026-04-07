export default function PetPolicy() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)] text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pet Policy
          </h1>
          <p className="text-white/60">Hotel Lotus KCMO</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <p className="text-lg">
              We welcome dogs only at Hotel Lotus KCMO. Please review our pet policy below before your stay.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pet Requirements &amp; Fees
            </h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Maximum <strong>2 dogs</strong> per room</li>
              <li>Maximum <strong>50 pounds</strong> per dog</li>
              <li><strong>$25 pet fee</strong> per night</li>
              <li><strong>$50 refundable pet deposit</strong> required at check-in</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Guest Responsibilities
            </h2>
            <p className="mb-4">
              Dogs must be supervised at all times and may not be left unattended in the guest room unless secured in a crate. Guests are responsible for any damage, excessive cleaning, or disturbances caused by their pets.
            </p>
            <p>
              For the comfort of all guests, pets are not permitted in designated restricted areas of the hotel.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Questions?
            </h2>
            <p>
              If you have any questions about our pet policy, please contact us before your arrival:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Hotel Lotus KCMO</strong></p>
              <p>3830 Blue Ridge Cutoff<br />Kansas City, MO 64133</p>
              <p>Phone: (816) 921-6000<br />Email: Hotellotusstadium@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
