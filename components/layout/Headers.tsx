import React from "react";
import { ArrowUpRight } from "lucide-react";
const Headers = () => {
  return (
    <div
      className="h-screen w-auto bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/headers.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col spacey-y-2 h-full items-center justify-center">
        <p className="text-white text-[18px] lg:text-[22px]">
          Discover your Ideal Property
        </p>
        <h1 className="text-[52px] text-center lg:text-[70px] text-white font-bold">
          Cari Rumah Idamanmu
        </h1>
        <div className="my-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="bg-[#5856D5] px-4 text-center py-3 items-center text-white flex space-x-2 rounded-lg">
            <p className="text-[14px]">Find your Dream Home Now</p>
            <ArrowUpRight size={14} strokeWidth={2} />
          </button>{" "}
          <button className="bg-white px-4 py-3 text-center justify-center items-center text-black flex space-x-2 rounded-lg">
            <p className="text-[14px]">View Listing</p>
            <ArrowUpRight size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
