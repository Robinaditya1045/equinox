import React from 'react';
import Image from 'next/image';

interface SpeakerCardProps {
  name: string;
  desc: string;
  image: string;
  right?: boolean;
  left?: boolean;
}

export const SpeakerCard = ({ name, desc, image, right, left }: SpeakerCardProps) => {
  const content = (
    <div className="flex-1 md:max-w-[500px] relative">
      <h1 className="text-4xl mb-3 font-young-serif text-[#EAE3BA]">{name}</h1>
      <p className="text-base font-young-serif relative pb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-[#EAE3BA] after:h-[5px] after:w-[60%] max-md:after:left-[20%] max-md:after:right-[20%] max-md:after:w-[60%] max-md:text-center">
        {desc}
      </p>
    </div>
  );

  const preview = (
    <div className="flex-shrink-0">
      <Image 
        className="border-b-0
            border-2 border-transparent
            [border-image-source:linear-gradient(0deg,rgba(234,227,186,0)_0%,#EAE3BA_100%)]
            [border-image-slice:1] object-cover" 
        src={image} 
        width={260} 
        height={260} 
        alt={name} 
      />
    </div>
  );

  return (
    <>
      {right && (
        <div className="flex w-full items-center justify-center gap-6 md:gap-10 py-6 md:py-10 px-4 max-w-5xl max-md:flex-col-reverse">
          {content}
          {preview}
        </div>
      )}
      {left && (
        <div className="flex w-full items-center justify-center gap-6 md:gap-10 py-6 md:py-10 px-4 max-w-5xl max-md:flex-col">
          {preview}
          {content}
        </div>
      )}
    </>
  );
};