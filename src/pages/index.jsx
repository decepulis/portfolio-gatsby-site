import React from "react";

import About from "../components/resume/About";
import Positions from "../components/resume/Positions";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Contact from "../components/resume/Contact";

export default () => {
  return (
    <>
      <About id="about" />
      <Positions id="positions" />
      <Education id="education" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
    </>
  );
};
