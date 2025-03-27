"use client"
import React, { useState } from 'react';

const TeamDetailBtn = () => {
  const [activeTeam, setActiveTeam] = useState<string | null>(null);

  const teams = [
    'Corporate Relations',
    'Public Relations',
    'Design',
    'Development',
    'HOF',
    'Technical',
    'Content'
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {teams.map((team) => (
        <button
          key={team}
          onClick={() => setActiveTeam(team)}
          className={`
            px-6 py-3 
            text-lg 
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
            ${activeTeam === team 
              ? 'bg-yellow-100 text-black border-2 border-black' 
              : 'bg-black text-yellow-100 border-2 border-yellow-100 hover:bg-yellow-100 hover:text-black'}
          `}
        >
          {team}
        </button>
      ))}
    </div>
  );
};

export default TeamDetailBtn;