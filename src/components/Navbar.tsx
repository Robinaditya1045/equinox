"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* {isOpen && (
        <div className="w-screen h-screen fixed bg-[#00000099] z-20 backdrop-blur-sm transition-all duration-300 ease-in-out"></div>
        )} */}
      <div
        className={
          "w-screen h-screen fixed z-20 pointer-events-none transition-all duration-300 ease-in-out " +
          (isOpen
            ? " backdrop-blur-sm bg-[#00000099]"
            : "")
        }
      ></div>
      <div className="w-full h-20 md:h-16 fixed top-0 left-0 z-30 bg-transparent font-young-serif p-4 md:p-0">
        <div className="flex justify-between items-center w-full md:hidden">
          <button
            className="text-white text-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex h-screen" : "hidden"
          } flex-col md:flex md:flex-row  items-center justify-center gap-6 md:gap-20`}
        >
          <Link href={"/speakers"}>
            <p className="text-white text-lg md:text-base">Speakers</p>
          </Link>
          <Link href={"/events"}>
            <p className="text-white text-lg md:text-base">Events</p>
          </Link>
          <Link href={"/"} className="relative  w-28 md:w-32 h-16">
            <img
              src="/images/logo.png"
              alt="logo"
              className="absolute -top-3"
            />
          </Link>
          <Link href={"/teams"}>
            <p className="text-white text-lg md:text-base">Teams</p>
          </Link>
          <Link href={"/gallery"}>
            <p className="text-white text-lg md:text-base">Gallery</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
