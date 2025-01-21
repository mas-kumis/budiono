import React from "react";
import Image from "next/image";
const Jumbotron = () => {
  return (
    <div className="flex items-center justify-center  px-[30px] md:px-[50px] lg:px-[100px] ">
      <div className="lg:grid lg:grid-cols-2 mt-8 md:mt-12 lg:mt-24">
        <div className="flex flex-col gap-4">
          {/* Icon */}
          <Image src="/Vector 1.png" alt="icon" width={78} height={15} />
          {/* Header */}
          <h1 className="text-[45px] md:text-[59px] text-black leading-[50px] md:leading-[59px] font-bold">
            No matter where you’re going to, we’ll take you there
          </h1>
          {/* Input */}
          <div className="bg-white font-semibold backdrop-blur-xl bg-opacity-30 text-white py-5 px-6 md:flex md:justify-between w-full rounded-md items-center mt-8 flex-col md:flex-row space-y-8 md:space-y-0">
            <div>Where to?</div>
            <div className="h-[30px] bg-white w-[3px] hidden md:block"></div>
            <div>Travel Type</div>
            <div className="h-[30px] bg-white w-[3px] hidden md:block"></div>
            <div>Duration</div>
            <div className="h-[30px] bg-white w-[3px] hidden md:block"></div>
            <div className=" bg-[#DF6951] hover:bg-[#f05e41] hover:cursor-pointer hover:shadow-2xl px-12 py-4 rounded-lg text-center">
              Submit{" "}
            </div>
          </div>
          {/* Avatar */}
          <div className="flex  flex-col lg:flex-row gap-2 lg:items-center mt-8">
            <div className="flex -space-x-1 overflow-hidden">
              <div className="inline-block size-12 rounded-full ring-2 bg-[#DF6951] ring-white"></div>
              <div className="inline-block size-12 rounded-full ring-2 bg-[#DF6951] ring-white"></div>
              <div className="inline-block size-12 rounded-full ring-2  bg-[#DF6951] ring-white"></div>
              <div className="inline-block size-12 rounded-full ring-2  bg-[#DF6951] ring-white"></div>
              <div className="inline-block size-12 rounded-full ring-2  bg-[#DF6951] ring-white"></div>
            </div>
            <p className="font-semibold">
              2,500 people booked Tommorowland Event in last 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
