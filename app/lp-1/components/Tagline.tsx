import React from "react";

const Tagline = () => {
  return (
    <div>
      <div
        className="relative h-[400px] max-w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./Tagline.png')" }}
      >
        <div className="grid grid-cols-2 px-[250px] py-[50px] h-full font-bold items-center justify-center">
          <h5 className="text-white text-[50px]">
            Let’s make your next holiday amazing
          </h5>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Tagline;
