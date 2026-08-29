import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaDownload,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      {/* Logo */}
      <a href="#home" className="logo" onClick={closeMenu}>
        Eniola<span>.</span>
      </a>

      {/* Navigation */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>

        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        {/* Mobile theme button */}
        <li className="mobile-theme">
          <button
            className="theme-switch"
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}

            <span>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </span>
          </button>
        </li>

        {/* Mobile CV button */}
        <li className="mobile-cv">
          <a
            href="/Eniola-Awolola-CV.docx"
            download
            onClick={closeMenu}
          >
            <FaDownload />
            Download CV
          </a>
        </li>

      </ul>

      {/* Desktop Actions */}
      <div className="navbar-actions">

        {/* Theme toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={
            theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* CV */}
        <a
          href="/Eniola-Awolola-CV.docx"
          download
          className="nav-cv"
        >
          <FaDownload />
          Download CV
        </a>

      </div>

      {/* Mobile menu */}
      <button
        className="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

    </nav>
  );
}

export default Navbar;


