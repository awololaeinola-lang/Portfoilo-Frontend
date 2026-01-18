import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#264de4" },
    { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
    { name: "Express", icon: SiExpress, color: "#111" },
    { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
    { name: "Git", icon: FaGitAlt, color: "#f1502f" },
    { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  ];

  return (
    <section id="skills"  className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Technologies I use to build modern and scalable web applications
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div className="skill-card" key={index}>
                <Icon
                  className="skill-icon"
                  style={{ color: skill.color }}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
