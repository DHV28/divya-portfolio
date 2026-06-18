import React, { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

const TicketToRideReadme = () => (
  <div style={{ fontSize: "0.82rem", lineHeight: "1.7" }}>
    <p style={{ marginBottom: "0.75rem" }}>
      <strong>🖥️ How to Run</strong>
    </p>
    <p style={{ marginBottom: "0.5rem" }}>
      Requires <strong>Java 21</strong> — verify with <code>java -version</code>.{" "}
      <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noreferrer" style={{ color: "var(--accent, #a78bfa)" }}>
        Download here
      </a>{" "}
      if needed.
    </p>
    <ol style={{ paddingLeft: "1.2rem", marginBottom: "0.75rem" }}>
      <li>Download <code>TicketToRide.jar</code> below.</li>
      <li>
        <strong>🪟 Windows:</strong> Right-click the JAR in File Explorer → <em>Open in Terminal</em>, then run:
        <br />
        <code style={{ display: "inline-block", marginTop: "0.25rem", background: "rgba(255,255,255,0.08)", padding: "0.15rem 0.4rem", borderRadius: "4px" }}>java -jar TicketToRide.jar</code>
      </li>
      <li>
        <strong>🍎 macOS:</strong> Open Terminal, navigate to the JAR, and run:
        <br />
        <code style={{ display: "inline-block", marginTop: "0.25rem", background: "rgba(255,255,255,0.08)", padding: "0.15rem 0.4rem", borderRadius: "4px" }}>java -jar TicketToRide.jar</code>
        <br />
        <span style={{ opacity: 0.7 }}>Security warning? Go to System Settings → Privacy &amp; Security → Open Anyway.</span>
      </li>
    </ol>

    <p style={{ marginBottom: "0.5rem" }}>
      <strong>🎮 Creative Extension — Sabotage Route</strong>
    </p>
    <p style={{ marginBottom: "0.4rem" }}>
      A player may spend their entire turn placing temporary construction on an unclaimed route. While under construction, the route requires one extra train card to claim, and the effect lasts for one full round.
    </p>
    <p style={{ marginBottom: "0.4rem" }}>
      Ferry routes are excluded — they already require locomotive cards, and combining both would make them too hard to claim.
    </p>
    <p>Each player may only sabotage once per game, adding a strategic layer to disrupt opponents at a critical moment.</p>
  </div>
);

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
    name: "Ticket to Ride – Digital Board Game",
    tag: "Team Project",
    tech: ["Java"],
    desc: "A digital implementation of the classic Ticket to Ride board game. Play the full game with route-building, train card management, and destination tickets.",
    readme: <TicketToRideReadme />,
    icon: "🚂",
    links: {
      download: "/divya-portfolio/TicketToRide.jar"
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

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
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
        {project.readme && (
          <div style={{ marginTop: "0.5rem" }}>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "0.82rem",
                color: "var(--accent, #a78bfa)",
                textDecoration: "underline",
              }}
            >
              {expanded ? "Hide details ▲" : "Read more ▼"}
            </button>
            {expanded && (
              <div
                style={{
                  marginTop: "0.75rem",
                  padding: "0.75rem",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "8px",
                  color: "inherit",
                }}
              >
                {project.readme}
              </div>
            )}
          </div>
        )}
        <ul className="card-tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="card-links">
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="card-link">
              Live demo ↗
            </a>
          )}
          {project.links.code && (
            <a href={project.links.code} target="_blank" rel="noreferrer" className="card-link">
              Code ↗
            </a>
          )}
          {project.links.download && (
            <a href={project.links.download} download className="card-link">
              Download ↓
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section className="section">
      <SectionTitle id="projects" label="Projects" title="Things I've built" />
      <div className="cards-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.name} delay={index * 100}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
