import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PostPreview from "../../PostPreview"
import { ThemeContext } from "styled-components"

import { StyledPositions, StyledPosts } from "./styles"
import {
  StyledCompanies,
  StyledLogos,
  StyledLogoContainerLink,
} from "./styles.2019"

import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import uc from "./logo-uc.svg"
import bmw from "./logo-bmw.svg"

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
    <StyledPositions ref={ref}>
      {theme.id !== "2019" ? (
        <>
          <header id={id}>
            <h2>Positions</h2>
          </header>
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
          <p>
            <Link to="/positions/">
              View All {data.totalCount.totalCount} Positions &rarr;
            </Link>
          </p>
        </>
      ) : (
        <>
          <StyledCompanies>
            <header id={id}>
              <h2>
                Join the employers who have trusted Darius with over{" "}
                <Link to="/positions/">
                  {data.totalCount.totalCount}&nbsp;positions
                </Link>
                !
              </h2>
            </header>
            <StyledLogos>
              <StyledLogoContainerLink to="/positions/2018_microsensor">
                <div className="mask microsensor" />
                <img src={microsensor} alt="Microsensor Labs" />
              </StyledLogoContainerLink>
              <StyledLogoContainerLink to="/positions/2015_bmw/">
                <div className="mask bmw" />
                <img src={bmw} alt="BMW" />
              </StyledLogoContainerLink>
              <StyledLogoContainerLink to="/positions/2017_bosch/">
                <div className="mask bosch" />
                <img src={bosch} alt="Bosch" />
              </StyledLogoContainerLink>
              <StyledLogoContainerLink to="/projects/2018_thesis/">
                <div className="mask uc" />
                <img src={uc} alt="University of Cincinnati" />
              </StyledLogoContainerLink>
            </StyledLogos>
          </StyledCompanies>
        </>
      )}
    </StyledPositions>
  )
})

export default Positions
