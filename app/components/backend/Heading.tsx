import React from "react";

type Props = {
  title: string;
};
const Heading = ({ title }: Props) => {
  return <div className="text-3xl font-bold text-white">{title}</div>;
};

export default Heading;
