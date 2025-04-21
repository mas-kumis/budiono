import React from "react";

const About = () => {
  return (
    <div className="px-[30px] md:px-[100px] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=""></div>
        <div className="px-[20px] py-[20px] ">
          <div className="py-1 px-2 bg-[#d3e6e5] text-center w-[150px] text-sm">
            Tentang HouseFind
          </div>
          <h5 className="lg:w-[380px] md:leading-[36px] my-4 text-[34px] leading-[38px] md:text-[38px] font-semibold">
            Keanggunan Abadi, Properti Eksklusif untuk Generasi Terpilih.
          </h5>
          <p className="lg:w-[400px] text-[14px] leading-[18px] text-[#4B5563]">
            HouseFind bukan sekadar platform properti, tapi partner andal untuk
            setiap langkah Anda. Dari beli, jual, hingga investasi, kami
            menyederhanakan proses dengan teknologi terkini dan tim profesional
            siap membantu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
