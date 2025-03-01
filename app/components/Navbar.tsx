import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-40 px-[30px] md:px-[100px] py-[30px] flex justify-between items-center">
      <p className="text-white">BUDIONO</p>
      <div className="block lg:hidden text-white">icon</div>
      <div className="lg:flex gap-4 hidden text-white">
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Articles</li>
          <li>Contact Us</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
