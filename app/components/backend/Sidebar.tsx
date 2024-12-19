import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-slate-800 text-white font-semibold  px-4 w-52 h-screen py-6 space-y-6 fixed left-0 top-0">
      <Link href="#">Logo</Link>
      <div className="space-y-3 flex flex-col">
        <Link href="#" className="hover:text-lime-400">
          Dashboard
        </Link>
        <Link href="/dashboard" className="hover:text-lime-400">
          Catalog
        </Link>
        <Link href="/dashboard/customer" className="hover:text-lime-400">
          Customers
        </Link>
        <Link href="/dashboard/market" className="hover:text-lime-400">
          Market
        </Link>
        <Link href="/dashboard/farmers" className="hover:text-lime-400">
          Farmers
        </Link>
        <Link href="/dashboard/orders" className="hover:text-lime-400">
          Orders
        </Link>
        <Link href="#" className="hover:text-lime-400">
          Setting
        </Link>
        <Link href="#" className="hover:text-lime-400">
          Staff
        </Link>
        <Link href="#" className="hover:text-lime-400">
          Online Store
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
