import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-white grid grid-cols-3 gap-4  space-y-4 md:space-y-0 md:flex md:justify-between px-[30px] md:px-50px] lg:px-[150px] py-[20px] md:py-[50px] ">
      <Image src="/partners-1.png" alt="partner" width={100} height={100} />
      <Image src="/partners-2.png" alt="partner" width={100} height={100} />
      <Image src="/partners-3.png" alt="partner" width={100} height={100} />
      <Image src="/partners-4.png" alt="partner" width={100} height={100} />
      <Image src="/partners-5.png" alt="partner" width={100} height={100} />
    </div>
  );
};

export default Partners;
