import React, { useContext } from "react"

import { ThemeContext } from "styled-components"

import {
  StyledSection,
  StyledContainer,
  StyledHeader,
  StyledLead,
  StyledProfile,
  StyledWave,
  StyledCompanies,
  StyledLogos,
  StyledLogoContainerLink,
  StyledHeroText,
  StyledActionButton,
} from "./styles"

import headshot from "./headshot-bw-web.jpg"
import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import uc from "./logo-uc.svg"
import bmw from "./logo-bmw.svg"
import midwest from "./logo-midwest.svg"

const About = React.forwardRef(({ id }, ref) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledSection id={id} ref={ref}>
      <StyledContainer>
        <StyledHeader>
          <h2>About Me</h2>
        </StyledHeader>

        <StyledProfile
          src={headshot}
          alt="Yep. That's my face, gazing into the camera. I thought I had a pretty nice haircut here."
        />

        <StyledHeroText>
          <StyledLead>
            I am a Full-Stack Web&nbsp;Developer from Chicago,&nbsp;IL.
          </StyledLead>
          <p>
            I specialize in Front-End applications and sites, ready to get deep
            into UI/UX, architecture, and tooling. I learn quickly and stuff.
          </p>
          <StyledActionButton>
            <a className="ignore-global-style" role="button" href="#contact">
              Contact Now &rarr;
            </a>
          </StyledActionButton>
        </StyledHeroText>

        {theme.id === "2019" && (
          <StyledCompanies>
            <p>
              At least 5 companies/
              <wbr />
              educational&nbsp;institutions trust Darius
            </p>
            <StyledLogos>
              <StyledLogoContainerLink
                to="/positions/2018_microsensor"
                className="ignore-global-style"
              >
                <div className="mask microsensor" />
                <img src={microsensor} alt="Microsensor Labs" />
              </StyledLogoContainerLink>
              <StyledLogoContainerLink
                to="/positions/2015_bmw/"
                className="ignore-global-style"
              >
                <div className="mask bmw" />
                <img src={bmw} alt="BMW" />
              </StyledLogoContainerLink>
              <StyledLogoContainerLink
                to="/positions/2017_bosch/"
                className="ignore-global-style"
              >
                <div className="mask bosch" />
                <img src={bosch} alt="Bosch" />
              </StyledLogoContainerLink>
              <StyledLogoContainerLink
                to="/projects/2019_mmb_site/"
                className="ignore-global-style"
              >
                <div className="mask midwest" />
                <img src={midwest} alt="Midwest Microbio" />
              </StyledLogoContainerLink>
              <StyledLogoContainerLink
                to="/projects/2018_thesis/"
                className="ignore-global-style"
              >
                <div className="mask uc" />
                <img src={uc} alt="University of Cincinnati" />
              </StyledLogoContainerLink>
            </StyledLogos>
          </StyledCompanies>
        )}
      </StyledContainer>
      {theme.id === "2019" && (
        <StyledWave aria-hidden="true" hidden="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1920 170"
          >
            <defs>
              <linearGradient
                x1="49.253%"
                y1="85.804%"
                x2="49.253%"
                y2="43.074%"
                id="a"
              >
                <stop stopColor="#FFF" offset="0%"></stop>
                <stop stopColor="#FFF" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none">
              <path
                d="M1920 4.719v69.5c-362.63 60.036-692.797 55.536-990.5-13.5C565.833-23.615 256 12.813 0 170L1 4.719h1919z"
                fill="url(#a)"
                transform="rotate(180 960.5 87.36)"
              ></path>
              <path
                d="M1 170V99c269.033-70.44 603.533-66.44 1003.5 12C1494 207 1921 4.719 1921 4.719L1920 170H1z"
                fillOpacity=".3"
                fill="#FFF"
              ></path>
              <path
                d="M1 170.75V99C373.115 4.216 705.281-4.951 997.5 71.5c365.667 95.667 673.5 73.406 923.5-66.781l-1 166.031H1z"
                fillOpacity=".3"
                fill="#FFF"
              ></path>
              <path
                d="M1 170v-67C400.333-1.333 744.167-19 1032.5 50c432.5 103.5 754 19.219 888.5-45.281l-1 166.031L1 170z"
                fillOpacity=".35"
                fill="#FFF"
              ></path>
            </g>
          </svg>
        </StyledWave>
      )}
    </StyledSection>
  )
})

export default About
