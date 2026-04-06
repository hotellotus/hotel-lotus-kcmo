/*
 * Hotel Lotus KCMO — Room Gallery Component
 * Design: Modal gallery showing multiple angles of a room type
 */

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface RoomGalleryProps {
  roomName: string;
  images: Array<{
    url: string;
    label: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomGallery({ roomName, images, isOpen, onClose }: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-[oklch(0.73_0.12_85)] transition-colors"
          aria-label="Close gallery"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Main Image */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].label}
            className="w-full h-auto max-h-[70vh] object-cover"
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[oklch(0.73_0.12_85)] text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[oklch(0.73_0.12_85)] text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Image Label and Thumbnails */}
        <div className="mt-4">
          <p
            className="text-white text-center mb-4 font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {images[currentIndex].label}
          </p>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded border-2 transition-all ${
                    idx === currentIndex
                      ? "border-[oklch(0.73_0.12_85)]"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
