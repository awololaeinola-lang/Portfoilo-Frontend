import "./About.css";
import profile from "../assets/profile.jpg";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="about-heading">
          <span className="section-label">
            <span></span>
            ABOUT ME
          </span>

          <h2>
            Turning ideas into{" "}
            <span className="about-blue">digital experiences.</span>
          </h2>

          <p>
            A little about who I am, what I do, and how I approach building
            digital products.
          </p>
        </div>


        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="about-content">

          {/* LEFT — IMAGE */}

          <div className="about-image-wrapper">

            <div className="about-image-glow"></div>

            <div className="about-image">
              <img
                src={profile}
                alt="Einola Awolola - Full Stack Developer"
              />
            </div>

            {/* Experience badge */}

            <div className="about-badge">
              <strong>Full-Stack</strong>
              <span>Developer</span>
            </div>

          </div>


          {/* RIGHT — TEXT */}

          <div className="about-right">

            <span className="about-intro">
              Hello, I'm Eniola 👋
            </span>

            <h3>
              I build websites and applications that{" "}
              <span>solve real problems.</span>
            </h3>

            <p>
              I’m <strong>Eniola Awolola</strong>, a full-stack developer
              passionate about creating modern, responsive, and scalable
              digital products.
            </p>

            <p>
              I work across both frontend and backend development, turning
              ideas into functional products with clean interfaces,
              reliable systems, and a strong focus on user experience.
            </p>


            {/* =========================
                TECH CARDS
            ========================== */}

            <div className="about-tech">

              <div className="tech-item">
                <div className="tech-icon">
                  <FaCode />
                </div>

                <div>
                  <h4>Frontend</h4>
                  <p>React & modern UI</p>
                </div>
              </div>


              <div className="tech-item">
                <div className="tech-icon">
                  <FaServer />
                </div>

                <div>
                  <h4>Backend</h4>
                  <p>Node.js & Express</p>
                </div>
              </div>


              <div className="tech-item">
                <div className="tech-icon">
                  <FaDatabase />
                </div>

                <div>
                  <h4>Database</h4>
                  <p>MongoDB</p>
                </div>
              </div>

            </div>


            {/* =========================
                BUTTONS
            ========================== */}

            <div className="about-buttons">

              <a
                href="#projects"
                className="about-btn about-btn-primary"
              >
                View My Projects
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="about-btn about-btn-secondary"
              >
                Let's Work Together
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

