import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex tems-center justify-between px-[30px] md:px-[50px] lg:px-[100px] py-[30px] md:py-[50px] items-center">
      <div className="font-bold text-5xl">Travel</div>
      <div className="font-bold text-[19px] gap-8 hidden lg:flex">
        <div className="hover:text-[#DF6951] hover:cursor-pointer">Home</div>
        <div className="hover:text-[#DF6951] hover:cursor-pointer">About</div>
        <div className=" hover:text-[#413b3a] hover:cursor-pointer flex items-center gap-2">
          Service
          <ChevronDown />
        </div>
        <div className="hover:text-[#DF6951] hover:cursor-pointer">
          Upcomming Packages
        </div>
      </div>
      <div className="text-white bg-[#DF6951] hover:bg-[#ec6247] hover:cursor-pointer text-[19px] font-bold px-4 md:px-6 py-4 rounded-lg">
        Get in Touch
      </div>
    </div>
  );
};

export default Navbar;
