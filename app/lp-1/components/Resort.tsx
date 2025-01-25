import React from "react";
import Image from "next/image";
const Resort = () => {
  return (
    <div className="grid grid-cols-2 bg-white px-[250px] py-[70px]">
      <div className="flex flex-col justify-between w-[458px] h-[458px]">
        <h4 className="text-[rgb(223,105,81)] font-bold text-[18px]">
          Fast & Easy{" "}
        </h4>
        <h4 className="text-[#181E4B] font-bold text-[50px]">
          Get Your Favourite Resort Bookings{" "}
        </h4>
        <div className="flex flex-col gap-2">
          <div className="flex  items-center  space-x-[20px]">
            <div className="w-[47px] h-[48px] bg-[#F0BB1F] rounded-xl flex items-center justify-center">
              <Image src="/resort-1.png" alt="resort" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center w-[327px] my-[20px]">
              <p className="font-bold text-[16px] text-[#5E6282]">
                Choose Destination
              </p>
              <p className="text-[#5E6282] text-[16px] leading-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="flex  items-center  space-x-[20px]">
            <div className="w-[47px] h-[48px] bg-[#F15A2B] rounded-xl flex items-center justify-center">
              <Image src="/resort-2.png" alt="resort" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center w-[327px] my-[20px]">
              <p className="font-bold text-[16px] text-[#5E6282]">
                Check Availability{" "}
              </p>
              <p className="text-[#5E6282] text-[16px] leading-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="flex  items-center  space-x-[20px]">
            <div className="w-[47px] h-[48px] bg-[#006380] rounded-xl flex items-center justify-center">
              <Image src="/resort-3.png" alt="resort" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center w-[327px] my-[20px]">
              <p className="font-bold text-[16px] text-[#5E6282]">Let’s Go </p>
              <p className="text-[#5E6282] text-[16px] leading-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src="/resort.png" alt="resort" width={1025} height={700} />
      </div>
    </div>
  );
};

export default Resort;
