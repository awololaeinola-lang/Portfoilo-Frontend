import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack developer with experience in React, Node.js, Express, and MongoDB.
          I love solving real-world problems and building products that deliver value to users and businesses.
        </p>

        <p className="about-skills">
          💻 React | Node.js | Express | MongoDB <br />
          🚀 Building scalable web applications <br />
          📈 Passionate about solving real-world problems
        </p>

        <div className="about-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="about-right">
        <img src={profile} alt="Eniola Awolola" />
      </div>
    </section>
  );
}

export default About;
