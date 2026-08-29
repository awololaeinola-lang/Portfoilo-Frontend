import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: FaHtml5,
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      category: "Frontend",
    },
    {
      name: "React",
      icon: FaReact,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      category: "Backend",
    },
    {
      name: "Express",
      icon: SiExpress,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "Database",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      category: "Tools",
    },
    {
      name: "Postman",
      icon: SiPostman,
      category: "Tools",
    },
  ];

  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="skills-header">

          <span className="skills-label">
            <span></span>
            MY TECH STACK
          </span>

          <h2>
            Tools I use to{" "}
            <span>build great products.</span>
          </h2>

          <p>
            Technologies and tools I use to create responsive interfaces,
            scalable backend systems, and reliable digital products.
          </p>

        </div>


        {/* =========================
            SKILLS GRID
        ========================== */}

        <div className="skills-grid">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (
              <div
                className="skill-card"
                key={skill.name}
                style={{
                  "--delay": `${index * 0.07}s`,
                }}
              >

                <div className="skill-icon">
                  <Icon />
                </div>

                <div className="skill-info">

                  <h3>{skill.name}</h3>

                  <span>{skill.category}</span>

                </div>

              </div>
            );
          })}

        </div>


        {/* =========================
            BOTTOM STAT
        ========================== */}

        <div className="skills-bottom">

          <div className="skills-stat">
            <strong>11+</strong>
            <span>Technologies</span>
          </div>

          <div className="skills-divider"></div>

          <p>
            Always learning, experimenting, and improving my development
            workflow.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Skills;