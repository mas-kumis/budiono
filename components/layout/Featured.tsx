"use client";
import React, { useState } from "react";
import { House, HouseWifi, Hotel, HousePlus } from "lucide-react";
import Image from "next/image";

type Building = {
  id: number;
  name: string;
  category: string;
  location: string;
  bathroom: number;
  bedroom: number;
  size: number;
  price: string;
  image: string;
};

const buildingData: Building[] = [
  {
    id: 1,
    name: "Luxury Suite Villa",
    category: "Villas",
    location: "Los Angeles, CA, USA",
    bathroom: 2,
    bedroom: 4,
    size: 1200,
    price: "IDR 300,000,000",
    image: "/Images/property-1.png",
  },
  {
    id: 2,
    name: "Modern Family House",
    category: "House",
    location: "Jakarta, Indonesia",
    bathroom: 3,
    bedroom: 5,
    size: 1500,
    price: "IDR 450,000,000",
    image: "/Images/property-2.png",
  },
  {
    id: 3,
    name: "Skyline Apartment",
    category: "Apartment",
    location: "New York, NY, USA",
    bathroom: 1,
    bedroom: 2,
    size: 800,
    price: "IDR 200,000,000",
    image: "/Images/property-3.png",
  },
  {
    id: 4,
    name: "Cozy Beach Villa",
    category: "Villas",
    location: "Bali, Indonesia",
    bathroom: 2,
    bedroom: 3,
    size: 1000,
    price: "IDR 350,000,000",
    image: "/Images/property-1.png",
  },
  {
    id: 5,
    name: "Urban Studio Apartment",
    category: "Apartment",
    location: "Tokyo, Japan",
    bathroom: 1,
    bedroom: 1,
    size: 600,
    price: "IDR 150,000,000",
    image: "/Images/property-2.png",
  },
  {
    id: 6,
    name: "Grand Mansion",
    category: "House",
    location: "London, UK",
    bathroom: 4,
    bedroom: 6,
    size: 2000,
    price: "IDR 800,000,000",
    image: "/Images/property-3.png",
  },
  {
    id: 7,
    name: "Elegant Penthouse",
    category: "Apartment",
    location: "Paris, France",
    bathroom: 2,
    bedroom: 3,
    size: 1100,
    price: "IDR 500,000,000",
    image: "/Images/property-1.png",
  },
  {
    id: 8,
    name: "Rustic Country House",
    category: "House",
    location: "Sydney, Australia",
    bathroom: 3,
    bedroom: 4,
    size: 1400,
    price: "IDR 400,000,000",
    image: "/Images/property-2.png",
  },
  {
    id: 9,
    name: "Seaside Villa",
    category: "Villas",
    location: "Miami, FL, USA",
    bathroom: 3,
    bedroom: 5,
    size: 1600,
    price: "IDR 600,000,000",
    image: "/Images/property-3.png",
  },
  {
    id: 10,
    name: "Modern Loft",
    category: "Apartment",
    location: "Berlin, Germany",
    bathroom: 1,
    bedroom: 2,
    size: 900,
    price: "IDR 250,000,000",
    image: "/Images/property-1.png",
  },
];

const Featured = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="px-[30px] md:px-[100px] bg-slate-100 py-[100px]">
      {/* Title */}
      <div className="flex flex-col  space-y-0.5 items-center justify-center">
        <div className="py-1  px-2 bg-[#d3e6e5] text-[#073B3A]  text-center w-[150px] text-sm">
          Rekomendsi Kami
        </div>
        <h5 className=" md:leading-[36px] text-center  my-4 text-[34px] leading-[38px] md:text-[38px] font-semibold">
          Our Feautured Property{" "}
        </h5>
      </div>
      {/* Category */}
      <div className="flex flex-wrap items-center justify-center gap-4 my-[30px] ">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`text-center text-sm cursor-pointer flex items-center space-x-1 px-6 rounded-sm py-2 ${
            selectedCategory === "All"
              ? "bg-[#073B3A] text-[#d3e6e5]"
              : "bg-[#d3e6e5] text-[#073B3A]"
          } `}
        >
          <House
            className={` ${
              selectedCategory === "All" ? " text-[#d3e6e5]" : " text-[#073B3A]"
            } `}
          />
          <p>All</p>
        </button>
        <button
          onClick={() => setSelectedCategory("Villas")}
          className={`text-center text-sm cursor-pointer flex items-center space-x-1 px-6 rounded-sm py-2 ${
            selectedCategory === "Villas"
              ? "bg-[#073B3A] text-[#d3e6e5]"
              : "bg-[#d3e6e5] text-[#073B3A]"
          } `}
        >
          <HouseWifi
            className={` ${
              selectedCategory === "Villas"
                ? " text-[#d3e6e5]"
                : " text-[#073B3A]"
            } `}
          />
          <p>Villas</p>
        </button>
        <button
          onClick={() => setSelectedCategory("Appartment")}
          className={`text-center text-sm cursor-pointer flex items-center space-x-1 px-6 rounded-sm py-2 ${
            selectedCategory === "Appartment"
              ? "bg-[#073B3A] text-[#d3e6e5]"
              : "bg-[#d3e6e5] text-[#073B3A]"
          } `}
        >
          <Hotel
            className={` ${
              selectedCategory === "Appartment"
                ? " text-[#d3e6e5]"
                : " text-[#073B3A]"
            } `}
          />
          <p>Appartment</p>
        </button>
        <button
          onClick={() => setSelectedCategory("House")}
          className={`text-center text-sm cursor-pointer flex items-center space-x-1 px-6 rounded-sm py-2 ${
            selectedCategory === "House"
              ? "bg-[#073B3A] text-[#d3e6e5]"
              : "bg-[#d3e6e5] text-[#073B3A]"
          } `}
        >
          <HousePlus
            className={` ${
              selectedCategory === "House"
                ? " text-[#d3e6e5]"
                : " text-[#073B3A]"
            } `}
          />
          <p>Houses</p>
        </button>
      </div>
      {/* Featured Product */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {buildingData.map((building) => (
            <div
              key={building.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <Image
                src={building.image}
                width={400}
                height={200}
                alt={building.name}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
              />
              <h5 className="text-lg font-semibold">{building.name}</h5>
              <p className="text-sm text-gray-500">{building.location}</p>
              <p className="text-sm text-gray-500">{building.category}</p>
              <p className="text-sm text-gray-500">
                {building.bedroom} Bedrooms, {building.bathroom} Bathrooms
              </p>
              <p className="text-lg font-semibold mt-auto">{building.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
