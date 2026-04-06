/*
 * Hotel Lotus KCMO — Home Page
 * Design: Noir Luxury — full-page hotel website
 * Sections: Hero → Welcome → Amenities → Rooms → Gallery → Explore → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import RoomsSection from "@/components/RoomsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ExploreSection from "@/components/ExploreSection";
import LaundryFacility from "@/components/LaundryFacility";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <AmenitiesSection />
      <RoomsSection />
      <GallerySection />
      <TestimonialsCarousel />
      <LaundryFacility />
      <ExploreSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
