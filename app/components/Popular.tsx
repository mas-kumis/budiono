import React from "react";

const Popular = () => {
  return (
    <div className="my-[40px] px-[50px] md:px-[100px]">
      <div>
        <h2 className="text-[36px] font-bold">Popular Topics</h2>
      </div>
      <div className=" my-[20px] text-[12px] font-bold text-[#495057] flex items-center  gap-2 md:gap-4 lg:gap-8">
        <p>All</p>
        <p>Adventure</p>
        <p>Travel</p>
        <p>Fashion</p>
        <p>Technology</p>
        <p>Branding</p>
      </div>
      <div className="my-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <div className="w-full h-[280px] md:h-[300px]  lg:h-[400px] bg-lime-100">
          <div className="flex flex-col h-full">
            <div
              className="h-[100px]  md:h-[150px] lg:h-[250px] w-full bg-cover bg-center"
              style={{ backgroundImage: 'url("/popular.png")' }}
            ></div>
            <div className="flex flex-col justify-between my-2">
              <p className="text-[8px] lg:text-[12px] font-thin">08.08.2021</p>
              <p className="text-[12px] lg:text-[18px] font-bold">
                Dream destinations to visit this year in Paris
              </p>
              <p className="text-[8px] lg:text-[12px] font-thin">
                Progressively incentivize cooperative systems through
                technically sound functionalities. Credibly productivate
                seamless data with flexible schemas.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
        <div className="w-full h-[180px] md:h-[280px]  lg:h-[300px] bg-lime-400"></div>
      </div>
    </div>
  );
};

export default Popular;
