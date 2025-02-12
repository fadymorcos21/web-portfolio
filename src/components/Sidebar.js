// Sidebar.js
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SocialIcons from "./SocialIcons";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <h1>Fady Morcos</h1>
        <p>Software Engineer passionate about building impactful solutions.</p>
        <nav className="table-of-contents">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Sidebar;
