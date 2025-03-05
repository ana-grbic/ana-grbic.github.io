import React, { useState } from 'react';
import './App.css';
import './style.css';
import './script.js';

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div>
      <header>
        <h1>ANA'S</h1>
        <p className="subtitle">collection of projects</p>
        <div className="links">
          <a href="#projects" onClick={() => setActiveSection("projects")}>PROJECTS</a>
          <a href="#about" onClick={() => setActiveSection("about")}>ABOUT ME</a>
        </div>
      </header>

      <main>
        {activeSection === "about" && (
          <section id="about" className="content active">
            <p>Hi, I'm Ana!</p>
          </section>
        )}

        {activeSection === "projects" && (
          <section id="projects" className="content active">
            <article>
              <h3>Project 1: ?</h3>
              <p>Project description, video, link to repository...</p>
            </article>
            <article>
              <h3>Project 2: ?</h3>
              <p>Project description, video, link to repository...</p>
            </article>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
