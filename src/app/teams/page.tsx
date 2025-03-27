import React from "react";
import Image from "next/image";
import People from "@/components/People";
import TeamDetails from "@/components/TeamDetails";

const coordinators = [
    {
        id: 1,
        name: "Yash Agarwal",
        image: "/images/DummyImage.jpg",
    },
    {
        id: 2,
        name: "Praveen Kumar Jaiswal",
        image: "/images/DummyImage.jpg",
    },
    {
        id: 3,
        name: "Pavana Saketha",
        image: "/images/DummyImage.jpg",
    },
];

const axiosCoordinators = [
    {
        id: 1,
        name: "Shubham Roy",
        image: "/images/DummyImage.jpg",
    },
    {
        id: 2,
        name: "Dhruv Chouhan",
        image: "/images/DummyImage.jpg",
    },
];

const Convenors = [
    {
        id: 1,
        name: "Dheeraj",
        image: "/images/DummyImage.jpg",
    },
    {
        id: 2,
        name: "Samarth",
        image: "/images/DummyImage.jpg",
    },
];

const TeamsPage = () => {
    return (
        <div className="w-full min-h-screen bg-[#120303] flex flex-col items-center max-sm:pt-20 pt-32 relative">
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/compass.png"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    priority
                    className="object-contain w-full h-full"
                />
            </div>
            <People people={coordinators} title="Coordinators"/>
            <People people={axiosCoordinators} title="Axios Coordinators" />
            <People people={Convenors} title="Convenors" />
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/compass.png"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="fit"
                    quality={75}
                    priority
                    className="object-contain w-full h-full"
                />
            </div>
            <TeamDetails/>
        </div>
    );
};

export default TeamsPage;


// <section className="relative z-10 w-full max-w-4xl px-4">
//                 {/* Page Title */}
//                 <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//                     mb-8 sm:mb-12 font-atelier
//                     bg-gradient-to-r from-[#FFFBF0] via-[#EAE3BA] to-[rgba(234,227,186,0.3)]
//                     bg-clip-text text-transparent
//                     drop-shadow-lg select-none">
//                     Coordinators
//                 </h1>
                
//                 {/* Coordinators Flexbox */}
//                 <div className="flex flex-col sm:flex-row flex-wrap 
//                     justify-center items-center 
//                     gap-6 sm:gap-8 lg:gap-10">
//                     {coordinators.map((coordinator) => (
//                         <div
//                             key={coordinator.id}
//                             className="flex flex-col items-center justify-center
//                                 w-full sm:w-20wh md:w-20wh
//                                 max-w-[400px]
//                                 transition-transform duration-300
//                                 hover:scale-105"
//                         >
//                             <div className="w-full aspect-square
//                                 rounded-2xl overflow-hidden
//                                 shadow-xl hover:shadow-2xl
//                                 transition-shadow duration-300 relative">
//                                 <Image
//                                     src={coordinator.image}
//                                     alt={coordinator.name}
//                                     layout="fill"
//                                     objectFit="cover"
//                                     quality={85}
//                                     priority
//                                 />
//                             </div>
//                             <span className="font-atelier
//                                 text-base sm:text-lg md:text-xl
//                                 mt-4 text-[#EAE3BA]
//                                 text-center">
//                                 {coordinator.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </section>