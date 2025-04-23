"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

// Property data interface
interface PropertyData {
  id: number;
  title: string;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
}

// Sample property data
const propertyData: PropertyData[] = [
  {
    id: 1,
    title: "Moon Light Villa",
    location: "60002 Just Mead East Alfonso",
    originalPrice: 1900000,
    discountedPrice: 1800000,
    image: "/Images/back-1.png",
  },
  {
    id: 2,
    title: "Sunset Residence",
    location: "45023 West Harbor Drive",
    originalPrice: 2100000,
    discountedPrice: 1950000,
    image: "/Images/back-1.png",
  },
  {
    id: 3,
    title: "Ocean View Mansion",
    location: "72145 Coastal Highway",
    originalPrice: 3500000,
    discountedPrice: 3200000,
    image: "/Images/back-1.png",
  },
];

const FeaturedPropertyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === propertyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? propertyData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-16 w-full">
      {/* Background Image */}
      <div className="w-full h-[500px] relative">
        {/* Static background fallback */}
        <div className="absolute inset-0 bg-gray-200"></div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, y: direction > 0 ? 1000 : -1000 }} // Changed x to y
            animate={{ opacity: 1, y: 0 }} // Changed x to y
            exit={{ opacity: 0, y: direction > 0 ? -1000 : 1000 }} // Changed x to y
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="absolute inset-0"
          >
            {/* Using regular image with styling instead of Next.js Image component */}
            <Image
              src={propertyData[currentIndex].image}
              fill
              alt={propertyData[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.5)" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="absolute inset-0 bg-opacity-40">
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center px-4 lg:px-8">
              {/* Left Side: Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white space-y-4 mb-8 lg:mb-0"
              >
                <p className="text-sm md:text-base font-medium">
                  Our Best Featured Item
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Our Featured Items
                </h2>
                <p className="text-sm md:text-base max-w-md">
                  At HouseBox, were redefining the way people find, sell, and
                  invest in properties. our mission.
                </p>
                <button className="bg-[#5856D5]  text-white  px-4 py-2 rounded-md flex items-center space-x-2 transition duration-300">
                  <span>See All Properties</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>

              {/* Right Side: Property Card */}
              <div className="flex justify-center ">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {propertyData.map(
                      (property, index) =>
                        index === currentIndex && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: direction > 0 ? 100 : -100,
                            }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: direction > 0 ? -100 : 100 }} // Changed values for vertical
                            transition={{ duration: 0.3 }}
                            key={property.id}
                            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm"
                          >
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center text-gray-500 text-sm">
                                <MapPin size={16} className="mr-1" />
                                <span>{property.location}</span>
                              </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                              {property.title}
                            </h3>

                            <div className="mb-6">
                              <span className="text-gray-500 line-through mr-2">
                                IDR {property.originalPrice.toLocaleString()}
                              </span>
                              <span className="text-xl font-bold text-orange-500">
                                IDR {property.discountedPrice.toLocaleString()}
                              </span>
                            </div>

                            <button className="bg-[#5856D5]  text-white px-4 py-2 rounded-md w-full flex items-center justify-center space-x-2 transition duration-300">
                              <span>Schedule Visit</span>
                              <ArrowRight size={16} />
                            </button>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                  {/* Carousel Dots */}

                  {/* Carousel Navigation */}
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      aria-label="Previous property"
                      className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-300"
                    >
                      <ChevronUp size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      aria-label="Next property"
                      className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-300"
                    >
                      <ChevronDown size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyCarousel;
