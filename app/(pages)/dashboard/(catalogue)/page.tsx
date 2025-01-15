import React from "react";
import Heading from "@/app/components/backend/Heading";
import Card from "@/app/components/backend/Card";
import SmallCard from "@/app/components/backend/SmallCard";
import WeeklyChart from "@/app/components/backend/WeeklyChart";
import BestSellingChart from "@/app/components/backend/BestSellingChart";
import { Aperture, Container, Leaf, BadgeDollarSign } from "lucide-react";
const cardData = [
  {
    color: "bg-red-400",
    hover: "hover:bg-red-500",
    heading: "Customer",
    text: "Customers List",
  },
  {
    color: "bg-blue-400",
    hover: "hover:bg-blue-600",
    heading: "Market",
    text: "Market List",
  },
  {
    color: "bg-yellow-400",
    hover: "hover:bg-yellow-600",
    heading: "Earning",
    text: "Earning List",
  },
  {
    color: "bg-green-400",
    hover: "hover:bg-green-600",
    heading: "Total",
    text: "Total List",
  },
  {
    color: "bg-pink-400",
    hover: "hover:bg-pink-500",
    heading: "Total",
    text: "Total List",
  },
];

const smallCardData = [
  {
    icon: <Container size={32} />,
    heading: "Suppliers",
    text: "Suppliers List",
  },
  {
    icon: <BadgeDollarSign size={32} />,
    heading: "Market",
    text: "Market List",
  },
  {
    icon: <Leaf size={32} />,
    heading: "Farmer",
    text: "Farmer List",
  },
  {
    icon: <Aperture size={32} />,
    heading: "Orders",
    text: "Orders List",
  },
];
const page = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Heading */}
      <Heading title="Catalogue List" />
      {/* Card */}
      <div className="grid grid-cols-5 mb-2 mt-4 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            classname={card.color}
            heading={card.heading}
            text={card.text}
            hover={card.hover}
          />
        ))}
      </div>
      {/* Small Card */}
      <div className="grid grid-cols-4 my-2 gap-4">
        {smallCardData.map((card, index) => (
          <SmallCard
            key={index}
            heading={card.heading}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </div>
      {/* Chart */}
      <div className="grid grid-cols-2 gap-2">
        <WeeklyChart />
        <BestSellingChart />
      </div>
      {/* Components */}
    </div>
  );
};

export default page;
