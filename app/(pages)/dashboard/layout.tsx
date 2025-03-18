import Sidebar from "@/app/components/backend/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Design by SimpleSmart in Figma",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="px-[300px] overflow-y-auto py-[80px]"> {children}</div>
    </div>
  );
}
