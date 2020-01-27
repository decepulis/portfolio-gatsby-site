import React from "react"
import { graphql } from "gatsby"

import { StyledArticle } from "./post.styles"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <StyledArticle>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.subtitle}</p>
        <p>{post.frontmatter.date}</p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </StyledArticle>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM YYYY")
      }
    }
  }
`
