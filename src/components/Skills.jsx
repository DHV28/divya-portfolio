import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

const Skills = () => {
  return (
    <section className="section">
      <SectionTitle id="skills" label="Skills" title="What I work with" />
      <div className="skills-grid">
        <ScrollReveal delay={0}>
          <div className="skill-card">
          <h3>Languages &amp; Frameworks</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>SQL</li>
            <li>C++</li>
            <li>HTML &amp; CSS</li>
            <li>Swift</li>
            <li>MIPS Assembly</li>
          </ul>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="skill-card">
          <h3>Web &amp; UX Design</h3>
          <ul>
            <li>React &amp; responsive web interfaces</li>
            <li>DOM manipulation &amp; client-side logic</li>
            <li>Wireframing &amp; prototyping (Figma)</li>
            <li>User story mapping &amp; UX research</li>
            <li>High-fidelity mockups</li>
          </ul>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="skill-card">
          <h3>Software Engineering</h3>
          <ul>
            <li>Object-oriented design &amp; programming</li>
            <li>Unit testing &amp; test-driven development</li>
            <li>CI/CD pipelines &amp; automation</li>
            <li>Agile methodologies (backlog, sprints)</li>
            <li>Version control (Git, GitHub)</li>
          </ul>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="skill-card">
          <h3>Tools &amp; Technologies</h3>
          <ul>
            <li>Supabase</li>
            <li>Tailwind CSS</li>
            <li>Selenium (web scraping &amp; automation)</li>
            <li>IntelliJ IDEA &amp; PyCharm</li>
            <li>VS Code</li>
            <li>Xcode</li>
            <li>Git &amp; GitHub</li>
            <li>Figma (wireframing &amp; prototyping)</li>
            <li>Trello / Agile task boards</li>
          </ul>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
