import Headers from "./components/Headers";
import Navbar from "./components/Navbar";

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
    </div>
  );
}
