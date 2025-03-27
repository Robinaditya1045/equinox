import Image from "next/image";
import React from "react";

interface GalleryImageProps {
    src: string;
    alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
    return (
        <div className="overflow-hidden sm:w-20wh md:w-20wh max-w-[300px] rounded-lg shadow-lg">
            <Image
                src={src}
                alt={alt}
                width={350}
                height={350}
                className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
            />
        </div>
    );
};

export default GalleryImage;