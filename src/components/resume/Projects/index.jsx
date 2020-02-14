import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostPreview from "../../PostPreview"

import { StyledProjects, StyledProjectPosts, StyledLink } from "./styles"

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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
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
            image={node.frontmatter.featuredimage?.childImageSharp.fluid}
            slug={node.fields.slug}
          />
        ))}
      </StyledProjectPosts>
      <p>
        <StyledLink to="/projects/">
          View All {data.totalCount.totalCount} Entries &rarr;
        </StyledLink>
      </p>
    </StyledProjects>
  )
})

export default Projects
