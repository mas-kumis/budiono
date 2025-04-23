"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface LocationData {
  id: number;
  city: string;
  image: string;
}

const PropertyLocations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const locations: LocationData[] = [
    { id: 1, city: "New York", image: "/Images/location-1.png" },
    { id: 2, city: "San Diego", image: "/Images/location-2.png" },
    { id: 3, city: "Dallas Texas", image: "/Images/location-3.png" },
    { id: 4, city: "San Francisco", image: "/Images/location-4.png" },
    { id: 5, city: "Los Angeles", image: "/Images/location-5.png" },
    { id: 6, city: "Miami", image: "/Images/location-3.png" },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = locations.length - 1;
    if (newIndex >= locations.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const visibleCards = () => {
    const cards = [];
    const startIndex = currentIndex;
    // Changed to show 4 cards
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % locations.length;
      cards.push(locations[index]);
    }
    return cards;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-8 md:px-[100px] py-16"
    >
      <div className="text-center mb-12">
        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
          Property Location
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Explore Our Property Location
        </h2>
      </div>

      <div className="relative overflow-hidden py-10 px-10">
        <div className="overflow-visible">
          <motion.div className="flex justify-center items-center gap-6">
            <AnimatePresence initial={false} custom={currentIndex}>
              {visibleCards().map((location, index) => (
                <motion.div
                  key={location.id}
                  custom={index}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="relative"
                  style={{
                    width: "235.19px",
                    height: "291.17px",
                    transformOrigin: "center center",
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      zIndex: 20,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    className="relative h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                    style={{
                      transformOrigin: "center center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      fill
                      src={location.image}
                      alt={location.city}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">
                        {location.city}
                      </h3>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#5856D5] p-4 rounded-full shadow-lg z-30 w-12 h-12 flex items-center justify-center hover:shadow-[0_0_20px_rgba(88,86,213,0.5)] transition-shadow duration-300"
        >
          <ChevronLeft size={24} className="text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#5856D5] p-4 rounded-full shadow-lg z-30 w-12 h-12 flex items-center justify-center hover:shadow-[0_0_20px_rgba(88,86,213,0.5)] transition-shadow duration-300"
        >
          <ChevronRight size={24} className="text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyLocations;
