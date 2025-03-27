"use client";
import React, { useState } from "react";
import CorePeople from "./Coreteams";
import teamLeads from "../data/teamleads.json";
import teamMembers from "../data/teammembers.json";

const TeamDetails = () => {
    const [activeTeam, setActiveTeam] = useState<keyof typeof teamLeads>("Corporate Relations");

  const teams = [
    "Corporate Relations",
    "Public Relations",
    "Media",
    "Design",
    "Development",
    "HOF 6.1",
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
            onClick={() => setActiveTeam(team as keyof typeof teamLeads)} 
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
      <CorePeople people={teamLeads[activeTeam]} title="Team Leads"/>
      <CorePeople people={teamMembers[activeTeam]} title="Members"/>

    </>
  );
};

export default TeamDetails;
