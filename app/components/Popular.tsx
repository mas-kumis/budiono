import React from "react";

const travel = [
  {
    date: "15-03-2023",
    title: "Menikmati Keindahan Bali",
    article:
      "Bali menawarkan pantai yang memukau, budaya yang kaya, dan suasana yang menenangkan. Jangan lewatkan matahari terbenam di Pantai Kuta.",
  },
  {
    date: "22-07-2022",
    title: "Petualangan di Gunung Rinjani",
    article:
      "Mendaki Gunung Rinjani memberikan pengalaman tak terlupakan dengan pemandangan danau Segara Anak dan puncak yang menakjubkan.",
  },
  {
    date: "09-11-2021",
    title: "Jelajah Kota Tua Jakarta",
    article:
      "Kota Tua Jakarta menawarkan perjalanan sejarah dengan bangunan kolonial yang megah dan museum yang informatif.",
  },
  {
    date: "30-05-2020",
    title: "Wisata Kuliner di Jogja",
    article:
      "Jogja terkenal dengan kuliner tradisionalnya seperti gudeg dan bakpia. Rasakan cita rasa autentik yang menggoda selera.",
  },
  {
    date: "14-02-2019",
    title: "Liburan Seru ke Lombok",
    article:
      "Lombok menawarkan pantai pasir putih yang indah dan ombak yang menantang bagi para peselancar. Jangan lupa kunjungi Gili Trawangan.",
  },
  {
    date: "25-09-2018",
    title: "Eksplorasi Taman Nasional Komodo",
    article:
      "Taman Nasional Komodo adalah rumah bagi komodo, kadal terbesar di dunia. Nikmati juga keindahan alam bawah lautnya.",
  },
  {
    date: "03-12-2017",
    title: "Menyelam di Raja Ampat",
    article:
      "Raja Ampat dikenal sebagai surga penyelam dengan keanekaragaman hayati bawah laut yang tiada tara. Pengalaman menyelam yang tak terlupakan.",
  },
  {
    date: "19-04-2016",
    title: "Tour Kota Bandung",
    article:
      "Bandung menawarkan hawa sejuk, suasana romantis, dan tempat wisata yang menarik seperti Tangkuban Perahu dan Kebun Strawberry.",
  },
];
const Popular = () => {
  return (
    <div className="my-[40px] px-[50px] md:px-[100px]">
      <div>
        <h2 className="text-[36px] font-bold">Popular Topics</h2>
      </div>
      <div className=" my-[20px] text-[12px] font-bold text-[#495057] flex items-center  gap-2 md:gap-4 lg:gap-8">
        <p>All</p>
        <p>Adventure</p>
        <p>Travel</p>
        <p>Fashion</p>
        <p>Technology</p>
        <p>Branding</p>
      </div>
      <div className="my-[20px] grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {travel.map((item, index) => (
          <div
            key={index}
            className="w-full h-[280px] md:h-[300px]  lg:h-[400px] bg-lime-100"
          >
            <div className="flex flex-col h-full">
              <div
                className="h-[100px]  md:h-[150px] lg:h-[250px] w-full bg-cover bg-center"
                style={{ backgroundImage: 'url("/popular.png")' }}
              ></div>
              <div className="flex flex-col justify-between my-2">
                <p className="text-[8px] lg:text-[12px] font-thin">
                  {item.date}
                </p>
                <p className="text-[12px] lg:text-[18px] font-bold">
                  {item.title}{" "}
                </p>
                <p className="text-[8px] lg:text-[12px] font-thin">
                  {item.article}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
