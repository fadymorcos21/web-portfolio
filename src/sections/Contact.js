// src/sections/Contact.js
import React from "react";
import Section from "../components/Section";
import "./Contact.css"; // Import a separate CSS file for custom styles if needed
import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Icons for email and LinkedIn

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contact</h2>
      <p>If you'd like to connect, feel free to reach out to me!</p>
      <ul className="contact-list">
        <li>
          <FaEnvelope className="contact-icon" />
          <span>Email:</span>
          <a href="mailto:fadymorcos22@gmail.com">fadymorcos22@gmail.com</a>
        </li>
        <li>
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/fady-morcos-b6b507170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fady Morcos
          </a>
        </li>
      </ul>
      <div className="footer-note">
        <p>Designed and built by Fady Morcos</p>
      </div>
    </Section>
  );
};

export default Contact;
