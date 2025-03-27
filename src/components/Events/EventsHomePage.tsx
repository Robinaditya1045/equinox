"use client";

import EventsDetails from "./EventsDetails";
import React, { useState } from "react";
import { useRef } from "react";

interface Event {
  name: string;
  bg: string;
}

const events: Event[] = [
  { name: "ML", bg: "bg-[url('/events/ml.png')]" },
  { name: "Foss", bg: "bg-[url('/events/foss.png')]" },
  { name: "CP", bg: "bg-[url('/events/cp.png')]" },
  { name: "Infosec", bg: "bg-[url('/events/infosec.png')]" },
  { name: "Web", bg: "bg-[url('/events/web.png')]" },
  { name: "App", bg: "bg-[url('/events/app.png')]" },
  { name: "Web3", bg: "bg-[url('/events/web3.png')]" },
  { name: "Design", bg: "bg-[url('/events/design.png')]" },
];

export default function EventsHomePage() {
  const [selectedWing, setSelectedWing] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const eventDetailsRef = useRef<HTMLDivElement>(null);
  const handleEventClick = (name: Event["name"],img:Event["bg"] ): void => {
    setSelectedWing(name);
    setBackgroundImage(img);


    setTimeout(() => {
      eventDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
  return (
    <div className="min-h-screen bg-[#120303] flex flex-col items-center justify-center px-4 py-12 font-atelier">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBF0] to-[#EAE3BA] mb-12 mt-6">
        Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 gap-6 md:gap-4 w-full max-w-6xl px-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`h-24 md:h-96 lg:h-96 w-full ${event.bg} bg-cover bg-center flex items-center justify-center shadow-lg hover:opacity-60 cursor-pointer hover:ease-in-out`}
            onClick={() => handleEventClick(event.name, event.bg)}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#eb9865] px-4 py-2 rounded-md md:rotate-270">
              {event.name}
            </span>
          </div>
        ))}
      </div>
      {selectedWing && (
        <div
          ref={eventDetailsRef}
          className="w-full min-h-screen max-w-6xl mt-12 p-8"
        >
          <EventsDetails eventName={selectedWing} bg_img={backgroundImage || "" } />
        </div>
      )}
    </div>
  );
}
