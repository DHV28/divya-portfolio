import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

const projects = [
  {
    name: "PrimeTask – Agile Task Management Web App",
    tag: "Featured · Team Project",
    tech: ["JavaScript", "HTML", "CSS", "Agile"],
    desc: "Full-stack web app for managing product backlogs, sprints, and team workload. Features role-based views for admins and members, interactive dashboards, and time logging capabilities.",
    icon: "📋",
    links: {
      demo: "https://dhv28.github.io/PrimeTask3.github/",
      code: "https://github.com/DHV28/PrimeTask3.github"
    }
  },
  {
    name: "NutriTrack – Nutrition Tracking Application",
    tag: "Personal Project",
    tech: ["JavaScript", "HTML", "CSS"],
    desc: "A web application for tracking daily nutrition and meals. Helps users monitor their dietary intake and maintain healthy eating habits with an intuitive interface.",
    icon: "🥗",
    links: {
      code: "https://github.com/DHV28/NutriTrack"
    }
  },
  {
    name: "WordTrackr – Vocabulary Builder",
    tag: "Personal Project",
    tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
    desc: "Web app for tracking and expanding vocabulary. Add, edit, and organize words with definitions to build language skills systematically.",
    icon: "📚",
    links: {
      demo: "https://dhv28.github.io/wordtrackr.github.io/",
      code: "https://github.com/DHV28/wordtrackr.github.io"
    }
  }
];

const Projects = () => {
  return (
    <section className="section">
      <SectionTitle id="projects" label="Projects" title="Things I’ve built" />
      <div className="cards-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.name} delay={index * 100}>
            <article className="card">
              <div className="card-image">
                <div className="card-image-placeholder">{project.icon}</div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <p className="card-tag">{project.tag}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="card-body">{project.desc}</p>
                <ul className="card-tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="card-links">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link"
                    >
                      Live demo ↗
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
