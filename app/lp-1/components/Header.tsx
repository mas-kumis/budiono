import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

const Header = () => {
  return (
    <div
      className="h-[976px] min-w-screen bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: "url('./Jumbotron.png')" }}
    >
      <Navbar />
      <div className="">
        <Jumbotron />
      </div>
    </div>
  );
};

export default Header;
