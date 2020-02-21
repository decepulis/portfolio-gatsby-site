import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

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
    <section className="about" id={id} ref={ref}>
      <div className="about-layout">
        <header className="about-layout__header">
          <h2>About Me</h2>
        </header>

        <Img
          className="about-layout__profile"
          fluid={data.file.childImageSharp.fluid}
        />

        <div className="about-layout__text">
          <p className="lead">
            I am a Full-Stack Web&nbsp;Developer from Chicago,&nbsp;IL.
          </p>
          <p>
            I specialize in Front-End applications and sites, ready to get deep
            into UI/UX, architecture, and tooling. I learn quickly and stuff.
          </p>
          <div className="action-btn">
            <a role="button" href="#contact">
              Contact Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About
