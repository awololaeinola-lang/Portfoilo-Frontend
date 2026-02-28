
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";

import Navbar from "../components/Navbar";
import "./Home.css";

function Home({ toggleTheme, theme }) {
  return (
    <>
      {/* Fixed Navbar at top */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;