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
          <span className="date">Jan 2024 — Present</span>
          <h3>AI Training Specialist · Data Annotation</h3>
          <p>
            Enhanced AI models by annotating and rating code responses across
            languages, contributing to specialized projects in niche fields and
            proprietary technologies.
          </p>
          <div className="tags">
            <span>AI</span>
            <span>Python</span>
            <span>Data Annotation</span>
            <span>Machine Learning</span>
          </div>
        </div>

        <div className="experience-item">
          <span className="date">May 2022 — Aug 2023</span>
          <h3>Software Engineer · Evertz Microsystems</h3>
          <p>
            Streamlined media workflows for AMC using JavaScript and Python,
            optimizing processing and generating $50k+ in revenue.
          </p>
          <div className="tags">
            <span>JavaScript</span>
            <span>Python</span>
            <span>Media Processing</span>
            <span>Unix</span>
          </div>
        </div>

        <div className="experience-item">
          <span className="date">Jun 2020 — May 2022</span>
          <h3>Owner and Operator · Desktop Doctor</h3>
          <p>
            Resolved diverse software/hardware issues, leveraging a deep
            understanding of computer systems. Built and maintained
            service-booking website and database.
          </p>
          <div className="tags">
            <span>React</span>
            <span>MySQL</span>
            <span>Web Development</span>
            <span>Heroku</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
