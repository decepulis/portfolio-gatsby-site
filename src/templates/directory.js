import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import PostPreview from "../components/PostPreview"

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <header>
        <h1>{pageContext.slug}</h1>
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
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: $slug } }
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
