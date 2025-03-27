import React from "react";
// import GalleryGrid from "@/components/Gallery/GalleryGrid";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import { ImageType } from "@/types/index";

const imageData: ImageType[] = [
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },
  { src: "/images/dune.png", alt: "Image 1" },

  // Add more images as needed
];

// Add id to each image to match the required Image interface
const images = imageData.map((img, index) => ({
  ...img,
  id: index + 1,
}));

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
