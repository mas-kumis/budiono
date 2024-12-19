import React from "react";

type Props = {
  classname: string;
  heading: string;
  text: string;
  hover: string;
};
const Card = ({ classname, heading, text, hover }: Props) => {
  return (
    <div
      className={`${classname}  ${hover} text-black px-4 py-2 h-[200px] rounded-lg`}
    >
      <h4 className="font-bold text-xl">{heading}</h4>
      <div>{text}</div>
    </div>
  );
};

export default Card;
