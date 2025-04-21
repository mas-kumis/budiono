"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AlignJustify,
  CircleX,
  ChevronDown,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type NavList = {
  name: string;
  link: string;
};
const navbarlist: NavList[] = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Pages",
    link: "/pages",
  },
  {
    name: "Listing",
    link: "/listing",
  },
  {
    name: "Properties",
    link: "/properties",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          whileInView={{ y: 0 }}
          animate={{ y: 0 }}
          layout
          transition={{ duration: 0.3 }}
          className={`bg-white w-full px-[30px] lg:px-[100px] py-4 flex  items-center justify-between ${
            isSticky ? "fixed top-0 left-0 z-30" : "relative"
          }`}
        >
          <div className="flex space-x-2 items-center">
            <Image
              src={"/Images/Logo.png"}
              alt="Logo"
              style={{ width: "auto", height: "auto" }}
              width={40}
              height={40}
            />
            <p className="font-semibold text-[20px]">HOUSEFIND</p>
          </div>
          <div className="hidden lg:flex space-x-6 items-center ">
            {navbarlist.map((item, index) => (
              <div
                key={index}
                className="items-center text-[#030E0F]  flex space-x-1 text-[14px]"
              >
                <Link href={item.link}>{item.name}</Link>
                <ChevronDown size={14} />
              </div>
            ))}
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <Search />
            <button className="bg-[#5856D5] px-4 py-3 items-center text-white flex space-x-2 rounded-lg">
              <p className="text-[14px]">View Listing</p>
              <ArrowUpRight size={14} strokeWidth={2} />
            </button>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border p-2 rounded-lg cursor-pointer border-slate-300"
            >
              <AlignJustify />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed block lg:hidden inset-0 z-40">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0  bg-black cursor-pointer "
            ></motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed h-screen w-[300px] bg-white shadow-lg rounded-r-lg p-6 z-60"
            >
              <div className="flex justify-end  w-full mb-6">
                <button
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <CircleX />
                </button>
              </div>
              <div className="space-y-4">
                {navbarlist.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.link}
                      className="text-[#030E0F] text-[16px] block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
