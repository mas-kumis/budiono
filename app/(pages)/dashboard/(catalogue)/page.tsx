import Card from "@/app/components/backend/Card";
import Heading from "@/app/components/backend/Heading";
import React from "react";

const cardData = [
  {
    color: "bg-red-400",
    heading: "Customer",
    text: "Customers List",
  },
  {
    color: "bg-blue-400",
    heading: "Market",
    text: "Market List",
  },
  {
    color: "bg-yellow-400",
    heading: "Earning",
    text: "Earning List",
  },
  {
    color: "bg-green-400",
    heading: "Total",
    text: "Total List",
  },
];
const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <Heading title="Catalogue" />
      {/* Card */}
      <div className="grid grid-cols-4 my-4 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            classname={card.color}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
