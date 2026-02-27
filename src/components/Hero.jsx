import "./Hero.css";
import profile from "../assets/profile.jpg";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left side: text */}
        <div className="hero-text">
          
          <h1>
            Full-Stack Developer Building Modern, Scalable Web Applications
          </h1>

          <h2 className="highlight">
            I help businesses and startups transform ideas into powerful digital products.
          </h2>

          <p>
            With expertise in React, Node.js, Express, and MongoDB, I develop
            responsive, secure, and performance-driven web applications —
            from intuitive front-end interfaces to reliable backend systems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Start a Project
            </a>
          </div>

          {/* Professional Contact Links */}
          <div className="hero-socials">
            <a
              href="https://wa.me/2349069190561"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://github.com/awololaeinola-lang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:awololaeinola@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* Right side: profile image */}
        <div className="hero-image">
          <img
            src={profile}
            alt="Einola Awolola - Full Stack Developer"
            className="floating"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;