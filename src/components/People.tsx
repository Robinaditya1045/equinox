import React from "react";
import Image from "next/image";

interface IPeople {
  id: number;
  name: string;
  image: string;
}

interface PeopleProps {
  people: IPeople[];
  title: string;
}

const People: React.FC<PeopleProps> = ({ people, title }) => {
  // Destructure props here
  return (
    <section className="relative z-10 w-full max-w-4xl px-4 mb-16">
      <h1
        className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                mb-8 sm:mb-12 font-atelier
                bg-gradient-to-r from-[#FFFBF0] via-[#EAE3BA] to-[rgba(234,227,186,0.3)]
                bg-clip-text text-transparent
                drop-shadow-lg select-none"
      >
        {title}
      </h1>

      <div
        className="flex flex-col sm:flex-row flex-wrap justify-center items-center 
                gap-6 sm:gap-8 lg:gap-10"
      >
        {people.map((person) => (
          <div
            key={person.id}
            className="flex flex-col items-center justify-center
                            w-full sm:w-20wh sm:w-20wh md:w-20wh max-w-[300px]
                            transition-transform duration-300 hover:scale-105"
          >
            <div
              className="w-full aspect-square rounded-xl overflow-hidden
                            shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Image
                src={person.image}
                alt={person.name}
                layout="fill"
                objectFit="cover"
                quality={85}
                priority
              />
            </div>
            <span
              className="font-atelier text-base sm:text-lg md:text-xl
                            mt-4 text-[#EAE3BA] text-center"
            >
              {person.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;
