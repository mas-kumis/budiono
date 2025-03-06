import React from "react";

const Headers = () => {
  return (
    <header>
      <div className="h-screen md:h-[500px]  flex flex-col justify-center md:justify-end  pb-[50px] lg:pb-[70px] px-[50px] md:px-[100px]">
        <div className="flex flex-col  gap-2 ">
          <p className="px-4 py-2  text-[10px] rounded-md self-start bg-white  bg-opacity-25   text-white font-bold">
            ADVENTURE
          </p>
          <p className="md:w-[530px] text-[32px]  md:text-[38px] text-white font-bold">
            Richird Norton photorealistic rendering as real photos
          </p>
          <div className="flex gap-2 text-white">
            <p className="text-[12px] ">08.08.2021</p>
            <div className="w-[100px] my-2 h-[1px] bg-white"></div>
            <p className="text-[12px] md:w-[420px]">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
