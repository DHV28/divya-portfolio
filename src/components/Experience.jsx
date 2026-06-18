import React from "react";
import SectionTitle from "./SectionTitle.jsx";

const experiences = [
  {
    role: "Software Developer (Part-time)",
    org: "VC Creations PLT",
    period: "Jun 2025 – Present · Kuala Lumpur · Hybrid",
    desc: "Developing web-based software solutions, contributing to UI design, feature implementation, and user story mapping in a hybrid environment."
  },
  {
    role: "President",
    org: "IEEE Monash Malaysia Student Branch",
    period: "Jun 2026 – Present · Selangor, Malaysia",
    desc: "Leading technical events, hackathons, and student workshops. Organizing coding competitions and connecting students with tech industry professionals."
  }
];

const Experience = () => {
  return (
    <section className="section">
      <SectionTitle id="experience" label="Experience" title="Where I’ve been" />
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={exp.role} className="timeline-item">
            <h3>{exp.role}</h3>
            <p className="timeline-org">{exp.org}</p>
            <p className="timeline-period">{exp.period}</p>
            <p>{exp.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
