import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";

const About = () => {
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
  );

  return (
    <section>
      <header>
        <h2>About Me</h2>
      </header>

      <Img fluid={data.file.childImageSharp.fluid} />

      <p>I am a Full-Stack Web&nbsp;Developer from Chicago,&nbsp;IL.</p>
      <p>
        I specialize in Front-End applications and sites, ready to get deep into
        UI/UX, architecture, and tooling. I learn quickly and stuff.
      </p>
    </section>
  );
};

export default About;
