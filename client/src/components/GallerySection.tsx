/*
 * Hotel Lotus KCMO — Photo Gallery Section
 * Design: Dark background, masonry-style grid, hover zoom effects
 * Colors: Hotel black background, gold accents
 */

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/cover_041a2be1.png",
    caption: "Hotel Lotus Exterior",
    span: "col-span-2",
  },

  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/img3_ea19cf06.png",
    caption: "Guest Room",
    span: "col-span-1",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/canvaedut(1)_b34fde66.png",
    caption: "Lounge Area",
    span: "col-span-1",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/img4_12778e0e.png",
    caption: "Hotel Room",
    span: "col-span-1",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/img5_a5efc8ae.png",
    caption: "Hotel Facilities",
    span: "col-span-2",
  },
];

export default function GallerySection() {
  const [lightboxImg, setLightboxImg] = useState<{ url: string; caption: string } | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[oklch(0.12_0_0)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Visual Tour
          </p>
          <h2
            className="text-white text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Photo Gallery
          </h2>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-white/60 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Browse our photo gallery for a glimpse into our comfortable accommodations and more.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden ${
                index === 0 || index === 5 ? "lg:col-span-2" : ""
              }`}
              onClick={() => setLightboxImg(img)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn className="w-8 h-8 text-white" />
                  <span
                    className="text-white text-sm tracking-widest"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {img.caption}
                  </span>
                </div>
              </div>
              
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[oklch(0.73_0.12_85)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[oklch(0.73_0.12_85)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
            onClick={() => setLightboxImg(null)}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" aria-hidden="true" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.url}
              alt={lightboxImg.caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p
              id="lightbox-caption"
              className="text-white/70 text-sm text-center mt-4 tracking-widest uppercase"
              style={{ fontFamily: "'Lato', sans-serif" }}
              role="status"
            >
              {lightboxImg.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
