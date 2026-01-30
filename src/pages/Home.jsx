import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problems from "../components/Problems"
import Solutions from "../components/Solutions";
import BenefitsCTA from "../components/BenefitsCTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#0b0b0f] min-h-screen">

      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <BenefitsCTA />
      <Footer />

    </div>
  );
};

export default Home;