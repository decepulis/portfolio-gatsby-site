import React, { useCallback, useRef, useState, useEffect } from "react"
import useEventListener from "../components/utilities/useEventListener"

import {
  StyledNavbar,
  StyledNavList,
  StyledArticle,
} from "../components/pages.index.styles.js"

import About from "../components/resume/About"
import Positions from "../components/resume/Positions"
import Education from "../components/resume/Education"
import Skills from "../components/resume/Skills"
import Projects from "../components/resume/Projects"
import Contact from "../components/resume/Contact"

// TODO: use theme context to determine whether to waste cycles on scroll animation
// import { ThemeContext } from "styled-components"

// TODO: make this more... react.
// less references in the dom, maybe move behavior into element
const scrollElementToHref = (scrollElement, targetHref) => {
  if (!targetHref || !scrollElement || !window) {
    return
  }

  const targetElement = scrollElement.querySelector(`a[href="${targetHref}"]`)
  if (!targetElement) {
    return
  }

  const { left: elLeft, width: elWidth } = targetElement.getBoundingClientRect()
  const halfway = window.innerWidth / 2
  const navLoc = elLeft + elWidth / 2
  const offset = navLoc - halfway

  scrollElement.scrollBy({ left: offset, behavior: "smooth" })
}

export default ({ path }) => {
  const aboutRef = useRef()
  const positionsRef = useRef()
  const educationRef = useRef()
  const projectsRef = useRef()
  const skillsRef = useRef()
  const contactRef = useRef()
  const navRef = useRef()

  const [activeNav, setActiveNav] = useState()

  const onScroll = useCallback(() => {
    let topRef = contactRef

    if (
      typeof window !== "undefined" &&
      typeof document !== "undefined" &&
      window.pageYOffset + 50 <
        document.documentElement.scrollHeight - window.innerHeight
    ) {
      const refArray = [
        contactRef,
        skillsRef,
        projectsRef,
        educationRef,
        positionsRef,
        aboutRef,
      ]
      topRef = refArray.find(ref => {
        return ref.current.getBoundingClientRect().top < 10
      })
    }
    setActiveNav(topRef?.current?.id)
  }, [setActiveNav])

  useEventListener("scroll", onScroll)

  useEffect(() => {
    scrollElementToHref(navRef.current, `#${activeNav}`)
  }, [activeNav])

  return (
    <>
      <About id="about" ref={aboutRef} />
      <StyledArticle>
        <StyledNavbar ref={navRef}>
          <StyledNavList>
            <li>
              <a
                href="#about"
                className={activeNav === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#positions"
                className={activeNav === "positions" ? "active" : ""}
              >
                Positions
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={activeNav === "education" ? "active" : ""}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeNav === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeNav === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeNav === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </StyledNavList>
        </StyledNavbar>
        <Positions id="positions" ref={positionsRef} />
        <Education id="education" ref={educationRef} />
        <Projects id="projects" ref={projectsRef} />
        <Skills id="skills" ref={skillsRef} />
        <Contact id="contact" ref={contactRef} />
      </StyledArticle>
    </>
  )
}
