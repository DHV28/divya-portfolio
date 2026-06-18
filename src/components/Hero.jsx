import React from "react";

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Software Engineering Student · Monash University</p>
        <h1>
          Hi, I’m <span className="accent">Divya Hamshini</span> 👋
        </h1>
        <p className="hero-subtitle">
          I build web applications and Python projects with a strong focus on
          user experience, clean interfaces, and teamwork. Currently a Year 3
          Software Engineering student and part-time
          Software Developer.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <div className="hero-links">
            <a
              href="https://github.com/DHV28"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/divya-hamshini"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <p className="hero-badge">Currently</p>
        <h3>Software Developer · VC Creations PLT</h3>
        <p>Web-based software · User story mapping · Hybrid role in Kuala Lumpur.</p>
      </div>
    </section>
  );
};

export default Hero;
