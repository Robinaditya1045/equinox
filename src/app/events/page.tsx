import EventsHomePage from "@/components/Events/EventsHomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Equinox | Events',
};

export default function Page() {
  return (
    <div>
      <EventsHomePage />
    </div>
  );
}
