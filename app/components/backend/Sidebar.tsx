import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed text-white bg-neutral-800 shadow-xl h-screen w-[250px]">
      <div className="flex flex-col gap-y-12 pl-8 pr-2 py-8">
        <h4 className="text-2xl underline font-black">Dashboard</h4>
        <ul className="px-2 gap-4 flex flex-col">
          <Link href="/dashboard/">
            <li className="hover:bg-neutral-700 p-2 rounded-lg">My Blog</li>
          </Link>
          <Link href="/dashboard/create/">
            <li className="hover:bg-neutral-700 p-2 rounded-lg">Create Blog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
