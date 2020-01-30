import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostPreview from "../../PostPreview"

import { StyledProjects, StyledProjectPosts, StyledLink } from "./styles"
import { JustAStyledContainer } from "../../layout.styles"

const Projects = React.forwardRef(({ id }, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        articles: allMarkdownRemark(
          limit: 6
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { regex: "/(projects)/" }
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
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        ) {
          totalCount
        }
      }
    `
  )

  return (
    <StyledProjects id={id} ref={ref}>
      <JustAStyledContainer>
        <header>
          <h2>
            Side-
            <wbr />
            Projects
          </h2>
        </header>
        <StyledProjectPosts>
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
        </StyledProjectPosts>
        <p>
          <StyledLink to="/projects/">
            View All {data.totalCount.totalCount} Entries &rarr;
          </StyledLink>
        </p>
      </JustAStyledContainer>
    </StyledProjects>
  )
})

export default Projects
