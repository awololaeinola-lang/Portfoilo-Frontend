import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Niyemi Kitchen",
      description:
        "A modern restaurant website designed to showcase the menu, services, and provide customers with an easy way to explore and place orders.",
      image: project1,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: [
        {
          label: "GitHub",
          url: "https://github.com/awololaeinola-lang/Niyemi-kitchen.git",
        },
      ],
      demo: "https://niyemi-kitche.netlify.app",
    },

    {
      number: "02",
      title: "SkyCast Weather App",
      description:
        "A responsive weather application that fetches and displays current weather conditions and forecast information through an API.",
      image: project2,
      technologies: ["React", "Node.js", "API"],
      github: [
        {
          label: "Frontend",
          url: "https://github.com/awololaeinola-lang/SkyCast-Frontend.git",
        },
        {
          label: "Backend",
          url: "https://github.com/awololaeinola-lang/SkyCast-backend.git",
        },
      ],
      demo: "https://skyast.netlify.app",
    },

    {
      number: "03",
      title: "Financial Dashboard",
      description:
        "A clean financial dashboard designed to help users monitor income, expenses, and gain a clearer overview of their finances.",
      image: project3,
      technologies: ["React", "JavaScript", "CSS"],
      github: [
        {
          label: "GitHub",
          url: "https://github.com/awololaeinola-lang/Finance-dashbaord.git",
        },
      ],
      demo: "https://persnal-dashboard.netlify.app",
    },

    {
      number: "04",
      title: "Kranw Laundry Website",
      description:
        "A professional laundry service website showcasing services, pricing, and providing customers with a simple way to make booking enquiries.",
      image: project4,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: [
        {
          label: "GitHub",
          url: "https://github.com/awololaeinola-lang/Kranw-Laundry.git",
        },
      ],
      demo: "https://krawn-laundry.netlify.app",
    },

    {
      number: "05",
      title: "EventPro Website",
      description:
        "An event management website created to showcase conferences, schedules, event information, and registration features.",
      image: project5,
      technologies: ["React", "CSS", "JavaScript"],
      github: [
        {
          label: "GitHub",
          url: "https://github.com/awololaeinola-lang/EventPro-Website.git",
        },
      ],
      demo: "https://eventpro-website.netlify.app",
    },
  ];

  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="projects-header">

          <span className="projects-label">
            <span></span>
            MY WORK
          </span>

          <h2>
            Projects I've{" "}
            <span>built.</span>
          </h2>

          <p>
            A selection of projects that showcase my approach to building
            functional, responsive, and user-focused digital experiences.
          </p>

        </div>


        {/* =========================
            PROJECT GRID
        ========================== */}

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              {/* Project Image */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-number">
                  {project.number}
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-preview"
                  aria-label={`View ${project.title} live demo`}
                >
                  <FaExternalLinkAlt />
                </a>

              </div>


              {/* Project Content */}

              <div className="project-content">

                <div className="project-title-row">

                  <h3>{project.title}</h3>

                  <FaArrowRight className="project-arrow" />

                </div>


                <p className="project-description">
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-technologies">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>


                {/* Links */}

                <div className="project-links">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>


                  {project.github.map((repo) => (

                    <a
                      key={repo.label}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      <FaGithub />
                      {repo.label}
                    </a>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <div className="projects-footer">

          <p>
            More projects and experiments are available on my GitHub.
          </p>

          <a
            href="https://github.com/awololaeinola-lang"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore GitHub
            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;