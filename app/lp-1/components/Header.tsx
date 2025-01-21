import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

const Header = () => {
  return (
    <div className="h-[976px] min-w-screen container">
      <Navbar />
      <div className="">
        <Jumbotron />
      </div>
    </div>
  );
};

export default Header;
