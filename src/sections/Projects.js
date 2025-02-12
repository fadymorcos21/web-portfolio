// src/sections/Projects.js
import React from "react";
import Section from "../components/Section";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Thompson Square Pharmacy",
      description:
        "Pharmacy website for Thompson Square Pharmacy that supports online prescription submissions, transfers, and refill requests as well as vaccinination appointment bookings. Integrated with a custom built administrative dashbaord for staff website management.",
      link: "http://www.thompsonsquarepharmacy.ca/",
      tags: ["React", "CSS", "Node.js", "GCP", "VMs"],
      imageUrl: "/images/thompsonsquarepharmacy.png", // Replace with actual image path
    },
    {
      title: "Desktop Doctor",
      description:
        "Service booking site for computer repairs with options for in-home, drop-off, and online consultations.",
      link: "https://happy-visvesvaraya-d77224.netlify.app/",
      tags: ["React", "CSS", "Netlify"],
      imageUrl: "/images/desktop_doctor.jpg", // Replace with actual image path
    },
    {
      title: "Resistance App",
      description:
        "A digital version of 'The Resistance' game with group voting, real-time interactions, and a custom-built interface. Server currently offline.",
      link: "https://resistance-the-game.netlify.app/",
      tags: ["React Native", "Socket.IO", "Google Cloud"],
      imageUrl: "/images/resistance_app.jpg", // Replace with actual image path
    },
  ];

  return (
    <Section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
