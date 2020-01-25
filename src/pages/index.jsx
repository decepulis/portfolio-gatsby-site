import React from "react"

import {
  StyledNavbar,
  StyledNavList,
  StyledArticle,
} from "../components/pages.index.styles.js"

import Layout from "../components/layout"

import About from "../components/resume/About"
import Positions from "../components/resume/Positions"
import Education from "../components/resume/Education"
import Skills from "../components/resume/Skills"
import Projects from "../components/resume/Projects"
import Contact from "../components/resume/Contact"

export default ({ path }) => (
  <Layout path={path}>
    <About id="about" />
    <StyledArticle>
      <StyledNavbar>
        <StyledNavList>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#positions">Positions</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </StyledNavList>
      </StyledNavbar>
      <Positions id="positions" />
      <Education id="education" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
    </StyledArticle>
  </Layout>
)
