import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-neutral-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
