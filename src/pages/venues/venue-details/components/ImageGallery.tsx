
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  venueName: string;
}

export default function ImageGallery({ images, venueName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-64 overflow-hidden">
      {/* Main Image */}
      <div className="relative h-full">
        <img 
          src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28images%5BcurrentIndex%5D%29%7D&width=375&height=256&seq=${venueName}-${currentIndex}&orientation=landscape`}
          alt={`${venueName} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all"
            >
              <i className="ri-arrow-left-s-line text-lg text-gray-900"></i>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all"
            >
              <i className="ri-arrow-right-s-line text-lg text-gray-900"></i>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
          <span className="text-white text-xs font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
