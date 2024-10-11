import React from "react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./App.css";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <div className="app-container">
      {/* Left Column */}
      <aside className="left-column">
        <div className="sidebar">
          <div className="sidebar__inner">
            {/* <div className="sidebar____inner"> */}
            <h1>Fady Morcos</h1>
            <p>
              Software Engineer passionate about building impactful solutions.
            </p>
            <nav className="table-of-contents">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
            <SocialIcons />

            {/* </div> */}
          </div>
        </div>
      </aside>

      {/* Right Column */}
      <main className="content">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
