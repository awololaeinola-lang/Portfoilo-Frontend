import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/Project1.jpg"; 
import project2 from "../assets/Project2.jpg"; 
import project3 from "../assets/Project3.jpg"; 
import project4 from "../assets/Project4.jpg"; 
import project5 from "../assets/Project5.jpg"; 

function Projects() {
  const projects = [
    {
      title: "Niyemi Kitchen",
      description: "A restaurant website showcasing menu, services, and online orders.",
      image: project1,
      github: [
        { label: "GitHub", url: "https://github.com/awololaeinola-lang/Niyemi-kitchen.git" }
      ],
      demo: "https://niyemi-kitche.netlify.app",
    },
    {
      title: "Skycast weather app",
      description: "A weather app that displays current and forecasted weather data.",
      image: project2,
      github: [
        { label: "Frontend", url: "https://github.com/awololaeinola-lang/SkyCast-Frontend.git" },
        { label: "Backend", url: "https://github.com/awololaeinola-lang/SkyCast-backend.git" }
      ],
      demo: "https://skyast.netlify.app",
    },
    {
      title: "Financial Dashboard",
      description: "A finance dashboard for tracking income and expenses.",
      image: project3,
      github: [
        { label: "GitHub", url: "https://github.com/awololaeinola-lang/Finance-dashbaord.git" }
      ],
      demo: "https://persnal-dashboard.netlify.app",
    },
    {
      title: "Kranw Laundry Website",
      description: "A laundry service website showcasing services, pricing, and online booking.",
      image: project4,
      github: [
        { label: "GitHub", url: "https://github.com/awololaeinola-lang/Kranw-Laundry.git" }
      ],
      demo: "https://krawn-laundry.netlify.app",
    },
    {
      title: "EventPro Website",
      description: "An event management website for conferences, schedules, and registrations.",
      image: project5,
      github: [
        { label: "GitHub", url: "https://github.com/awololaeinola-lang/EventPro-Website.git" }
      ],
      demo: "https://eventpro-website.netlify.app",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
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

                {project.github &&
                  project.github.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <FaGithub size={16} /> {repo.label}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;





