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
} from "./styles"

import headshot from "./headshot-web.jpg"
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
          <div>
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
          </div>
        </StyledContainer>
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
        <StyledWave
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 126"
          aria-hidden="true"
          hidden=""
        >
          <path
            fill="#fff"
            d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
          ></path>
        </StyledWave>
      </StyledSection>
    </>
  )
}
