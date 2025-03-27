import React from "react";

interface GalleryImageProps {
    src: string;
    alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-lg">
            <img
                src={src}
                alt={alt}
                className="w-full h-auto transition-transform duration-300 transform hover:scale-105 hover:grayscale-0 grayscale"
            />
        </div>
    );
};

export default GalleryImage;