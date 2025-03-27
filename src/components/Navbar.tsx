"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div
        className={
          "w-screen h-screen fixed z-20 pointer-events-none transition-all duration-300 ease-in-out " +
          (isOpen ? " backdrop-blur-sm max-sm:bg-[#00000099]" : "")
        }
      ></div>
      <div
        className={
          "w-full h-20 md:h-16 fixed top-0 left-0 z-30 font-young-serif p-4 md:p-0 transition-all duration-300 ease-in-out " 
          // (isScrolled
          //   ? "max-sm:bg-[#00000050] md:backdrop-blur-sm"
          //   : "bg-transparent")
        }
      >
        {" "}
        <div className="flex absolute justify-between items-center w-full md:hidden">
          <button
            className="text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex h-screen" : "hidden"
          } flex-col md:flex md:flex-row  items-center justify-center gap-6 md:gap-20`}
        >
          <Link href={"/"} onClick={() => setIsOpen(false)}>
            <p className="text-white text-lg md:text-base">Home</p>
          </Link>
          <Link href={"/events"} onClick={() => setIsOpen(false)}>
            <p className="text-white text-lg md:text-base">Events</p>
          </Link>
          <Link
            href={"/speakers"}
            onClick={() => setIsOpen(false)}
          >
            <p className="text-white text-lg md:text-base">Speakers</p>
          </Link>
          <Link href={"/gallery"} onClick={() => setIsOpen(false)}>
            <p className="text-white text-lg md:text-base">Gallery</p>
          </Link>
          <Link href={"/teams"}>
            <p
              className="text-white text-lg md:text-base"
              onClick={() => setIsOpen(false)}
            >
              Teams
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
