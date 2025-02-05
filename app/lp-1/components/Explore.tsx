import React from "react";

const Explore = () => {
  return (
    <div className="grid grid-cols-2 h-[400px]">
      <div
        className=" flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center bg-blend-darken bg-black bg-opacity-60 "
        style={{ backgroundImage: "url('./explore-1.png')" }}
      >
        <p className="text-[18px] font-bold">PROMOTION</p>
        <p className="text-[50px] font-bold "> Explore Nature</p>
        <button className="text-[17px] font-semibold px-4 py-2  border-2 border-white rounded-lg mt-4">
          View Packages
        </button>
      </div>
      <div
        className=" flex flex-col justify-center items-center  "
        style={{ backgroundImage: "url('./explore-2.png')" }}
      >
        <p className="text-[18px] font-bold">PROMOTION</p>
        <p className="text-[50px] font-bold "> Explore City</p>
        <button className="text-[17px] font-semibold px-4 py-2  border-2 border-white rounded-lg mt-4">
          View Packages
        </button>
      </div>
    </div>
  );
};

export default Explore;
