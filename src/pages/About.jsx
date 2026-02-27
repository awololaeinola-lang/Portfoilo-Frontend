
import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about-container">
      {/* Left side: text */}
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          I’m <strong>Einola Awolola</strong>, a full-stack developer who builds 
          modern, scalable web applications that help businesses and startups 
          solve real-world problems and achieve their goals.
        </p>

        <p className="about-skills">
          💻 React | Node.js | Express | MongoDB <br />
          🚀 Scalable web applications & responsive interfaces <br />
          📈 Delivering digital products that create value and results
        </p>

        <div className="about-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Start a Project</a>
        </div>
      </div>

      {/* Right side: profile image */}
      <div className="about-right">
        <img src={profile} alt="Einola Awolola - Full Stack Developer" />
      </div>
    </section>
  );
}

export default About;