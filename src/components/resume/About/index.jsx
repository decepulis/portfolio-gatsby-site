import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  StyledAbout,
  StyledContainer,
  StyledHeader,
  StyledLead,
  StyledProfile,
  StyledHeroText,
  StyledActionButton,
} from "./styles"

const About = React.forwardRef(({ id }, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "headshot-bw-web" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <StyledAbout id={id} ref={ref} data-scroll-id={id}>
      <StyledContainer>
        <StyledHeader>
          <h2>About Me</h2>
        </StyledHeader>

        <StyledProfile fluid={data.file.childImageSharp.fluid} />

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
