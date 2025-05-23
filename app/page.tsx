// import * as motion from "motion/react-client";

import Navbar from "../components/layout/Navbar";
import TopBar from "../components/layout/TopBar";
import Headers from "../components/layout/Headers";
import About from "@/components/layout/About";
import Featured from "@/components/layout/Featured";
import HelpSection from "@/components/layout/HelpSection";
import FeaturedPropertyCarousel from "@/components/layout/FeaturedItemCarousel";
import SimpleCarousel from "@/components/layout/Carousel";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Headers />
      <About />
      <Featured />
      <HelpSection />
      <FeaturedPropertyCarousel />
      <SimpleCarousel />
      <div className="h-[1000px]"></div>
    </div>
  );
}
