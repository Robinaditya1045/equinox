import React from "react";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import images from "@/data/gallery.json"

const Gallery = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#120303] flex flex-col items-center max-sm:pt-20 pt-32 relative">
        <h1
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                mb-8 sm:mb-12 font-atelier
                bg-gradient-to-r from-[#FFFBF0] via-[#EAE3BA] to-[rgba(234,227,186,0.3)]
                bg-clip-text text-transparent
                drop-shadow-lg select-none"
        >
          Gallery
        </h1>
        <div className="w-full max-w-6xl flex flex-col items-center">
          <GalleryGrid images={images} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
