import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

const designs = [
  {
    name: "Concert Ticketing App",
    tag: "UX Design · Figma",
    desc: "Complete user experience design for a concert ticketing platform. Includes user flows, wireframes, and high-fidelity prototypes focused on seamless ticket discovery and purchase.",
    icon: "🎫",
    link: "https://www.figma.com/design/Fn1dNoY3YXMwyjOGrgcUtv/Concert-Ticketing-App?node-id=0-1&p=f&t=O3dRJY3IHxCRDE3P-0"
  },
  {
    name: "Mobile App Wireframe",
    tag: "UX Design · Figma",
    desc: "Wireframe and prototype for a mobile application. Focuses on intuitive navigation patterns and user-centered design principles.",
    icon: "📱",
    link: "https://www.figma.com/design/J8goFRWsusyISY5qooCFY5/Untitled?node-id=0-1&p=f&t=fC1ghcM7pU306YEl-0"
  }
];

const DesignWork = () => {
  return (
    <section className="section">
      <SectionTitle id="design" label="Design Work" title="UX & UI Projects" />
      <div className="cards-grid">
        {designs.map((design, index) => (
          <ScrollReveal key={design.name} delay={index * 100}>
            <article className="card">
              <div className="card-image">
                <div className="card-image-placeholder">{design.icon}</div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <p className="card-tag">{design.tag}</p>
                  <h3>{design.name}</h3>
                </div>
                <p className="card-body">{design.desc}</p>
                <div className="card-links">
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View in Figma ↗
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default DesignWork;
