import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react"
import useEventListener from "../components/utilities/useEventListener"
import { WindowThemeContext } from "../components/contexts/WindowThemeContext"

import { StyledNavbar, StyledNavList, StyledNavLink } from "./NavBar.styles"

import { throttle } from "lodash"

let scrollTimeout
const scrollElementLeftToHref = (scrollElement, targetHref) => {
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

export default function NavBar({ sectionRefs }) {
  const navRef = useRef()
  const [activeSection, setActiveSection] = useState()

  // Scroll listener to manage nav bar
  const setActiveSectionOnScroll = useCallback(() => {
    if (typeof window === "undefined" && typeof document === "undefined") {
      // SSR protection
      return
    }

    let topRef
    const sectionsReversed = sectionRefs.reduce((acc, element) => {
      acc.unshift(element)
      return acc
    }, [])

    if (
      window.pageYOffset + 50 >
      document.documentElement.scrollHeight - window.innerHeight
    ) {
      // when we're at the bottom of the page, we just default to contactRef
      topRef = sectionsReversed[0]
    } else {
      // Otherwise, the ref'd element to have most recently crossed the top of the screen
      // will be the first to return a negative top value in this .find() fn
      topRef = sectionsReversed.find(ref => {
        return ref.current.getBoundingClientRect().top < 10
      })
    }

    setActiveSection(topRef?.current?.id)
  }, [sectionRefs])

  const [, , currentTheme] = useContext(WindowThemeContext)

  useEventListener(
    "scroll",
    currentTheme?.highlightNavOnScroll
      ? throttle(setActiveSectionOnScroll, 250)
      : () => {}
  )

  useEffect(() => {
    scrollElementLeftToHref(navRef.current, `#${activeSection}`)
  }, [activeSection])

  return (
    <StyledNavbar ref={navRef}>
      <StyledNavList>
        <li>
          <StyledNavLink
            href="#about"
            aria-current={activeSection === "about" ? "section" : null}
          >
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="#positions"
            aria-current={activeSection === "positions" ? "section" : null}
          >
            Positions
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="#education"
            aria-current={activeSection === "education" ? "section" : null}
          >
            Education
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="#projects"
            aria-current={activeSection === "projects" ? "section" : null}
          >
            Projects
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="#skills"
            aria-current={activeSection === "skills" ? "section" : null}
          >
            Skills
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="#contact"
            aria-current={activeSection === "contact" ? "section" : null}
          >
            Contact
          </StyledNavLink>
        </li>
      </StyledNavList>
    </StyledNavbar>
  )
}
