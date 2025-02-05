import React from "react";
import Image from "next/image";
import BrandName from "./BrandName";
const Headers = () => {
  return (
    <div className="bg-gradient-to-br from-[#B3C8A9] from-10% to-slate-50 to-90% h-screen flex flex-col justify-between">
      <div className="  h-full grid grid-cols-1 place-items-center lg:grid-cols-2 px-[30px] md:px-[30px] lg:px-[150px]">
        <div className="px-[50px] md:px-[0px]">
          <Image
            src="/Headers.png"
            alt="Picture of the author"
            width={399}
            height={519}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[44px] md:text-[52px] font-bold">
            Pashimna Nyaman dan Stylish untuk Setiap Gaya
          </h1>

          <p className="font-semibold text-[16px]">
            Tampil Percaya Diri dengan Pashmina Berkualitas Tinggi dari Casata
            Hijab
          </p>
        </div>
      </div>
      <BrandName />
    </div>
  );
};

export default Headers;
