import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

function Projects() {
  const projects = [
    {
      title: "Niyemi Kitchen",
      description:
        "A restaurant website showcasing menu, services, and online orders.",
      image: project1,
      github: "https://github.com/awololaeinola-lang/Niyemi-kitchen.git",
      demo: "https://niyemi-kitchen.netlify.app",
    },
    {
      title: "Checkly",
      description: "Task management app with full CRUD functionality.",
      image: project2,
      Frontendgithub:
        "https://github.com/awololaeinola-lang/Todo-Frontend.git",
      Backendgithub:
        "https://github.com/awololaeinola-lang/Todo-Backend.git",
      demo: "https://checkly.netlify.app",
    },
    {
      title: "Financial Dashboard",
      description: "A finance dashboard for tracking income and expenses.",
      image: project3,
      github:
        "https://github.com/awololaeinola-lang/Finance-dashbaord.git",
      demo: "https://finance-dashboard.netlify.app",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              {/* Live Demo */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <FaExternalLinkAlt size={16} /> Demo
                </a>
              )}

              {/* Single GitHub */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub size={16} /> GitHub
                </a>
              )}

              {/* Frontend GitHub */}
              {project.Frontendgithub && (
                <a
                  href={project.Frontendgithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub size={16} /> Frontend
                </a>
              )}

              {/* Backend GitHub */}
              {project.Backendgithub && (
                <a
                  href={project.Backendgithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub size={16} /> Backend
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
