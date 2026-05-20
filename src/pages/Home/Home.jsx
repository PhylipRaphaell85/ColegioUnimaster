import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Benefits from "../../components/Benefits/Benefits";
import Courses from "../../components/Courses/Courses";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Courses />
      <CTA />
      <Footer />
    </>
  );
}