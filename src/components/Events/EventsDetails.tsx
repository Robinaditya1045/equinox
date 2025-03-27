"use client";

import React, { useEffect, useState } from "react";
import eventsData from "@/data/events.json";
import SingleEvent from "./SingleEvent";

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

interface CategoryData {
  title: string;
  events: EventItem[];
}

interface EventsData {
  [key: string]: CategoryData;
}

interface EventDetailsProps {
  eventName: string; // e.g., "foss", "ml", etc.
  bg_img: string; // Background image class or URL
}

/**
 * Splits a title string into an array of lines with at most 2 words per line.
 * For example, "Free and Open Source Software" becomes:
 * ["Free and", "Open Source", "Software"]
 */
const splitTitle = (title: string): string[] => {
  const words = title.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 2) {
    lines.push(words.slice(i, i + 2).join(" "));
  }
  return lines;
};

const EventDetails: React.FC<EventDetailsProps> = ({ eventName, bg_img }) => {
  // Access the category data by converting eventName to lowercase for consistency
  const categoryData: CategoryData | undefined = (eventsData as EventsData)[
    eventName.toLowerCase()
  ];

  // Track which event (if any) is selected
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    setSelectedEvent(null);
  }, [eventName]);

  if (!categoryData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-red-500">
        <p>No event data found for &quot;{eventName}&quot;.</p>
      </div>
    );
  }

  const { title, events } = categoryData;
  const titleLines = splitTitle(title);

  return (
    <div className="flex flex-col md:flex-row items-stretch text-white bg-[#120303] md:px-6 py-8 mx-auto max-w-6xl font-atelier md:gap-12">
      {/* Left side: vertical title column (always visible) */}
      <div className="w-full md:w-1/4 flex flex-col justify-center items-center md:pr-8">
        <div
          className={`text-6xl md:mt-8 mb-10 ${bg_img} bg-cover bg-center font-extrabold md:rotate-270 text-center bg-clip-text text-transparent`}
        >
          {titleLines.map((line, idx) => (
            <div className="px-4" key={idx}>
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Right side: conditionally show either the list of events OR single event */}
      <div className="w-full md:w-3/4">
        {selectedEvent ? (
          // Single Event View
          <SingleEvent
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
          />
        ) : (
          // List of Events
          <div className="flex flex-col space-y-6">
            {events.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#120303] p-6 border border-[#c9c2b6] shadow-md md:w-[80%] cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
                onClick={() => setSelectedEvent(item)}
              >
                {/* Event name */}
                <h2 className="text-2xl font-semibold mb-2 text-[#EAE3BA]">
                  {item.name}
                </h2>

                {/* Time and date */}
                <p className="text-sm text-[#977864] mb-4">
                  Slot: {item.start_time} | {item.start_date}
                </p>

                {/* Description */}
                <p className="text-base text-[#D9D9D9]">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
