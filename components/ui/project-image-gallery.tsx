"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectImageGallery({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full h-48 overflow-hidden shrink-0 relative border-b border-border/50 group/gallery">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - image ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/60 text-foreground/80 hover:bg-background/90 opacity-0 group-hover/gallery:opacity-100 transition-opacity backdrop-blur-sm z-10 border border-border/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/60 text-foreground/80 hover:bg-background/90 opacity-0 group-hover/gallery:opacity-100 transition-opacity backdrop-blur-sm z-10 border border-border/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-4 bg-indigo-500" : "w-1.5 bg-background/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
