/*
 * Hotel Lotus KCMO — Amenities Section
 * Design: Dark background with gold accents, icon grid
 * Colors: Hotel black background, gold icons and text
 */

const amenities = [
  {
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/hotel_173d9d5c.png",
    title: "24-Hour Front Desk",
    description: "Our teams are available around the clock to serve your every need.",
  },
  {
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/breakfast_icon-CjA3G635AHKf5bWp9LQt6i.webp",
    title: "Complimentary Breakfast",
    description: "Enjoy our delicious free Grab and Go breakfast each morning.",
  },
  {
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/wifi_b5b761e0.png",
    title: "High Speed WiFi",
    description: "Stay connected with complimentary high-speed WiFi throughout the property.",
  },
  {
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/parking_icon-CtZzGmXvvZ6CoY8DjLr5jL.webp",
    title: "Free Parking",
    description: "Complimentary on-site parking available for all hotel guests.",
  },
  {
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/fitness_icon-CTGCSDBDkwcB5hn4GhE9AK.webp",
    title: "Fitness Center",
    description: "Stay active with our fully equipped fitness center and seasonal outdoor pool.",
  },
  {
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/nosmoking_9477308d.png",
    title: "Non-Smoking Facility",
    description: "All rooms and common areas are smoke-free for your comfort.",
  },
  {
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/coffee_b1c424e0.png",
    title: "Fresh Coffee & Juice",
    description: "Start your day right with fresh coffee or juice available each morning.",
  },
  {
    icon: null,
    title: "Pet Friendly",
    description: "We welcome your canine companions on vacation (fees apply).",
    emoji: "🐾",
  },
];

// Lotus SVG divider
const LotusDivider = () => (
  <div className="flex items-center justify-center gap-4 my-8">
    <div className="flex-1 h-px bg-[oklch(0.73_0.12_85)]/30" />
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6 C20 6, 12 13, 12 20 C12 24.4, 15.6 28, 20 28 C24.4 28, 28 24.4, 28 20 C28 13, 20 6, 20 6Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.5" fill="none"/>
      <path d="M6 20 C6 20, 13 12, 20 12 C24.4 12, 28 15.6, 28 20 C28 24.4, 24.4 28, 20 28 C13 28, 6 20, 6 20Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.5" fill="none"/>
      <path d="M20 34 C20 34, 28 27, 28 20 C28 15.6, 24.4 12, 20 12 C15.6 12, 12 15.6, 12 20 C12 27, 20 34, 20 34Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.5" fill="none"/>
      <path d="M34 20 C34 20, 27 28, 20 28 C15.6 28, 12 24.4, 12 20 C12 15.6, 15.6 12, 20 12 C27 12, 34 20, 34 20Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.5" fill="none"/>
      <circle cx="20" cy="20" r="2.5" fill="oklch(0.73 0.12 85)"/>
    </svg>
    <div className="flex-1 h-px bg-[oklch(0.73_0.12_85)]/30" />
  </div>
);

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[oklch(0.08_0_0)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            What We Offer
          </p>
          <h2
            className="text-white text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hotel Amenities
          </h2>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            We got you covered with everything you need for a comfortable and memorable stay in Kansas City.
          </p>
        </div>
        
        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center border border-[oklch(0.73_0.12_85)]/30 group-hover:border-[oklch(0.73_0.12_85)] transition-colors duration-300 bg-[oklch(0.12_0_0)]">
                {amenity.icon ? (
                  <img
                    src={amenity.icon}
                    alt={amenity.title}
                    className="w-12 h-12 object-contain opacity-100 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                  />
                ) : (
                  <span className="text-3xl">{amenity.emoji}</span>
                )}
              </div>
              
              {/* Title */}
              <h3
                className="text-white text-base font-semibold mb-3 group-hover:text-[oklch(0.73_0.12_85)] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {amenity.title}
              </h3>
              
              {/* Description */}
              <p
                className="text-white/50 text-sm leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
        
        <LotusDivider />
        
        {/* Pool highlight banner */}
        <div className="mt-4 border border-[oklch(0.73_0.12_85)]/30 p-8 text-center">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Featured
          </p>
          <h3
            className="text-white text-2xl font-semibold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pool to Relax & Fitness Center
          </h3>
          <p
            className="text-white/60 text-sm max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Enjoy a refreshing dip in our seasonal outdoor pool or get an energizing workout in our fitness room — the perfect way to unwind after a day in Kansas City.
          </p>
        </div>
      </div>
    </section>
  );
}
