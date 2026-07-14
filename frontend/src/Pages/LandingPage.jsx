import Announcement from "../Components/home/Announcement";
import Navbar from "../Components/layout/Navbar";
import Hero from "../Components/home/hero";
import LoginCard from "../Components/home/LoginCard";
import Services from "../Components/home/Services";
import Footer from "../Components/layout/Footer";
import MapSection from "./MapSection";
function LandingPage() {
  return (
    <>
      <Announcement/>
      <Navbar />
      <Hero />
      <LoginCard />
      <Services/>
      <MapSection/>
      <Footer/>
    </>
  );
}

export default LandingPage;