
import "./Hero.css";
import profile from "../assets/profile.jpg";

import { FaGithub, FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-text">

          <div className="hero-intro">
            <span className="intro-line"></span>
            <span>Hi, I'm Eniola Awolola</span>
          </div>

          <h1>
            I Build
            <span className="gradient-text"> Modern Digital </span>
            Experiences.
          </h1>

          <h2>
            Full-Stack Developer focused on building scalable web applications
            and digital products.
          </h2>

          <p>
            I help businesses and startups turn ideas into powerful,
            responsive, and user-friendly digital experiences using modern
            technologies like React, Next.js, Node.js, Express, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Work
              <FaArrowRight />
            </a>

            <a
              href="/Eniola-Awolola-CV.docx"
              download
              className="btn btn-secondary"
            >
              Download CV
            </a>
                      
          </div>

          {/* Social Links */}
          <div className="hero-bottom">

            <span className="connect-text">
              Let's connect
            </span>

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

        </div>

        {/* Right Side */}
        <div className="hero-image-wrapper">

          <div className="hero-glow"></div>

          <div className="hero-image">
            <img
              src={profile}
              alt="Eniola Awolola - Full Stack Developer"
            />
          </div>

          {/* Floating tech cards */}
          <div className="floating-card card-one">
            <span>⚛</span>
            React
          </div>

          <div className="floating-card card-two">
            <span>⌘</span>
            Node.js
          </div>

          <div className="floating-card card-three">
            <span>◈</span>
            MongoDB
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;