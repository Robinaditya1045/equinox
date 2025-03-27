"use client";
import React, { useState } from "react";
// import TeamDetailBtn from "@/components/TeamDetailBtn";
// import People from "./People";
import CorePeople from "./Coreteams";

// Dummy data for different teams
const teamPeopleData = {
  "Corporate Relations": [
    { id: 1, name: "John Smith", image: "/images/DummyImage.jpg" },
    { id: 2, name: "Emily Chen", image: "/images/DummyImage.jpg" },
    { id: 3, name: "Michael Rodriguez", image: "/images/DummyImage.jpg" },
  ],
  "Public Relations": [
    { id: 4, name: "Sarah Johnson", image: "/images/DummyImage.jpg" },
    { id: 5, name: "David Kim", image: "/images/DummyImage.jpg" },
    { id: 6, name: "Olivia Martinez", image: "/images/DummyImage.jpg" },
  ],
  Design: [
    { id: 7, name: "Alex Wong", image: "/images/DummyImage.jpg" },
    { id: 8, name: "Emma Thompson", image: "/images/DummyImage.jpg" },
    { id: 9, name: "Lucas Garcia", image: "/images/DummyImage.jpg" },
  ],
  Development: [
    { id: 10, name: "Ryan Lee", image: "/images/DummyImage.jpg" },
    { id: 11, name: "Sophie Anderson", image: "/images/DummyImage.jpg" },
    { id: 12, name: "Carlos Ramirez", image: "/images/DummyImage.jpg" },
  ],
  HOF: [
    { id: 13, name: "Elena Petrova", image: "/images/DummyImage.jpg" },
    { id: 14, name: "Marcus Williams", image: "/images/DummyImage.jpg" },
    { id: 15, name: "Isabella Rossi", image: "/images/DummyImage.jpg" },
  ],
  Technical: [
    { id: 16, name: "Aiden Park", image: "/images/DummyImage.jpg" },
    { id: 17, name: "Natalie Brown", image: "/images/DummyImage.jpg" },
    { id: 18, name: "Felix Schmidt", image: "/images/DummyImage.jpg" },
  ],
  Content: [
    { id: 19, name: "Zoe Taylor", image: "/images/DummyImage.jpg" },
    { id: 20, name: "Jack Harper", image: "/images/DummyImage.jpg" },
    { id: 21, name: "Maya Patel", image: "/images/DummyImage.jpg" },
  ],
};

const TeamDetails = () => {
  const [activeTeam, setActiveTeam] = useState<keyof typeof teamPeopleData>("Corporate Relations");

  const teams = [
    "Corporate Relations",
    "Public Relations",
    "Design",
    "Development",
    "HOF",
    "Technical",
    "Content",
  ];

  return (
    <>
      <h1
        className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                mb-8 sm:mb-12 font-atelier
                bg-gradient-to-r from-[#FFFBF0] via-[#EAE3BA] to-[rgba(234,227,186,0.3)]
                bg-clip-text text-transparent
                drop-shadow-lg select-none mt-20"
      >
        Core Teams
      </h1>
      <div className="flex flex-wrap justify-center gap-4 p-6">
        {teams.map((team: string) =>  (
          <button
            key={team}
            onClick={() => setActiveTeam(team as keyof typeof teamPeopleData)} 
            className={`
            px-6 py-3 
            text-lg 
            z-10
            font-medium 
            font-atelier
            tracking-wider 
            uppercase 
            transition-all 
            duration-300 
            ease-in-out 
            border-b-0
            border-2 border-transparent
            [border-image-source:linear-gradient(0deg,rgba(234,227,186,0)_0%,#EAE3BA_100%)]
            [border-image-slice:1]
            ${
              activeTeam === team
                ? "bg-yellow-100 text-black border-2 border-black"
                : "bg-black text-yellow-100 border-2 border-yellow-100 hover:bg-yellow-100 hover:text-black"
            }
          `}
          >
            {team}
          </button>
        ))}
      </div>
      <CorePeople people={teamPeopleData[activeTeam]} title="Team Leads"/>
      <CorePeople people={teamPeopleData[activeTeam]} title="Members"/>

    </>
  );
};

export default TeamDetails;
