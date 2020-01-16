import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostPreview from "./PostPreview"

export default function Projects() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 4
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        ) {
          totalCount
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
      }
    `
  )

  return (
    <section id="projects">
      <header>
        <h2>Projects</h2>
      </header>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview
          key={node.id}
          title={node.frontmatter.title}
          subtitle={node.frontmatter.subtitle}
          date={node.frontmatter.date}
          description={node.frontmatter.description}
          slug={node.fields.slug}
        />
      ))}
      <p>View All {data.allMarkdownRemark.totalCount} Entries &rarr;</p>
    </section>
  )
}
