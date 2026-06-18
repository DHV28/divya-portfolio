import React from "react";
import SectionTitle from "./SectionTitle.jsx";

const Contact = () => {
  return (
    <section className="section">
      <SectionTitle id="contact" label="Contact" title="Let’s connect" />
      <div className="contact-layout">
        <p>
          I’m open to internship opportunities, student projects, and
          collaborations in software engineering, front-end development, and
          UX-focused work.
        </p>
        <div className="contact-links">
          <p>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/DHV28"
              target="_blank"
              rel="noreferrer"
            >
              github.com/DHV28
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/divya-hamshini"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/divya-hamshini
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
