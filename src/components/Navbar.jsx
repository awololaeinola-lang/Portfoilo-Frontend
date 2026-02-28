
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <h2 className="logo">Eniola</h2>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
        <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>

        <button className="theme-switch" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </ul>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;