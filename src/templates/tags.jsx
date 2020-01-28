import React from "react"
import { graphql } from "gatsby"

import PostPreview from "../components/PostPreview"
import { JustAStyledContainer } from "../components/layout.styles"

export default ({ data, pageContext }) => {
  return (
    <JustAStyledContainer>
      <header>
        <h1 style={{ textTransform: "capitalize" }}>{pageContext.tag}</h1>
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
    </JustAStyledContainer>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
