import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[50px] gap-8 px-[30px] md:px-[100px] lg:px-[150px]">
      <h6 className="font-bold text-[28px]">Yuk Pesan Sekarang Juga!</h6>
      <form className="flex flex-col items-center gap-8 justify-center">
        <input
          type="text"
          placeholder="Nama"
          className="w-[300px] md:w-[400px] lg:w-[500px] h-[50px] px-[10px] bg-slate-100 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-[300px] md:w-[400px] lg:w-[500px] h-[50px] px-[10px] bg-slate-100 rounded-lg"
        />
        <input
          type="number"
          placeholder="Nomor WhatsApp"
          className="w-[300px] md:w-[400px] lg:w-[500px] h-[50px] px-[10px] bg-slate-100 rounded-lg"
        />
        <button className="bg-[#B3C8A9] w-[300px] md:w-[400px] lg:w-[500px] h-[50px] rounded-lg text-white font-bold text-center">
          Pesan Sekarang!
        </button>
      </form>
    </div>
  );
};

export default CTA;
