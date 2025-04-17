import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronDown, Search, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  return (
    <div className="bg-white px-[30px] md:px-[100px] py-4 flex  items-center justify-between">
      <div className="flex space-x-2 items-center">
        <Image src={"/Images/Logo.png"} alt="Logo" width={50} height={50} />
        <p className="font-semibold text-[20px]">HOUSEFIND</p>
      </div>
      <div className="hidden md:flex space-x-6 items-center ">
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
      <div className="hidden md:flex space-x-8 items-center">
        <Search />
        <button className="bg-[#5856D5] px-4 py-3 items-center text-white flex space-x-2 rounded-lg">
          <p className="text-[14px]">View Listing</p>
          <ArrowUpRight size={14} strokeWidth={2} />
        </button>
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
