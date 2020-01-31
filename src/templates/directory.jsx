import React from "react"
import { graphql } from "gatsby"

import PostPreview from "../components/PostPreview"
import { JustAStyledContentMain } from "../components/layout.styles"

export default ({ data, pageContext }) => {
  const pageTitle = pageContext.slug.replace(/\//g, " ")

  return (
    <JustAStyledContentMain>
      <header>
        <h1 style={{ textTransform: "capitalize" }}>{pageTitle}</h1>
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
    </JustAStyledContentMain>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { directory: { eq: $slug } } }
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
