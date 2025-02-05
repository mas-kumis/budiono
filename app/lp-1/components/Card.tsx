import React from "react";
import { MapPin, Calendar, UserRound } from "lucide-react";

const Card = () => {
  return (
    <div className="flex items-center justify-center flex-col px-[150px] py-[50px] bg-white">
      <div className="flex flex-col mb-8 items-center justify-center">
        <h4 className="text-[#DF6951] text-center font-semibbold text-[18px] ">
          Trendy
        </h4>
        <h3 className="text-center font-bold text-[50px] text-[#181E4B]">
          Our Trending Tour Packages{" "}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {/* Card */}
        <div className="rounded-xl  w-full h-[695px] flex flex-col space-y-2">
          <div className="w-full h-[312px] bg-blue-100 rounded-xl"></div>
          <div className="flex space-x-4 text-black">
            <div className="flex items-center gap-2">
              <Calendar />
              <div>8 Days</div>
            </div>
            <div className="flex items-center gap-2">
              <UserRound /> <div>25 People OnGoing</div>
            </div>
          </div>
          <h6 className="text-black text-[30px] font-bold">Switzerland</h6>
          <div className="text-black flex gap-2 items-center">
            <MapPin />
            <div>Europe</div>
          </div>
          <div className="flex space-x-4 items-center">
            <p className="text-[30px] text-[#DF6951]">$1000</p>
            <p className="text-[22px] text-[#7D7D7D] line-through">$1200</p>
          </div>
          <p className="text-[12px] text-[#7D7D7D]">
            Nam exercitationem commodi et ducimus quia in dolore animi sgiit
            mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium internos.
          </p>
          <div className="bg-[#DF6951]  h-[50px] w-[180px] text-white font-bold items-center justify-center flex rounded-lg">
            Explore Now
          </div>
        </div>
        <div className="rounded-xl w-full h-[695px] flex flex-col space-y-2">
          <div className="w-full h-[312px] bg-blue-100 rounded-xl"></div>
          <div className="flex space-x-4 text-black">
            <div>8 Days</div>
            <div>25 People OnGoing</div>
          </div>
          <h6 className="text-black text-[30px] font-bold">Switzerland</h6>
          <div className="text-black">Europe</div>
          <div className="flex space-x-4 items-center">
            <p className="text-[30px] text-[#DF6951]">$1000</p>
            <p className="text-[22px] text-[#7D7D7D] line-through">$1200</p>
          </div>
          <p className="text-[12px] text-[#7D7D7D]">
            Nam exercitationem commodi et ducimus quia in dolore animi sit
            mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium internos.
          </p>
          <div className="bg-[#DF6951] mt-4 h-[50px] w-[180px] text-white font-bold items-center justify-center flex rounded-lg">
            Explore Now
          </div>
        </div>
        <div className="rounded-xl w-full h-[695px] flex flex-col space-y-2">
          <div className="w-full h-[312px] bg-blue-100 rounded-xl"></div>
          <div className="flex space-x-4 text-black">
            <div>8 Days</div>
            <div>25 People OnGoing</div>
          </div>
          <h6 className="text-black text-[30px] font-bold">Switzerland</h6>
          <div className="text-black">Europe</div>
          <div className="flex space-x-4 items-center">
            <p className="text-[30px] text-[#DF6951]">$1000</p>
            <p className="text-[22px] text-[#7D7D7D] line-through">$1200</p>
          </div>
          <p className="text-[12px] text-[#7D7D7D]">
            Nam exercitationem commodi et ducimus quia in dolore animi sit
            mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium internos.
          </p>
          <div className="bg-[#DF6951] mt-4 h-[50px] w-[180px] text-white font-bold items-center justify-center flex rounded-lg">
            Explore Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
