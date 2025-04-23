// import * as motion from "motion/react-client";

import Navbar from "../components/layout/Navbar";
import TopBar from "../components/layout/TopBar";
import Headers from "../components/layout/Headers";
import About from "@/components/layout/About";
import Featured from "@/components/layout/Featured";
import HelpSection from "@/components/layout/HelpSection";
import FeaturedItemsCarousel from "@/components/layout/FeaturedItemCarousel";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Headers />
      <About />
      <Featured />
      <HelpSection />
      <FeaturedItemsCarousel />
      <div className="h-[1000px]"></div>
    </div>
  );
}
