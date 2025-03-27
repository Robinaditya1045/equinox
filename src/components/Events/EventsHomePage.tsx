"use client";

const events = [
  { name: "ML", bg: "bg-[url('/images/hero_bg.jpg')]" },
  { name: "Foss", bg: "bg-[url('/images/hero_bg.jpg')]" },
  { name: "CP", bg: "bg-[url('/images/hero_bg.jpg')]" },
  { name: "Infosec", bg: "bg-[url('/images/hero_bg.jpg')]" },
  { name: "Web", bg: "bg-[url('/images/hero_bg.jpg')]" },
  { name: "App", bg: "bg-[url('/images/hero_bg.jpg')]" },
  { name: "Web3", bg: "bg-[url('/images/hero_bg.jpg')]" },
  { name: "Design", bg: "bg-[url('/images/hero_bg.jpg')]" },
];

export default function EventsHomePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 font-atelier">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBF0] to-[#EAE3BA00] mb-12 mt-6">
        Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 gap-4 w-full max-w-6xl">
        {events.map((event, index) => (
          <div
            key={index}
            className={`h-24 md:h-96 lg:h-96 w-full ${event.bg} bg-cover bg-center flex items-center justify-center shadow-lg hover:opacity-80 cursor-pointer hover:ease-in-out`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#EACCBA] px-4 py-2 rounded-md md:rotate-270">
              {event.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
