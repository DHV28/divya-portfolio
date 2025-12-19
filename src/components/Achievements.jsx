import React from "react";
import SectionTitle from "./SectionTitle.jsx";

const Achievements = () => {
  return (
    <section className="section">
      <SectionTitle
        id="achievements"
        label="Achievements & Certifications"
        title="Highlights I’m proud of"
      />
      <div className="section-grid">
        <div className="achievement-block">
          <h3>Hackathons & Competitions</h3>
          <ul>
            <li>
              🥈 <strong>2nd Place – IEEE C3 Hackathon 2025</strong>
              <br />
              16-hour hackathon involving 6 universities in Malaysia.
            </li>
            <li>
              🤖 <strong>Participant – IEEEXtreme</strong>
              <br />
              Global 24-hour competitive programming challenge.
            </li>
          </ul>
        </div>

        <div className="achievement-block">
          <h3>Certifications</h3>
          <ul>
            <li>
              🐍{" "}
              <strong>
                100 Days of Code: The Complete Python Pro Bootcamp
              </strong>{" "}
              – Udemy (Jun 2023)
              <br />
              <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                Python · Web Development · Front-End Development
              </span>
            </li>
            <li>
              🎨{" "}
              <strong>
                Google UX Design Professional Certificate
              </strong>{" "}
              (Mar 2023 – Feb 2024)
              <br />
              <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                6 courses: UX Foundations, Wireframing, Low-Fidelity Prototypes, High-Fidelity Designs in Figma, UX Research & Testing, Design for Social Good
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
