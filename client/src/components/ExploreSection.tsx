/*
 * Hotel Lotus KCMO — Explore the Area Section
 * Design: Light background, attraction cards with icons
 * Colors: Cream background, dark text, gold accents
 */

import { MapPin, Utensils, ShoppingBag, Music, Trophy, Landmark } from "lucide-react";

const BOOKING_URL = "https://booking.hotelkeyapp.com/#/booking/search?pc=0689&property_id=8e221710-3e95-455c-9e0e-9c50a862f01b&url=http%3A%2F%2Fwww.lotuskcmo.com%2F";

const attractions = [
  {
    icon: <Trophy className="w-6 h-6" />,
    category: "Sports",
    name: "Arrowhead & Kauffman Stadiums",
    distance: "2.5 miles",
    description: "Home of the Kansas City Chiefs and Royals, just minutes from the hotel.",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    category: "Landmark",
    name: "Union Station",
    distance: "4 miles",
    description: "Historic landmark featuring museums, restaurants, and entertainment.",
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    category: "Dining",
    name: "KC BBQ & Restaurants",
    distance: "Nearby",
    description: "World-famous Kansas City BBQ and diverse dining options throughout the city.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    category: "Shopping",
    name: "Country Club Plaza",
    distance: "5 miles",
    description: "Upscale outdoor shopping district with boutiques and restaurants.",
  },
  {
    icon: <Music className="w-6 h-6" />,
    category: "Entertainment",
    name: "Power & Light District",
    distance: "4 miles",
    description: "Kansas City's premier entertainment and nightlife destination.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    category: "Culture",
    name: "Nelson-Atkins Museum",
    distance: "5 miles",
    description: "One of America's finest art museums with a renowned collection.",
  },
];

export default function ExploreSection() {
  return (
    <section id="explore" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Discover
          </p>
          <h2
            className="text-[oklch(0.12_0_0)] text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore The Area
          </h2>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-[oklch(0.45_0.01_65)] text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Hotel Lotus is ideally located near Kansas City's top attractions, restaurants, and entertainment venues.
          </p>
        </div>
        
        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="border border-[oklch(0.88_0.005_85)] p-6 group hover:border-[oklch(0.73_0.12_85)] transition-colors duration-300"
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center text-[oklch(0.73_0.12_85)] border border-[oklch(0.73_0.12_85)]/30 group-hover:bg-[oklch(0.73_0.12_85)] group-hover:text-[oklch(0.08_0_0)] transition-all duration-300"
                >
                  {attraction.icon}
                </div>
                <div>
                  <p
                    className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                  >
                    {attraction.category}
                  </p>
                  <p
                    className="text-[oklch(0.50_0.01_65)] text-xs"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {attraction.distance}
                  </p>
                </div>
              </div>
              
              <h3
                className="text-[oklch(0.12_0_0)] text-lg font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {attraction.name}
              </h3>
              
              <p
                className="text-[oklch(0.50_0.01_65)] text-sm leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                {attraction.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Map CTA */}
        <div className="bg-[oklch(0.08_0_0)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-white text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              3830 Blue Ridge Cutoff
            </h3>
            <p
              className="text-white/60 text-sm"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Kansas City, MO 64133 · (816) 921-6000
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://maps.google.com/?q=3830+Blue+Ridge+Cutoff+Kansas+City+MO+64133"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "transparent",
                color: "oklch(0.73 0.12 85)",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                textDecoration: "none",
                border: "1px solid oklch(0.73 0.12 85)",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
            >
              Get Directions
            </a>
            <a
              href={BOOKING_URL}
              style={{
                backgroundColor: "oklch(0.73 0.12 85)",
                color: "oklch(0.08 0 0)",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
