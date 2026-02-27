
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Deni-Tech",
      period: "2024 – Present",
      description:
        "At Deni-Tech, I work as a Full-Stack Developer, building and maintaining web applications from front-end to back-end.",
      tasks: [
        "Built responsive user interfaces using React",
        "Developed REST APIs with Node.js and Express",
        "Integrated MongoDB for database management",
        "Collaborated with team members on real-world projects",
      ],
    },
    // Add more experiences here if needed
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h3 className="experience-role">{exp.role}</h3>
              <span className="experience-company">
                {exp.company} | {exp.period}
              </span>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-tasks">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;