"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlignJustify, ChevronDown, Search, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        whileInView={{ y: 0 }}
        animate={{ y: 0 }}
        layout
        exit={{ y: -100 }}
        transition={{ duration: 0.3 }}
        className={`bg-white w-full px-[30px] lg:px-[100px] py-4 flex  items-center justify-between ${
          isSticky ? "fixed top-0 left-0 z-50" : "relative"
        }`}
      >
        <div className="flex space-x-2 items-center">
          <Image src={"/Images/Logo.png"} alt="Logo" width={50} height={50} />
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
          <Sheet>
            <SheetTrigger>
              <div className="p-2 bg-[#5856D5] rounded-lg text-white">
                <AlignJustify />
              </div>
            </SheetTrigger>
            <SheetContent className="block lg:hidden">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col px-8 space-y-4 my-8">
                    {navbarlist.map((item, index) => (
                      <div
                        key={index}
                        className="items-center text-[#030E0F]  flex space-x-1 text-[14px]"
                      >
                        <Link href={item.link}>{item.name}</Link>
                      </div>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
