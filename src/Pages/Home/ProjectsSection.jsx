import React from "react";
import data from "../../data/index.json";
//import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section className="projects--section" id="projects">
      <div className="projects--intro">
        <h2>Projects</h2>
       fir 

      </div>

      <div className="projects--grid">
        {data?.projects?.map((project, index) => (
          <div className="project--card" key={index}>
            <img src={project.image} alt={project.title} className="project--image" />
            <div className="project--content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project--tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project--tag">{tag}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project--link">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
