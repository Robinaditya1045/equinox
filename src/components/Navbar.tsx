"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Always show navbar at the top of the page
      if (currentScrollPos < 50) {
        setIsVisible(true);
      }
      // Otherwise, show when scrolling up, hide when scrolling down
      else {
        setIsVisible(prevScrollPos > currentScrollPos);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} onClick={() => setIsOpen(false)}>
        <p className={`text-white transition-all duration-200 ${isActive ? "font-bold border-b-2 border-white" : "hover:text-gray-300"}`}>
          {label}
        </p>
      </Link>
    );
  };

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
          "w-full h-20 md:h-16 fixed left-0 z-30 font-young-serif p-4 md:p-0 transition-all duration-300 ease-in-out " +
          (isVisible ? "top-0" : "-top-20 md:-top-16")
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
          } flex-col md:flex font-alata pt-4 md:flex-row text-lg items-center justify-center gap-6 md:gap-20`}
        >
          <NavLink href="/" label="Home" />
          <NavLink href="/events" label="Events" />
          <NavLink href="/speakers" label="Speakers" />
          <NavLink href="/gallery" label="Gallery" />
          <NavLink href="/teams" label="Teams" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
