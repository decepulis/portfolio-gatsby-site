import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PostPreview from "../../PostPreview"
import { ThemeContext } from "styled-components"

import { StyledPosts } from "./styles"
import {
  StyledCompanies,
  StyledLogos,
  StyledLogoContainerLink,
} from "./styles.2019"

import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import uc from "./logo-uc.svg"
import bmw from "./logo-bmw.svg"
import midwest from "./logo-midwest.svg"

const Positions = React.forwardRef(({ id }, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        articles: allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { regex: "/(positions)/" }
            frontmatter: { featuredpost: { eq: true } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                date(formatString: "MMMM YYYY")
                description
              }
            }
          }
        }
        totalCount: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(positions)/" } }
        ) {
          totalCount
        }
      }
    `
  )
  const theme = useContext(ThemeContext)

  return (
    <section id={id} ref={ref}>
      <header>
        <h2>Positions</h2>
      </header>
      {theme.id !== "2019" ? (
        <StyledPosts>
          {data.articles.edges.map(({ node }) => (
            <PostPreview
              key={node.id}
              title={node.frontmatter.title}
              subtitle={node.frontmatter.subtitle}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              slug={node.fields.slug}
            />
          ))}
        </StyledPosts>
      ) : (
        <StyledCompanies>
          <p>
            Join the companies and educational&nbsp;institutions that trust
            Darius
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
              to="/positions/2017_bosch/"
              className="ignore-global-style"
            >
              <div className="mask bosch" />
              <img src={bosch} alt="Bosch" />
            </StyledLogoContainerLink>
            <StyledLogoContainerLink
              to="/positions/2015_bmw/"
              className="ignore-global-style"
            >
              <div className="mask bmw" />
              <img src={bmw} alt="BMW" />
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
      <p>
        <Link to="/positions/">
          View All {data.totalCount.totalCount} Positions &rarr;
        </Link>
      </p>
    </section>
  )
})

export default Positions
