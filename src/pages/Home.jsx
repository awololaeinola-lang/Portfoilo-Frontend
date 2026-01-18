import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";

import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <Projects />
      <Contact />
    
    </>
  );
}

export default Home;
