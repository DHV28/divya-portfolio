import React from "react";
import SectionTitle from "./SectionTitle.jsx";

const About = () => {
  return (
    <section className="section">
      <SectionTitle id="about" label="About" title="Who I am" />
      <div className="about-content">
        <p>
          I'm a <strong>Year 3 Software Engineering student</strong> at Monash University Malaysia who loves building products at the intersection of software engineering and user experience.
        </p>
        <p>
          Currently working part-time as a <strong>Software Developer at VC Creations PLT</strong>, where I develop web-based solutions and contribute to UI design and feature implementation.
        </p>
        <p>
          I've completed the <strong>100 Days of Code: Python Pro Bootcamp</strong> and earned a <strong>Google UX Design Professional Certificate</strong> (6 courses covering wireframing, prototyping, Figma, and UX research).
        </p>
        <p>
          I'm looking for opportunities in <strong>software engineering, front-end development, and UX-focused roles</strong> where I can contribute to impactful projects.
        </p>
      </div>
    </section>
  );
};

export default About;
