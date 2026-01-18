import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>

      <div className="experience-card">
        <h3>Full-Stack Developer</h3>
        <span>Deni-Tech | 2024 – Present</span>

        <p>
          At Deni-Tech, I work as a Full-Stack Developer, building and maintaining
          web applications from front-end to back-end.
        </p>

        <ul>
          <li>Built responsive user interfaces using React</li>
          <li>Developed REST APIs with Node.js and Express</li>
          <li>Integrated MongoDB for database management</li>
          <li>Collaborated with team members on real-world projects</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
