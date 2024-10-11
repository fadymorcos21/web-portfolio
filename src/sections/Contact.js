// src/sections/Contact.js
import React from "react";
import Section from "../components/Section";

const Contact = () => {
  return (
    <Section id="contact">
      <p>Feel free to get in touch!</p>
      <ul>
        <li>Email: your-email@example.com</li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/yourprofile">LinkedIn Profile</a>
        </li>
      </ul>
    </Section>
  );
};

export default Contact;
