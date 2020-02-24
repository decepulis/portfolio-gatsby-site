import React, { useRef, useMemo } from "react"

import NavBar from "../components/resume/NavBar"

import About from "../components/resume/About"
import Positions from "../components/resume/Positions"
import Education from "../components/resume/Education"
import Skills from "../components/resume/Skills"
import Projects from "../components/resume/Projects"
import Contact from "../components/resume/Contact"

export default () => {
  const aboutRef = useRef()
  const positionsRef = useRef()
  const educationRef = useRef()
  const projectsRef = useRef()
  const skillsRef = useRef()
  const contactRef = useRef()

  const sectionList = useMemo(
    () => [
      aboutRef,
      positionsRef,
      educationRef,
      projectsRef,
      skillsRef,
      contactRef,
    ],
    []
  )

  return (
    <>
      <About id="about" ref={aboutRef} />
      <main className="main">
        <NavBar sectionRefs={sectionList} />
        <Positions id="positions" ref={positionsRef} />
        <Education id="education" ref={educationRef} />
        <Projects id="projects" ref={projectsRef} />
        <Skills id="skills" ref={skillsRef} />
        <Contact id="contact" ref={contactRef} />
      </main>
    </>
  )
}
