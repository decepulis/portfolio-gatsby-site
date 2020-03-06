import React, { useRef, useMemo, useContext } from "react"

import { WindowThemeContext } from "../components/contexts/WindowThemeContext"

import NavBar from "../components/resume/NavBar"

import About from "../components/resume/About"
import Positions from "../components/resume/Positions"
import Education from "../components/resume/Education"
import Skills from "../components/resume/Skills"
import Projects from "../components/resume/Projects"
import Contact from "../components/resume/Contact"

export default () => {
  const [, , currentTheme] = useContext(WindowThemeContext)

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
        <NavBar id="nav" sectionRefs={sectionList} />
        <Positions id="positions" ref={positionsRef} />
        <Education id="education" ref={educationRef} />
        <Projects id="projects" ref={projectsRef} />
        <Skills id="skills" ref={skillsRef} />
        <Contact id="contact" ref={contactRef} />

        <a className="back-to-top" href={currentTheme.navIsTop ? "#nav" : "#"}>
          <span className="back-to-top__arrow">&uarr;</span>
          <span
            className="back-to-top__text"
            aria-hidden="true"
            focusable="false"
          >
            {" "}
            Back{currentTheme.navIsTop ? "" : " To Top"}
          </span>
          <span className="visually-hidden-text">Back to Top</span>
        </a>
      </main>
    </>
  )
}
