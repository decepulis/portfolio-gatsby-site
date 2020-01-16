import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostPreview from "./PostPreview"

export default function Education() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 2
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(education)/" } }
        ) {
          totalCount
          edges {
            node {
              id
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
    <section id="education">
      <header>
        <h2>Education</h2>
      </header>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview
          key={node.id}
          title={node.frontmatter.title}
          subtitle={node.frontmatter.subtitle}
          date={node.frontmatter.date}
          description={node.frontmatter.description}
        />
      ))}
      <p>View All {data.allMarkdownRemark.totalCount} Entries &rarr;</p>
    </section>
  )
}
