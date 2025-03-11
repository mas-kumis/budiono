import Sidebar from "@/app/components/backend/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budiono - Minimal Blog Template",
  description: "Design by SimpleSmart in Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        {children}</body>
    </html>
  );
}
