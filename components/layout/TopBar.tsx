import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const TopBar = () => {
  return (
    <div className="bg-[rgb(153,153,153)] text-xs md:text-sm  md:px-[100px] py-2 text-white w-full flex justify-center md:justify-between">
      <div className="flex space-x-4 items-center">
        <div className="flex items-center space-x-2">
          <Mail size={16} />
          <p>maskumisdev@gmail.com</p>
        </div>
        <div className="h-4 w-px bg-white"></div>
        <div className="flex items-center space-x-2">
          <Phone size={16} />
          <p>081234567890</p>
        </div>
        <div className="hidden md:flex h-4 w-px bg-white"></div>
        <div className="hidden md:flex items-center space-x-2">
          <MapPin size={16} />
          <p>Jawa Timur</p>
        </div>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <div className="h-4 w-px bg-black"></div>
        <div>SIGN IN</div>
      </div>
    </div>
  );
};

export default TopBar;
