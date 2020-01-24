import React from "react"

import {
  StyledSection,
  StyledContainer,
  StyledHeader,
  StyledLead,
  StyledProfile,
  StyledWave,
  StyledCompanies,
  StyledLogos,
  StyledHeroText,
} from "./styles"

import headshot from "./headshot-bw-web.jpg"
import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import bmw from "./logo-bmw.svg"
import midwest from "./logo-midwest.svg"

export default function About() {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledHeader>
            <h2>About Me</h2>
          </StyledHeader>
          <StyledProfile
            src={headshot}
            alt="Yep. That's my face, gazing into the camera. I thought I had a pretty nice haircut here, too."
          />
          <StyledHeroText>
            <StyledLead>
              I am a Full-Stack Web Developer from Chicago, IL.
            </StyledLead>
            <p>
              I specialize in Front-End, ready to get deep into UI/UX,
              architecture, and tooling.
            </p>
            <p>
              Maybe I could add another paragraph here, too, but I should keep
              it short and sweet.
            </p>
          </StyledHeroText>
          <StyledCompanies>
            <p>
              More than 4 companies
              <br />
              and at least some coworkers trust Darius
            </p>
            <StyledLogos>
              {/* todo: turn these into clip paths or something? or just do the zeit method */}
              <img src={microsensor} alt="Microsensor Labs" />
              <img src={bosch} alt="Bosch" />
              <img src={bmw} alt="BMW" />
              <img src={midwest} alt="Midwest Microbio" />
            </StyledLogos>
          </StyledCompanies>
        </StyledContainer>
        <StyledWave>
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
        {/* <StyledWave
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 126"
          aria-hidden="true"
          hidden=""
        >
          <path
            fill="#fff"
            d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
          ></path>
        </StyledWave> */}
      </StyledSection>
    </>
  )
}
