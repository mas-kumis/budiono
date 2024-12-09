import React from "react";
import { Menu, Sun, User, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-slate-800 w-screen flex justify-between text-white py-4 px-4 fixed">
      <div className="bg-slate-700 hover:text-slate-700 rounded-md hover:bg-lime-400 p-1">
        <Menu size={32} className="" />
      </div>
      <div className="flex space-x-4 items-center">
        <Sun size={32} className="hover:text-lime-400" />
        <User size={32} className="hover:text-lime-400" />
        <Bell size={32} className="hover:text-lime-400" />
      </div>
    </div>
  );
};

export default Navbar;
