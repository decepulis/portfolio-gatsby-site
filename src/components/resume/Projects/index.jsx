import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PostPreview from "../../PostPreview"

import { StyledProjects } from "./styles"

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
      <header>
        <h2>Projects</h2>
      </header>
      <section>
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
      </section>
      <p>
        <Link to="/projects/">
          View All {data.totalCount.totalCount} Entries &rarr;
        </Link>
      </p>
    </StyledProjects>
  )
})

export default Projects
