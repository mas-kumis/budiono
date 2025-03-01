// import CTA from "./components/CTA";
// import Features from "./components/Features";
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
// import Text from "./components/Text";

export default function Home() {
  return (
    <div>
      <div
        className="h-screen md:h-[600px] w-full  bg-cover bg-center"
        style={{ backgroundImage: 'url("/headers.png")' }}
      >
        <Navbar />
        <Headers />
      </div>
      {/* <Features />
      <Text />
      <CTA /> */}
    </div>
  );
}
