import React from "react"

import {
  StyledAbout,
  StyledContainer,
  StyledHeader,
  StyledLead,
  StyledProfile,
  StyledHeroText,
  StyledActionButton,
} from "./styles"

import headshot from "./headshot-bw-web.jpg"

const About = React.forwardRef(({ id }, ref) => {
  return (
    <StyledAbout id={id} ref={ref}>
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
            <a role="button" href="#contact">
              Contact Now &rarr;
            </a>
          </StyledActionButton>
        </StyledHeroText>
      </StyledContainer>
    </StyledAbout>
  )
})

export default About
