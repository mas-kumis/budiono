import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
const About = () => {
  return (
    <div className="px-[30px] md:px-[100px] my-[100px]">
      <div className="grid relative grid-cols-1 md:grid-cols-2 gap-2">
        {/* Images Grid Component */}
        <div className="relative  h-[440px] md:h-auto   lg:mx-[50px]">
          <Image
            src="/Images/about-2.png"
            alt="about"
            width={280}
            height={280}
            className="absolute top-0 right-5 lg:right-10 z-10"
          />
          <Image
            src="/Images/about-1.png"
            alt="about"
            width={400}
            height={400}
            className="absolute bottom-0 left-0"
          />
          <div className="absolute right-0 rounded-lg shadow-md top-30 z-20 bg-white px-4 py-2 flex flex-col items-center">
            <p className="text-[14px] font-semithin">Our Happy Customer</p>
            <Image
              src="/Images/about-author.png"
              alt="author"
              width={170}
              height={170}
              className=""
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="px-[20px] py-[20px] lg:w-[400px] ">
          <div className="py-1 px-2 bg-[#d3e6e5] text-center w-[150px] text-sm">
            Tentang HouseFind
          </div>
          <h5 className=" md:leading-[36px] my-4 text-[34px] leading-[38px] md:text-[38px] font-semibold">
            Keanggunan Abadi, Properti Eksklusif untuk Generasi Terpilih.
          </h5>
          <p className=" text-[14px] leading-[18px] text-[#4B5563]">
            HouseFind bukan sekadar platform properti, tapi partner andal untuk
            setiap langkah Anda. Dari beli, jual, hingga investasi, kami
            menyederhanakan proses dengan teknologi terkini dan tim profesional
            siap membantu.
          </p>
          <div className="grid grid-cols-3  gap-2 my-8">
            <div className="flex flex-col">
              <p className="text-[34px] text-center md:text-[38px] font-semibold">
                0K
              </p>
              <p className="text-[14px] text-center text-[#4B5563]">
                Homes Sold
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[34px] text-center md:text-[38px] font-semibold">
                0K
              </p>
              <p className="text-[14px] text-center text-[#4B5563]">
                Happy Client{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[34px] text-center md:text-[38px] font-semibold">
                0%
              </p>
              <p className="text-[14px] text-center text-[#4B5563]">
                Satisfaction Rate{" "}
              </p>
            </div>
          </div>
          <button className="flex space-x-2 items-center cursor-pointer bg-[#5856D5] text-white px-4 py-2 rounded-md hover:bg-[#5857ac] transition duration-300">
            <p>See All Properties</p>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
