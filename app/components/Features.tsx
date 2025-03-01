import React from "react";
import Image from "next/image";
// Produxtnp
const Features = () => {
  return (
    <div className="w-full my-[50px] px-[30px] md:px-[100px] gap-8 place-items-center grid grid-cols-1 lg:grid-cols-3">
      <div>
        <Image
          src="/features-1.png"
          alt="Picture of the author"
          width={400}
          height={462}
        />
        <div className="flex-col flex w-full items-center justify-center text-center my-[20px]">
          <h6 className="font-bold text-[30px]">Bahan Berkualitas</h6>
          <p className="text-center w-[350px]">
            Tidak mudah kusut, Tidak mudah luntur, dan Tahan Lama.{" "}
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/features-3.png"
          alt="Picture of the author"
          width={400}
          height={462}
        />
        <div className="flex-col flex items-center w-full justify-center text-center my-[20px]">
          <h6 className="font-bold text-[30px]">Nyaman Dipakai</h6>
          <p className="text-center w-[350px]">
            Ringan, Tidak buat Gerah, Tidak Berminyak dan Mudah Diatur
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/features-2.png"
          alt="Picture of the author"
          width={400}
          height={462}
        />
        <div className="flex-col flex items-center justify-center text-center my-[20px]">
          <h6 className="font-bold text-[30px]">Desain Modern</h6>
          <p className="text-center *:">
            Model-model terbaru yang selalu update, pilihan warna yang kekinian
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
