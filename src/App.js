import React from "react";
import Index from "./Pages/Index";
import MenuBar from "./Components/MenuBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import './index.scss';

const App = () => {
  return (
    <div className="app_wrapper">
      <MenuBar />
      <main className="snap_container">
        <section id="home" className="snap_section">
          <Index />
        </section>
        <section id="about" className="snap_section">
          <About />
        </section>
        <section id="projects" className="snap_section">
          <Projects />
        </section>
        <section id="contact" className="snap_section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
