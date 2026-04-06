/*
 * Hotel Lotus KCMO — Rooms Section
 * Design: Light cream background, room cards with hover effects
 * Colors: Cream background, dark text, gold accents
 */

import { useState } from "react";
import { Users, Bed, ChevronRight } from "lucide-react";
import RoomGallery from "./RoomGallery";

const BOOKING_URL = "https://booking.hotelkeyapp.com/#/booking/search?pc=0689&property_id=8e221710-3e95-455c-9e0e-9c50a862f01b&url=http%3A%2F%2Fwww.lotuskcmo.com%2F";

const rooms = [
  {
    name: "ADA Rolling Shower King",
    code: "HRK",
    description: "If you are looking for an accessible room in Kansas City, have a look at this king bed room at Hotel Lotus. This bathroom features a roll-in shower, complimentary toiletries, and a hairdryer.",
    maxPeople: 2,
    beds: "1 King Bed",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/KGFINALcopy_4d52ae7e.png",
    features: ["Roll-in Shower", "Accessible", "King Bed", "Free WiFi"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/KGFINALcopy_4d52ae7e.png", label: "Room Overview" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/KG2copy_03077e31.png", label: "Bedroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroom(1)_22c764e4.png", label: "Accessible Shower" },
    ],
  },
  {
    name: "Standard Queen",
    code: "1Q",
    description: "Ideal for solo travellers and couples, our hotel rooms with a single queen bed have everything you need for a successful Kansas City trip. Relax on the comfy queen bed and enjoy free WiFi.",
    maxPeople: 2,
    beds: "1 Queen Bed",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/bedroom1q_eaacf6d9.png",
    features: ["Queen Bed", "Free WiFi", "Flat-screen TV", "Microwave"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/bedroom1q_eaacf6d9.png", label: "Room Overview" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/abthroom2_ff0bcd2b.png", label: "Bathroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/bathroom1q_4bedea3b.png", label: "Vanity & Shower" },
    ],
  },
  {
    name: "Standard King",
    code: "KG",
    description: "Simple, clean, and comfortable, these king bed accommodations are perfect for your next visit to our bustling city! From a microwave and coffee maker to free WiFi, plush bedding, and cable TV.",
    maxPeople: 2,
    beds: "1 King Bed",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/KGFINAL_46bfef49.png",
    features: ["King Bed", "Free WiFi", "Work Desk", "Coffee Maker"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/KGFINAL_46bfef49.png", label: "Room Overview" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/KG2_e4a6010c.png", label: "Bedroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Vanity_48fc7f26.png", label: "Vanity & Bathroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroom_ea156087.png", label: "Shower & Toilet" },
    ],
  },
  {
    name: "Queen Suite",
    code: "SQ1",
    description: "Stay within walking distance to local attractions, restaurants, and shopping! This suite features a spacious bedroom with one queen bed as well as a comfortable living room for additional space.",
    maxPeople: 4,
    beds: "1 Queen Bed + Living Room",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/room2_5b077539.png",
    features: ["Queen Bed", "Living Room", "Free WiFi", "Free Breakfast"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/room2_5b077539.png", label: "Bedroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/livingroom2_b3112a8e.png", label: "Living Room" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Vanitycopy(1)_57e3129f.png", label: "Vanity & Bathroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroomcopy2_315ad1bb.png", label: "Shower & Toilet" },
    ],
  },
  {
    name: "Two Queen Beds",
    code: "QQ",
    description: "With plenty of room for everyone to spread out, this suite is just what you need for your family vacation to Kansas City! The bedroom features two plush queen beds.",
    maxPeople: 4,
    beds: "2 Queen Beds",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/16F781AD-8C65-46E0-8FF5-2F24272CDC05_8e90e2fd.png",
    features: ["2 Queen Beds", "Family Friendly", "Free WiFi", "Spacious"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/16F781AD-8C65-46E0-8FF5-2F24272CDC05_8e90e2fd.png", label: "Room Overview" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/qq_1cc98eec.png", label: "Bedroom with Two Queen Beds" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Vanitycopy3_d4dfb5d3.png", label: "Vanity & Bathroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroomqq_44703508.png", label: "Shower & Toilet" },
    ],
  },
  {
    name: "Suite Double Queen",
    code: "SQQ1",
    description: "Perfect for families and groups, this spacious suite features two queen beds in the bedroom plus a comfortable living area. Enjoy extra space with all the amenities you need for a memorable stay.",
    maxPeople: 4,
    beds: "2 Queen Beds + Living Room",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/F832564D-37F5-4128-9900-2AAC9D004BBE_b33211a5.png",
    features: ["2 Queen Beds", "Living Room", "Free WiFi", "Spacious"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/F832564D-37F5-4128-9900-2AAC9D004BBE_b33211a5.png", label: "Bedroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/LivingRoomFinal_5a9c0556.png", label: "Living Room" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Vanitycopy_7214667a.png", label: "Vanity & Bathroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroomcopy_a17edc9f.png", label: "Shower & Toilet" },
    ],
  },
  {
    name: "ADA Suite Double Queen",
    code: "SHQQ1",
    description: "An accessible suite featuring two queen beds and a roll-in shower, designed with ADA compliance in mind. Perfect for guests requiring accessible accommodations with extra space and amenities.",
    maxPeople: 4,
    beds: "2 Queen Beds + Living Room",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/ADABedroom2QSuite_44a89d78.png",
    features: ["2 Queen Beds", "Roll-in Shower", "Accessible", "Living Room"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/ADABedroom2QSuite_44a89d78.png", label: "Bedroom with Two Queen Beds" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/LivingRoomFinalcopy_dfa21000.png", label: "Living Room" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroom1_83ea0d14.png", label: "Accessible Shower" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroom2_03165486.png", label: "Vanity & Bathroom" },
    ],
  },
  {
    name: "Suite King",
    code: "SK1",
    description: "Enjoy the luxury of a spacious suite with a king bed and separate living area. Perfect for business travelers or those seeking extra comfort and space during their Kansas City stay.",
    maxPeople: 2,
    beds: "1 King Bed + Living Room",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bedroom2_c3a0fedb.png",
    features: ["King Bed", "Living Room", "Work Desk", "Free WiFi"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bedroom2_c3a0fedb.png", label: "Bedroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/LivingRoom_68240b24.png", label: "Living Room" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Vanitycopy2_6a8fa51f.png", label: "Vanity & Bathroom" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroomcopy3_647a8035.png", label: "Shower & Toilet" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bedroom_d2171101.png", label: "Bedroom with Living Area" },
    ],
  },
  {
    name: "ADA Queen",
    code: "HQ",
    description: "An accessible queen room designed for guests requiring ADA-compliant accommodations. Features a roll-in shower, accessible bathroom, and all the comforts of our standard rooms.",
    maxPeople: 2,
    beds: "1 Queen Bed",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/BB630D8D-D9E0-4035-8F92-894D328D2088_8cbf114a.png",
    features: ["Queen Bed", "Roll-in Shower", "Accessible", "Free WiFi"],
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/BB630D8D-D9E0-4035-8F92-894D328D2088_8cbf114a.png", label: "Room Overview" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/C3CD7D1C-B939-4D85-96CC-90F6B21DD664_763a6ece.png", label: "Work Desk" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroom2copy_116b57ef.png", label: "Accessible Shower" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/Bathroom1copy_045cca55.png", label: "Vanity & Bathroom" },
    ],
  },
];

export default function RoomsSection() {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number | null>(null);

  const handleOpenGallery = (index: number) => {
    if (rooms[index].gallery) {
      setSelectedRoomIndex(index);
      setGalleryOpen(true);
    }
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
    setSelectedRoomIndex(null);
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[oklch(0.97_0.005_85)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Accommodations
          </p>
          <h2
            className="text-[oklch(0.12_0_0)] text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Our Rooms
          </h2>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-[oklch(0.45_0.01_65)] text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Each room is thoughtfully designed to provide comfort and convenience for every type of traveler.
          </p>
        </div>
        
        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white group cursor-pointer"
              onMouseEnter={() => setHoveredRoom(index)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              {/* Room Image */}
              <div className="aspect-[4/3] overflow-hidden relative cursor-pointer" onClick={() => handleOpenGallery(index)} role="button" tabIndex={0} aria-label={`View gallery for ${room.name}`} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpenGallery(index); }}>
                <img
                  src={room.image}
                  alt={`${room.name} - Hotel Lotus Kansas City`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {/* Gold badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase"
                  style={{
                    backgroundColor: "oklch(0.73 0.12 85)",
                    color: "oklch(0.08 0 0)",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {room.code}
                </div>
                {/* Gallery indicator with arrows */}
                {room.gallery && (
                  <>
                    {/* Left arrow */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      <div className="bg-white/90 hover:bg-white text-black p-2 rounded-full transition-colors">
                        <ChevronRight className="w-6 h-6 rotate-180" />
                      </div>
                    </div>
                    {/* Right arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      <div className="bg-white/90 hover:bg-white text-black p-2 rounded-full transition-colors">
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                    {/* Gallery indicator text */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" role="status" aria-label="Gallery available for this room">
                      View Gallery
                    </div>
                  </>
                )}
              </div>
              
              {/* Room Info */}
              <div className="p-6">
                <h3
                  className="text-[oklch(0.12_0_0)] text-xl font-semibold mb-2 group-hover:text-[oklch(0.73_0.12_85)] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  id={`room-${room.code}`}
                >
                  {room.name}
                </h3>
                
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-[oklch(0.50_0.01_65)] text-xs">
                    <Bed className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "'Lato', sans-serif" }}>{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[oklch(0.50_0.01_65)] text-xs">
                    <Users className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Up to {room.maxPeople} guests</span>
                  </div>
                </div>
                
                <p
                  className="text-[oklch(0.45_0.01_65)] text-sm leading-relaxed mb-5 line-clamp-3"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {room.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 border border-[oklch(0.88_0.005_85)] text-[oklch(0.50_0.01_65)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Book Link */}
                <a
                  href={BOOKING_URL}
                  className="flex items-center gap-2 text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase font-bold group-hover:gap-3 transition-all focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)]"
                  style={{ fontFamily: "'Lato', sans-serif", textDecoration: "none" }}
                  aria-label={`Book ${room.name} room`}
                >
                  Book This Room
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={BOOKING_URL}
            className="inline-block"
            style={{
              backgroundColor: "oklch(0.08 0 0)",
              color: "oklch(0.73 0.12 85)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "1rem 3rem",
              textDecoration: "none",
              border: "1px solid oklch(0.08 0 0)",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
          >
            View All Rooms & Book
          </a>
        </div>

        {/* Room Gallery Modal */}
        {selectedRoomIndex !== null && rooms[selectedRoomIndex].gallery && (
          <RoomGallery
            roomName={rooms[selectedRoomIndex].name}
            images={rooms[selectedRoomIndex].gallery}
            isOpen={galleryOpen}
            onClose={handleCloseGallery}
          />
        )}
      </div>
    </section>
  );
}
