"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  AlignJustify,
  Instagram,
  Twitter,
  Youtube,
  Search,
} from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref for the menu

  // Function to close the navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  return (
    <nav
      className="bg-black fixed w-screen bg-opacity-40 px-[30px] md:px-[100px] py-[30px]"
      ref={menuRef}
    >
      <div className="  flex justify-between items-center">
        <p className="text-white font-bold">BUDIONO</p>
        <div
          className="block lg:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <AlignJustify />
        </div>
        <div className="lg:flex lg:divide-x-2 lg:divide-white hidden text-white     ">
          <ul className="flex  gap-8 px-8">
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
            <li>Contact Us</li>
          </ul>
          <ul className="flex gap-8 px-8">
            <Twitter />
            <Instagram />
            <Youtube />
          </ul>
          <div className="pl-8">
            <Search />
          </div>
        </div>
      </div>
      {open && (
        <div className="text-white mt-8 px-8">
          <ul className="flex flex-col gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
