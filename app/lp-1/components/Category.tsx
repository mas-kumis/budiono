import React from "react";
import Image from "next/image";
const Category = () => {
  return (
    <div className="flex items-center justify-center flex-col px-[250px] py-[50px] bg-white">
      <h4 className="text-[#DF6951] text-center font-semibbold text-[18px] ">
        CATEGORY
      </h4>
      <h3 className="text-center font-bold text-[50px] text-[#181E4B]">
        We Offer Best Services
      </h3>
      <div className="grid grid-cols-4 w-full gap-8 mt-[40px]">
        <div className="h-[225px] rounded-6xl hover:shadow-2xl hover:inset-shadow-2xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/category-1.png"
              alt="category"
              width={72}
              height={72}
            />
            <h6 className="font-bold text-[20px] text-center text-[#1E1D4C]">
              Guided Tours
            </h6>
            <p className="text-center text-[16px] font-medium text-[#5E6282]">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
        </div>
        <div className="h-[225px] rounded-6xl hover:shadow-2xl hover:inset-shadow-2xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/category-2.png"
              alt="category"
              width={72}
              height={72}
            />
            <h6 className="font-bold text-[20px] text-center text-[#1E1D4C]">
              Best Flights Options{" "}
            </h6>
            <p className="text-center text-[16px] font-medium text-[#5E6282]">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.{" "}
            </p>
          </div>
        </div>
        <div className="h-[225px] rounded-6xl hover:shadow-2xl hover:inset-shadow-2xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/category-3.png"
              alt="category"
              width={72}
              height={72}
            />
            <h6 className="font-bold text-[20px] text-center text-[#1E1D4C]">
              Religious Tours{" "}
            </h6>
            <p className="text-center text-[16px] font-medium text-[#5E6282]">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
        </div>
        <div className="h-[225px] rounded-6xl hover:shadow-2xl hover:inset-shadow-2xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/category-4.png"
              alt="category"
              width={72}
              height={72}
            />
            <h6 className="font-bold text-[20px] text-center text-[#1E1D4C]">
              Medical insurance{" "}
            </h6>
            <p className="text-center text-[16px] font-medium text-[#5E6282]">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
