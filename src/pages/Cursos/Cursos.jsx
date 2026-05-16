import "./Cursos.css";

import Navbar from "../../components/Navbar/Navbar";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

export default function Courses() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <>
    
      <Navbar />
      <CoursesSection />
      <Footer />
      
    </>
  );
}