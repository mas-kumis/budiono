import Navbar from "@/app/components/backend/Navbar";
import Sidebar from "@/app/components/backend/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="ml-52 bg-slate-900 text-white p-8 min-h-screen mt-16">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
