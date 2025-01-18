import React from "react";
import Image from "next/image";
const Jumbotron = () => {
  return (
    <div className="flex  h-[500px] px-[100px] items-center">
      <div className="grid grid-cols-2 mt-24">
        <div className="flex flex-col gap-4">
          {/* Icon */}
          <Image src="/Vector 1.png" alt="icon" width={78} height={15} />
          {/* Header */}
          <h1 className="text-[59px] leading-[59px] font-bold">
            No matter where you’re going to, we’ll take you there
          </h1>
          {/* Input */}
          <div className="bg-white font-semibold backdrop-blur-xl bg-opacity-30 text-white py-5 px-6 flex justify-between w-full rounded-md items-center mt-8">
            <div>Where to?</div>
            <div className="h-[30px] bg-white w-[3px]"></div>
            <div>Travel Type</div>
            <div className="h-[30px] bg-white w-[3px]"></div>
            <div>Duration</div>
            <div className="h-[30px] bg-white w-[3px]"></div>
            <div className=" bg-[#DF6951] hover:bg-[#ec6247] px-12 py-4 rounded-lg text-center">
              Submit{" "}
            </div>
          </div>
          {/* Avatar */}
          <div className="flex gap-2 items-center mt-8">
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
