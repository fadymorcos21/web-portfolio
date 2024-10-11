import React from "react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      {/* Left Column */}
      <aside className="left-column">
        <Sidebar />
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
