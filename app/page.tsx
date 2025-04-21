// import * as motion from "motion/react-client";

import Navbar from "../components/layout/Navbar";
import TopBar from "../components/layout/TopBar";
import Headers from "../components/layout/Headers";
import About from "@/components/layout/About";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Headers />
      <About />
      <div className="h-[1000px]"></div>
    </div>
  );
}
