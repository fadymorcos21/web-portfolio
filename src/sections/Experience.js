// src/sections/Experience.js
import React from "react";
import Section from "../components/Section";
import "./Experience.css";

const Experience = () => {
  return (
    <Section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <span className="date">2024 — Present</span>
          <h3>Senior Software Engineer · Your Company</h3>
          <p>
            Building and maintaining core components for a large-scale web
            application. Collaborating with cross-functional teams to ensure
            smooth, scalable, and accessible experiences.
          </p>
          <div className="tags">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="experience-item">
          <span className="date">2022 — 2024</span>
          <h3>Lead Engineer · Another Company</h3>
          <p>
            Led the team to develop high-quality websites and applications for
            clients in various industries. Worked closely with design and
            project management teams to deliver engaging digital experiences.
          </p>
          <div className="tags">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>WordPress</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
