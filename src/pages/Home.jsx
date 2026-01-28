import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problems from "../components/Problems"

const Home = () => {
  return (
    <div className="bg-[#0b0b0f] min-h-screen">

      <Navbar />
      <Hero />
      <Problems />

    </div>
  );
};

export default Home;