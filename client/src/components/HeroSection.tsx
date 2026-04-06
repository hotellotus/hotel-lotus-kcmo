/*
 * Hotel Lotus KCMO — Hero Section
 * Design: Full-width hero with dark overlay, centered content, booking widget
 * Colors: Dark overlay on hotel exterior photo, gold accents
 * Typography: Playfair Display headings, Lato body
 */

import { useState } from "react";
import { Calendar, Users, ChevronDown } from "lucide-react";

const COVER_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/cover_041a2be1.png";
const BOOKING_URL = "https://booking.hotelkeyapp.com/#/booking/search?pc=0689&property_id=8e221710-3e95-455c-9e0e-9c50a862f01b&url=http%3A%2F%2Fwww.lotuskcmo.com%2F";

// Lotus flower SVG ornament
const LotusOrnament = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="oklch(0.73 0.12 85)" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <path d="M20 8 C20 8, 14 14, 14 20 C14 23.3, 16.7 26, 20 26 C23.3 26, 26 23.3, 26 20 C26 14, 20 8, 20 8Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.2" fill="none" opacity="0.8"/>
    <path d="M8 20 C8 20, 14 14, 20 14 C23.3 14, 26 16.7, 26 20 C26 23.3, 23.3 26, 20 26 C14 26, 8 20, 8 20Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.2" fill="none" opacity="0.8"/>
    <path d="M20 32 C20 32, 26 26, 26 20 C26 16.7, 23.3 14, 20 14 C16.7 14, 14 16.7, 14 20 C14 26, 20 32, 20 32Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.2" fill="none" opacity="0.8"/>
    <path d="M32 20 C32 20, 26 26, 20 26 C16.7 26, 14 23.3, 14 20 C14 16.7, 16.7 14, 20 14 C26 14, 32 20, 32 20Z" stroke="oklch(0.73 0.12 85)" strokeWidth="1.2" fill="none" opacity="0.8"/>
    <circle cx="20" cy="20" r="2" fill="oklch(0.73 0.12 85)" opacity="0.8"/>
  </svg>
);

export default function HeroSection() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("1");

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = () => {
    window.location.href = BOOKING_URL;
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${COVER_URL})` }}
      />
      
      {/* Dark overlay - gradient from dark bottom to slightly less dark top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 pt-24 pb-16">
        {/* Lotus ornament */}
        <div className="mb-6 opacity-90">
          <LotusOrnament />
        </div>
        
        {/* Label */}
        <p
          className="section-label text-[oklch(0.73_0.12_85)] mb-4"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em" }}
        >
          Welcome To
        </p>
        
        {/* Main Heading */}
        <h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hotel Lotus
        </h1>
        
        {/* Subtitle */}
        <p
          className="text-[oklch(0.73_0.12_85)] text-lg md:text-xl mb-2"
          style={{ fontFamily: "'Gilda Display', serif" }}
        >
          Essence In Hospitality
        </p>
        
        {/* Location */}
        <p
          className="text-white/70 text-sm mb-10 tracking-widest uppercase"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Kansas City, Missouri
        </p>
        
        {/* Gold divider */}
        <div className="w-16 h-px bg-[oklch(0.73_0.12_85)] mb-10" />
        
        {/* Tagline */}
        <p
          className="text-white/80 text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Your job is to enjoy yourself and our job is to make sure you do.
        </p>
        
        {/* Booking Widget */}
        <div className="w-full max-w-4xl">
          <div className="bg-black/70 backdrop-blur-sm border border-[oklch(0.73_0.12_85)]/30 p-6 md:p-8">
            {/* Widget Title */}
            <p
              className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-6 text-center"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Check Availability
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Check In */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="check-in"
                  className="text-white/60 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Check In
                </label>
                <div className="relative">
                  <input
                    id="check-in"
                    type="date"
                    value={checkIn}
                    min={today}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent border border-white/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[oklch(0.73_0.12_85)] transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif", colorScheme: "dark" }}
                    aria-label="Check-in date"
                  />
                </div>
              </div>
              
              {/* Check Out */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="check-out"
                  className="text-white/60 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Check Out
                </label>
                <div className="relative">
                  <input
                    id="check-out"
                    type="date"
                    value={checkOut}
                    min={checkIn || today}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent border border-white/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[oklch(0.73_0.12_85)] transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif", colorScheme: "dark" }}
                    aria-label="Check-out date"
                  />
                </div>
              </div>
              
              {/* Guests */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="guests"
                  className="text-white/60 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Guests
                </label>
                <div className="relative">
                  <select
                    id="guests"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full bg-transparent border border-white/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[oklch(0.73_0.12_85)] transition-colors appearance-none"
                    style={{ fontFamily: "'Lato', sans-serif", colorScheme: "dark" }}
                    aria-label="Number of guests"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} style={{ backgroundColor: "#111" }}>
                        {n} {n === 1 ? "Adult" : "Adults"}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                </div>
              </div>
              
              {/* Book Button */}
              <div className="flex flex-col gap-1">
                <label htmlFor="hero-book-btn" className="text-transparent text-xs">.</label>
                <button
                  id="hero-book-btn"
                  onClick={handleBooking}
                  className="w-full py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90 focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)]"
                  style={{
                    backgroundColor: "oklch(0.73 0.12 85)",
                    color: "oklch(0.08 0 0)",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                  }}
                  aria-label="Book now - navigate to booking page"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          onClick={() => document.querySelector("#welcome")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/40 hover:text-[oklch(0.73_0.12_85)] transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
