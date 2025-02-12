// src/sections/Experience.js
import React from "react";
import Section from "../components/Section";
import "./Experience.css";

const Experience = () => {
  return (
    <Section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {/* Full-Stack Software Engineer */}
        <div className="experience-item">
          <span className="date">Oct. 2024 – Present</span>
          <h3>
            Full-Stack Software Engineer · Independent Contractor · Ontario,
            Canada
          </h3>
          <p>
            Worked for a variety of different clients offering a wide range of
            services for different industries. Recently worked for a few
            different pharmacies developing pharmacy web systems with 20+
            features, reducing staff workloads by 80%.
          </p>
          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Firebase</span>
            <span>MySQL</span>
            <span>Nodemailer</span>
            <span>Azure</span>
            <span>WordPress</span>
            <span>PHP</span>
          </div>
        </div>

        {/* Software Engineer at DataAnnotation.tech */}
        <div className="experience-item">
          <span className="date">Jan 2024 – Present</span>
          <h3>Software Engineer · DataAnnotation.tech · Ontario, Canada</h3>
          <p>
            Enhanced AI models by annotating and rating code responses across
            languages, contributing to specialized projects in niche fields and
            proprietary technologies.
          </p>
          <div className="tags">
            <span>Python</span>
            <span>JavaScript</span>
            <span>Go</span>
            <span>R</span>
            <span>C</span>
          </div>
        </div>

        {/* Software Engineer at Evertz Microsystems */}
        <div className="experience-item">
          <span className="date">May 2022 – Aug 2023</span>
          <h3>Software Engineer · Evertz Microsystems · Ontario, Canada</h3>
          <p>
            Streamlined media workflows for live telivision network AMC by
            automating processing tasks with JavaScript and Python, reducing
            workload by 20% and generating $50K in compensation.
          </p>
          <div className="tags">
            <span>JavaScript</span>
            <span>Python</span>
            <span>Media Processing</span>
            <span>Automation</span>
          </div>
        </div>

        {/* Owner and Operator – Desktop Doctor */}
        <div className="experience-item">
          <span className="date">Jun 2020 – May 2022</span>
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
