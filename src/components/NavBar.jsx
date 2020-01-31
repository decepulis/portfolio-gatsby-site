import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react"
import useEventListener from "../components/utilities/useEventListener"

import { ThemeContext } from "styled-components"

import { StyledNavbar, StyledNavList, StyledNavLink } from "./NavBar.styles"

import { throttle, capitalize } from "lodash"

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
  const theme = useContext(ThemeContext)
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

  useEventListener(
    "scroll",
    theme.highlightNavOnScroll
      ? throttle(setActiveSectionOnScroll, 250)
      : () => {}
  )

  useEffect(() => {
    scrollElementLeftToHref(navRef.current, `#${activeSection}`)
  }, [activeSection])

  return (
    <StyledNavbar ref={navRef}>
      <StyledNavList>
        {sectionRefs.map(
          ({ current }) =>
            current?.id && (
              <li key={current.id}>
                <StyledNavLink
                  href={`#${current.id}`}
                  active={activeSection === current.id}
                >
                  {capitalize(current.id)}
                </StyledNavLink>
              </li>
            )
        )}
      </StyledNavList>
    </StyledNavbar>
  )
}
