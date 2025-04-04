import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { personalInfo } from "@/lib/constants";

interface CarouselProps {
  className?: string;
}

export const PhotoCarousel = ({ className = "" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = personalInfo.photos;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        nextSlide(); // בגלל ה-RTL, החיצים הפוכים
      } else if (event.key === "ArrowRight") {
        prevSlide(); // בגלל ה-RTL, החיצים הפוכים
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden rounded-lg ${className}`}>
      <div className="relative h-full">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 h-full w-full transform transition-transform duration-500 ease-in-out ${
              index === currentIndex 
                ? "translate-x-0 opacity-100" 
                : index < currentIndex 
                  ? "translate-x-full opacity-0" 
                  : "-translate-x-full opacity-0"
            }`}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="h-full w-full object-cover object-center rounded-lg"
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
                {photo.caption}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button
        type="button"
        onClick={prevSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white bg-opacity-70 hover:bg-opacity-100 transition-all shadow-md"
        aria-label="הקודם"
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </button>
      
      <button
        type="button"
        onClick={nextSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white bg-opacity-70 hover:bg-opacity-100 transition-all shadow-md"
        aria-label="הבא"
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </button>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-1 rtl:space-x-reverse">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-white bg-opacity-50"
            }`}
            aria-label={`עבור לתמונה ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};