"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HelpItemProps {
  id: number;
  title: string;
  imagePath: string;
}

const helpData: HelpItemProps[] = [
  {
    id: 1,
    title: "Buy A Property",
    imagePath: "/Images/help-1.png",
  },
  {
    id: 2,
    title: "Sell A Property",
    imagePath: "/Images/help-2.png",
  },
  {
    id: 3,
    title: "Rent A Property",
    imagePath: "/Images/help-3.png",
  },
];

const HelpItem: React.FC<HelpItemProps> = ({ title, imagePath }) => {
  return (
    <motion.div
      className="bg-gray-100 rounded-lg p-6 flex flex-col items-center"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-40 w-50 mb-4">
        <Image src={imagePath} alt={title} fill objectFit="contain" />
      </div>
      <h3 className="text-lg bg-white px-4  py-1 font-medium text-gray-800">
        {title}
      </h3>
    </motion.div>
  );
};

const HelpSection: React.FC = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#d3e6e5] text-[#073B3A] text-sm px-4 py-1 mb-4">
            3 Step To Buy Sell Property
          </div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            See How Realton Can Help
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-16">
          {helpData.map((item) => (
            <HelpItem
              key={item.id}
              id={item.id}
              title={item.title}
              imagePath={item.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
