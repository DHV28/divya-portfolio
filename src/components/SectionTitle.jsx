import React from "react";

const SectionTitle = ({ id, label, title }) => {
  return (
    <div id={id} className="section-header">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
