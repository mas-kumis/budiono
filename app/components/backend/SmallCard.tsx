import React from "react";

type Props = {
  heading: string;
  text: string;
  icon: React.ReactNode;
};
const SmallCard = ({ heading, text, icon }: Props) => {
  return (
    <div className="bg-slate-800 hover:bg-lime-400 hover:text-slate-800 text-white items-center px-4 py-2 h-[110px] rounded-lg flex gap-4">
      <div className="rounded-full bg-lime-400 w-[80px] h-[80px] flex items-center justify-center border-slate-800 border">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-xl">{heading}</h4>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default SmallCard;
