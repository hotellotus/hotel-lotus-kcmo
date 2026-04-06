/*
 * Hotel Lotus KCMO — Testimonials Carousel Section
 * Design: Dark background with gold accents, rotating testimonials
 * Colors: Hotel black background, gold accents, white text
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { data: testimonials = [] } = trpc.testimonials.list.useQuery();

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  if (testimonials.length === 0) {
    return null; // Don't show carousel if no testimonials
  }

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] font-serif text-lg mb-2">GUEST REVIEWS</p>
          <h2 className="text-5xl font-serif font-bold mb-4">What Our Guests Say</h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-12 min-h-80 flex flex-col justify-between"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          role="region"
          aria-label="Guest testimonials carousel"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Testimonial Content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Star Rating */}
            <div className="flex gap-1 mb-6" aria-label={`${current.rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < current.rating ? "fill-[#C9A84C] text-[#C9A84C]" : "text-gray-600"}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-xl italic mb-8 text-gray-100" role="blockquote">"{current.text}"</blockquote>

            {/* Guest Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#C9A84C] text-black flex items-center justify-center font-bold text-lg">
                {current.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{current.name}</p>
                <p className="text-[#C9A84C] text-sm">{current.title}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#C9A84C]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#C9A84C]" aria-hidden="true" />
            </button>

            {/* Slide Counter */}
            <span className="text-sm text-gray-400">
              {currentIndex + 1} / {testimonials.length}
            </span>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#C9A84C]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#C9A84C]" aria-hidden="true" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#C9A84C] ${
                  index === currentIndex ? "bg-[#C9A84C]" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
