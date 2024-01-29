import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero id="home" />
        <Skills id="skills" />
        <WorkExperience id="projects" />
        <ContactMe id="contact" />
      </div>
      <Footer />
    </>
  );
}

export default App;
