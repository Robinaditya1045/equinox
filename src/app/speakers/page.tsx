import React from "react";
import speakersData from "../data/speakers.json";
import { SpeakerCard } from "@/components/SpeakerCard";

const { speakers } = speakersData;


const SpeakerPage = () => {
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
                Speakers
            </h1>
            <div className="w-full max-w-6xl flex flex-col items-center">
                {speakers.map((speaker, index) => (
                    <SpeakerCard 
                        key={index}
                        name={speaker.name}
                        desc={speaker.description}
                        image={speaker.image}
                        right={index % 2 === 0}
                        left={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default SpeakerPage;