import React from "react"

import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"

import { JustAStyledHomeContainer } from "../components/layout.styles"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <JustAStyledHomeContainer>
    <h1>Tags</h1>
    <ul>
      {group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </JustAStyledHomeContainer>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
