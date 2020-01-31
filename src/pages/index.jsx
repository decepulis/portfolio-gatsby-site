import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react"
import useEventListener from "../components/utilities/useEventListener"

import { ThemeContext } from "styled-components"

import {
  StyledNavbar,
  StyledNavList,
  StyledMain,
} from "../components/pages.index.styles.js"

import About from "../components/resume/About"
import Positions from "../components/resume/Positions"
import Education from "../components/resume/Education"
import Skills from "../components/resume/Skills"
import Projects from "../components/resume/Projects"
import Contact from "../components/resume/Contact"

import { throttle } from "lodash"

let scrollTimeout
const scrollElementToHref = (scrollElement, targetHref) => {
  if (!targetHref || !scrollElement || !window) {
    return
  }

  const targetElement = scrollElement.querySelector(`a[href="${targetHref}"]`)
  if (!targetElement) {
    return
  }

  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    const {
      left: elLeft,
      width: elWidth,
    } = targetElement.getBoundingClientRect()
    const halfway = window.innerWidth / 2
    const navLoc = elLeft + elWidth / 2
    const offset = navLoc - halfway

    scrollElement.scrollBy({ left: offset, behavior: "smooth" })
  }, 350)
}

export default () => {
  const theme = useContext(ThemeContext)

  const aboutRef = useRef()
  const positionsRef = useRef()
  const educationRef = useRef()
  const projectsRef = useRef()
  const skillsRef = useRef()
  const contactRef = useRef()
  const navRef = useRef()

  const [activeNav, setActiveNav] = useState()

  // Scroll listener to manage nav bar
  const onScroll = useCallback(() => {
    let topRef = contactRef

    if (
      // SSR protection
      typeof window !== "undefined" &&
      typeof document !== "undefined" &&
      // when we're at the bottom of the page, we just default to contactRef
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
      // The ref'd element to have most recently crossed the top of the screen
      // will be the first to return a negative top value in this .find() fn
      topRef = refArray.find(ref => {
        return ref.current.getBoundingClientRect().top < 10
      })
    }

    setActiveNav(topRef?.current?.id)
  }, [setActiveNav])
  useEventListener(
    "scroll",
    theme.highlightNavOnScroll ? throttle(onScroll, 250) : () => {}
  )
  useEffect(() => {
    scrollElementToHref(navRef.current, `#${activeNav}`)
  }, [activeNav])

  return (
    <>
      <About id="about" ref={aboutRef} />
      <StyledMain>
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
      </StyledMain>
    </>
  )
}
