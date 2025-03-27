"use client";

import React from "react";

interface Poc {
  name: string;
  phone: string;
}

interface EventItem {
  name: string;
  start_time: string;
  start_date: string;
  description: string;
  mode: string;
  duration: string;
  rules: string[];
  poc: Poc[];
}

interface SingleEventProps {
  event: EventItem;
  onBack: () => void; // callback to go back to list (if desired)
}

const SingleEvent: React.FC<SingleEventProps> = ({ event, onBack }) => {
  return (
    <div className="min-h-screen bg-[#120303] text-white font-atelier px-4 py-8 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <div className="border border-[#c9c2b6] p-4 sm:p-6 shadow-md flex flex-col space-y-4 bg-[#120303]">
        {/* Title / Date / Time */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-2 text-[#EAE3BA]">
            {event.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#977864]">
            {event.start_time} • {event.start_date}
          </p>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm sm:text-base text-[#D9D9D9]">
            {event.description}
          </p>
        </div>

        {/* Rules */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-1 text-[#977864]">
            Rules
          </h2>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#D9D9D9]">
            {event.rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* POC */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-1 text-[#977864]">
            POC
          </h2>
          {event.poc.map((p, idx) => (
            <p key={idx} className="text-xs sm:text-sm text-[#D9D9D9]">
              {p.name} - {p.phone}
            </p>
          ))}
        </div>

        {/* Registration / QR */}
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-sm sm:text-base text-[#977864] font-semibold">
              Register Here
            </p>
            <p className="text-sm sm:text-base text-[#977864]">Or Scan QR</p>
          </div>
          {/* <div className="mr-20">QRRR</div> */}
        </div>

        {/* Back button */}
        <div className="pt-4">
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-4 py-2 bg-[#B98D64] text-black font-semibold hover:bg-[#c79f74] transition cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
