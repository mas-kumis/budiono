import React from "react";
import Image from "next/image";
const Honeymoon = () => {
  return (
    <div className="grid grid-cols-2 bg-white px-[150px] py-[50px] space-x-2">
      <div>
        <Image src="/honeymoon.png" alt="honeymoon" width={654} height={745} />
      </div>
      <div className="flex flex-col justify-center w-[600px]">
        <h4 className="text-[#DF6951] font-bold text-[18px]">
          Honeymoon Specials
        </h4>
        <h4 className="text-[#181E4B] font-bold text-[50px]">
          Our Romantic Tropical Destinations
        </h4>
        <p className="text-black text-[16px] ">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <button className="rounded-xl bg-[#DF6951] text-white py-3 mt-8 font-bold text-center w-[176px]">
          {" "}
          View Packages
        </button>
      </div>
    </div>
  );
};

export default Honeymoon;
