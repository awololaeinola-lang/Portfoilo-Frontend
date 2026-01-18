import "./Hero.css";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left side: text */}
        <div className="hero-text">
          <h1>Hi, I’m Einola Awolola – Full-Stack Developer</h1>
          <h3>  I build responive, user-friendly web applications from front-end to back-end. With a focus on React, Node.js, Express, and MongoDB, I create scalable solutions that bring ideas to life</h3>
          <p>Check out my projects below or get in touch to collaborate! </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>

        {/* Right side: profile image */}
        <div className="hero-image">
          <img src={profile} alt="Profile" className="floating" />
        </div>
      
    </div>
      
    </section>
  );

}

export default Hero;
