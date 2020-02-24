import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react"
import useEventListener from "../../components/utilities/useEventListener"
import { WindowThemeContext } from "../../components/contexts/WindowThemeContext"

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
    <nav className="navbar" ref={navRef}>
      <ul className="navlist">
        <li>
          <a
            className="navlist__link"
            href="#about"
            aria-current={activeSection === "about" ? "section" : null}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="navlist__link"
            href="#positions"
            aria-current={activeSection === "positions" ? "section" : null}
          >
            Positions
          </a>
        </li>
        <li>
          <a
            className="navlist__link"
            href="#education"
            aria-current={activeSection === "education" ? "section" : null}
          >
            Education
          </a>
        </li>
        <li>
          <a
            className="navlist__link"
            href="#projects"
            aria-current={activeSection === "projects" ? "section" : null}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="navlist__link"
            href="#skills"
            aria-current={activeSection === "skills" ? "section" : null}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="navlist__link"
            href="#contact"
            aria-current={activeSection === "contact" ? "section" : null}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
