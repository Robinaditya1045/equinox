"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Poc {
  name: string;
  phone: string;
}

interface EventItem {
  name: string;
  start_time: string; // e.g., "9:00 AM"
  start_date: string; // e.g., "27-28 March" or "27 March"
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

/**
 * Parses the event start_time and start_date into Date objects.
 * Expects start_time as "9:00 AM" and start_date as "27-28 March" or "27 March".
 */
const parseEventDateTime = (
  start_date: string,
  start_time: string
): { start: Date; end: Date } => {
  // Parse time, e.g. "9:00 AM"
  const [timeStr, meridiem] = start_time.split(" ");
  const [hourStr, minuteStr] = timeStr.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  if (meridiem.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  } else if (meridiem.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }

  // Parse date.
  // Expected formats: "27-28 March" or "27 March"
  const parts = start_date.split(" ");
  const dayPart = parts[0]; // "27-28" or "27"
  const monthName = parts.slice(1).join(" "); // e.g., "March"
  const monthMap: { [key: string]: number } = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  const month = monthMap[monthName];
  const currentYear = new Date().getFullYear();

  if (dayPart.includes("-")) {
    // Date range provided
    const [startDayStr, endDayStr] = dayPart.split("-");
    const startDay = parseInt(startDayStr, 10);
    const endDay = parseInt(endDayStr, 10);
    const startDate = new Date(currentYear, month, startDay, hour, minute, 0);
    // Consider live until the end of the last day (23:59:59)
    const endDate = new Date(currentYear, month, endDay, 23, 59, 59);
    return { start: startDate, end: endDate };
  } else {
    // Single date provided
    const day = parseInt(dayPart, 10);
    const startDate = new Date(currentYear, month, day, hour, minute, 0);
    return { start: startDate, end: startDate };
  }
};

const SingleEvent: React.FC<SingleEventProps> = ({ event, onBack }) => {
  // Determine if event is live
  const { start, end } = parseEventDateTime(event.start_date, event.start_time);
  const now = new Date();
  const isLive = now >= start && now <= end;
  const lampSrc = isLive ? "/events/lamp-glow.png" : "/events/lamp-red.png";

  return (
    <div className="min-h-screen bg-[#120303] text-white font-atelier py-1 sm:px-6 md:px-1 max-w-6xl mx-auto flex flex-col justify-center">
      <div className="border border-[#c9c2b6] p-2 sm:p-6 shadow-md flex flex-col space-y-4 bg-[#120303]">
        {/* Title / Date / Time */}
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-2 text-[#EAE3BA]">
              {event.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#977864]">
              {event.start_time} • {event.start_date}
            </p>
          </div>
          <div className="mr-4">
            <Image src={lampSrc} alt="Lamp Status" width={20} height={20} />
          </div>
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
            <p className="text-sm sm:text-base text-[#977864] font-semibold hover:uner">
              <Link href="https://example.com/register" target="_blank">
                Register Here
              </Link>
            </p>
            <p className="text-sm sm:text-base text-[#977864]">Or Scan QR</p>
          </div>
          <Image src="/events/qr.png" alt="QR Code" width={100} height={100} />
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
