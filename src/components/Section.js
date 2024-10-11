// src/components/Section.js
import React from "react";
import "./Section.css";

const Section = ({ id, children }) => {
  return (
    <section id={id} className="section">
      <div>{children}</div>
    </section>
  );
};

export default Section;
