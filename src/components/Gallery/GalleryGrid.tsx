import React from 'react';
import GalleryImage from './GalleryImage';

interface Image {
    id: number;
    src: string;
    alt: string;
}

interface GalleryGridProps {
    images: Image[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map(image => (
                <GalleryImage key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
};

export default GalleryGrid;