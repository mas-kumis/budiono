import React from "react";

const BrandName = () => {
  return (
    <div className="w-full text-white font-bold h-[100px]   bg-[#B3C8A9] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
      <p>Casata Hijab</p>
      <p>Casata Hijab</p>
      <p className="hidden md:block">Casata Hijab</p>
      <p className="hidden lg:block">Casata Hijab</p>
      <p className="hidden lg:block">Casata Hijab</p>
    </div>
  );
};

export default BrandName;
