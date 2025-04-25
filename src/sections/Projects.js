// src/sections/Projects.js
import React from "react";
import Section from "../components/Section";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "We Care Clinic Pharmacy",
      description:
        "Integrated pharmacy and clinic platform for We Care Clinic Pharmacy featuring online appointment scheduling, prescription service requests, and secure patient messaging.",
      link: "https://we-care-clinic-pharmacy-site.vercel.app/",
      tags: ["Next.js", "React", "Vercel"],
      imageUrl: "/images/wecare.jpg",
    },
    {
      title: "Thompson Square Pharmacy",
      description:
        "Pharmacy website for Thompson Square Pharmacy that supports online prescription submissions, transfers, and refill requests as well as vaccinination appointment bookings. Integrated with a custom built administrative dashbaord for staff website management.",
      link: "http://www.thompsonsquarepharmacy.ca/",
      tags: ["React", "CSS", "Node.js", "GCP", "VMs"],
      imageUrl: "/images/thompsonsquarepharmacy.png",
    },
    {
      title: "Bond Head Pharmacy",
      description:
        "Custom pharmacy website for Bond Head Pharmacy enabling appointment bookings, prescription refills, transfers, and patient communication through a responsive interface.",
      link: "https://bondheadpharmacy.com/",
      tags: ["Next.js", "React", "Tailwind CSS", "AWS Lambda", "DynamoDB"],
      imageUrl: "/images/BondHeadPharmacy.jpg",
    },
    {
      title: "Desktop Doctor",
      description:
        "Service booking site for computer repairs with options for in-home, drop-off, and online consultations.",
      link: "https://desktop-doctor.store/",
      tags: ["React", "CSS", "Netlify"],
      imageUrl: "/images/desktop_doctor.jpg",
    },
    {
      title: "Resistance App",
      description:
        "A digital version of 'The Resistance' game with group voting, real-time interactions, and a custom-built interface. Server currently offline.",
      link: "https://resistance-the-game.netlify.app/",
      tags: ["React Native", "Socket.IO", "Google Cloud"],
      imageUrl: "/images/resistance_app.jpg",
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
