"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex tems-center justify-between px-[100px] py-[50px] items-center">
      <div className="font-bold text-5xl">Travel</div>
      <div className="font-bold text-[19px] flex gap-8">
        <div className="hover:text-[#DF6951] hover:cursor-pointer">Home</div>
        <div className="hover:text-[#DF6951] hover:cursor-pointer">About</div>
        <div
          className=" hover:text-[#DF6951] hover:cursor-pointer flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>Service</p>
          <ChevronDown />
          {isOpen && (
            <div className="absolute bg-white text-[#DF6951] hover:bg-[#ec6247] hover:cursor-pointer text-[19px] font-bold px-6 py-4 rounded-lg">
              <p>Service</p>
            </div>
          )}
        </div>
        <div className="hover:text-[#DF6951] hover:cursor-pointer">
          Upcomming Packages
        </div>
      </div>
      <div className="text-white bg-[#DF6951] hover:bg-[#ec6247] hover:cursor-pointer text-[19px] font-bold px-6 py-4 rounded-lg">
        Get in Touch
      </div>
    </div>
  );
};

export default Navbar;
