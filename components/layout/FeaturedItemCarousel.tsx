"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FeaturedPropertyProps {
  id: string;
  name: string;
  location: string;
  price: number;
  formattedPrice: string;
  imagePath: string;
  desc: string;
}

// Multiple property data
const featuredProperties: FeaturedPropertyProps[] = [
  {
    id: "60002",
    name: "Moon Light Villa",
    location: "Just Mead East Alfonso",
    price: 1900000,
    formattedPrice: "1,800,000",
    imagePath: "/Images/back-1.png",
    desc: "Luxurious villa with swimming pool and panoramic views.",
  },
  {
    id: "60003",
    name: "Seaside Retreat",
    location: "Coastal Bay, Marina Heights",
    price: 2500000,
    formattedPrice: "2,350,000",
    imagePath: "/Images/back-2.png",
    desc: "Modern beachfront property with private access to the shore.",
  },
  {
    id: "60004",
    name: "Urban Loft Residence",
    location: "Downtown Metro District",
    price: 1250000,
    formattedPrice: "1,150,000",
    imagePath: "/Images/back-3.png",
    desc: "Contemporary loft in the heart of the city with rooftop garden.",
  },
];

const FeaturedItemsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for up, 1 for down
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextProperty = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProperties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProperty = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProperties.length - 1 : prevIndex - 1
    );
  };

  // Animation variants for vertical movement
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Current property
  const property = featuredProperties[currentIndex];

  return (
    <section className="w-full">
      <div className="w-full">
        {/* Main carousel container */}
        <div className="relative w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="w-full"
            >
              {/* Main grid layout */}
              <div className="grid grid-cols-1 relative">
                {/* Image with overlay */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  {/* Dark overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 z-10" />
                  <Image
                    src={property.imagePath}
                    alt={property.name}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-90"
                    priority
                    quality={100}
                  />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 z-20">
                  <div className="flex flex-col h-full px-4 md:px-8 lg:px-24 py-8 md:py-12">
                    {/* Top area */}
                    <div className="flex justify-between items-start mb-auto">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                        Our Best Featured Item
                      </div>

                      {/* Navigation buttons - shown on desktop in the top right */}
                      {!isMobile && (
                        <div className="flex flex-row gap-2">
                          <motion.button
                            onClick={prevProperty}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                            aria-label="Previous property"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </motion.button>
                          <motion.button
                            onClick={nextProperty}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                            aria-label="Next property"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.button>
                        </div>
                      )}
                    </div>

                    {/* Bottom content area with flex */}
                    <div className="flex flex-col md:flex-row justify-between items-end mt-auto">
                      {/* Left side content */}
                      <div className="mb-16 md:mb-0 md:mr-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                          Our Featured <br />
                          Items
                        </h2>
                        <p className="text-white/90 text-sm md:text-base mt-4 max-w-lg">
                          At HouseBox, were redefining the way people find,
                          sell, and invest the properties, our mission.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center text-sm"
                          >
                            See All Properties
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.button>
                        </div>
                      </div>

                      {/* Property info card */}
                      <motion.div
                        className="bg-white rounded-lg shadow-lg p-4 max-w-xs w-full md:w-72"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <div className="bg-amber-50 rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="text-amber-600 text-xs">📍</span>
                          </div>
                          {property.location}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {property.name}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <span className="text-gray-500 line-through text-sm">
                              ${property.price.toLocaleString()}
                            </span>
                            <span className="text-amber-600 font-bold ml-2">
                              ${property.formattedPrice}
                            </span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-1 rounded flex items-center"
                          >
                            Schedule Visit
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.button>
                        </div>
                      </motion.div>

                      {/* Mobile navigation buttons */}
                      {isMobile && (
                        <div className="absolute bottom-28 right-4 flex flex-row gap-2">
                          <motion.button
                            onClick={prevProperty}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                            aria-label="Previous property"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </motion.button>
                          <motion.button
                            onClick={nextProperty}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                            aria-label="Next property"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {featuredProperties.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsCarousel;
