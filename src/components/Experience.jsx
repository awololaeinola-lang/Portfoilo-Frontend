
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      icon: <FaCode />,
      role: "Full-Stack Developer",
      company: "Deni-Tech",
      period: "2024 – Present",
      description:
        "Developing modern web applications and digital solutions across the frontend and backend, with a focus on building responsive, functional, and user-friendly products.",
      skills: [
        "React & JavaScript",
        "Next.js",
        "Node.js & Express",
        "MongoDB",
        "REST APIs",
        "Responsive Web Development",
      ],
    },

    {
      icon: <FaLaptopCode />,
      role: "Freelance Web Developer",
      company: "Independent",
      period: "2023 – Present",
      description:
        "Working with individuals and businesses to turn ideas into practical digital experiences, from business websites to custom web applications.",
      skills: [
        "Website Development",
        "UI Implementation",
        "Client Communication",
        "Problem Solving",
        "Website Maintenance",
      ],
    },

    {
      icon: <FaChartLine />,
      role: "Business & Administrative Experience",
      company: "Various Business Operations",
      period: "2021 – Present",
      description:
        "Gained practical experience supporting business operations, customer relationships, administration, and day-to-day coordination while developing an understanding of how businesses operate.",
      skills: [
        "Customer Management",
        "Record Keeping",
        "Business Operations",
        "Communication",
        "Organization",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        {/* Header */}
        <div className="experience-header">
          <span className="section-label">
            <span></span>
            MY JOURNEY
          </span>

          <h2>
            Experience & <span>Background</span>
          </h2>

          <p>
            A combination of technology, business, and practical experience
            that shapes the way I approach problems and build digital
            solutions.
          </p>
        </div>


        {/* Experience Cards */}
        <div className="experience-list">

          {experiences.map((experience, index) => (
            <article className="experience-card" key={index}>

              <div className="experience-icon">
                {experience.icon}
              </div>

              <div className="experience-content">

                <div className="experience-top">

                  <div>
                    <h3>{experience.role}</h3>

                    <span className="experience-company">
                      {experience.company}
                    </span>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-skills">

                  {experience.skills.map((skill, index) => (
                    <span key={index}>
                      <FaCheckCircle />
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* Education */}
        <div className="education-section">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <span className="education-label">
              EDUCATION
            </span>

            <h3>BSc Economics</h3>

            <p className="education-school">
              Usmanu Danfodiyo University
            </p>

            <p className="education-description">
              Studied Economics with a foundation in analytical thinking,
              research, problem solving, and understanding how businesses
              and markets operate.
            </p>

            <span className="education-year">
              Graduated 2025
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;