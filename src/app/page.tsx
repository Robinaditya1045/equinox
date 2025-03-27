// import Image from "next/image";
'use client'
import { ParallaxProvider } from "react-scroll-parallax";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div>
      <ParallaxProvider>

      <HomePage />
      </ParallaxProvider>
    </div>
  );
}
