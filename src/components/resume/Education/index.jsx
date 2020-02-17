import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PostPreview from "../../PostPreview"

import { StyledEducationPosts } from "./styles"

const Education = React.forwardRef(({ id }, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        articles: allMarkdownRemark(
          limit: 2
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { regex: "/(education)/" }
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
          filter: { fileAbsolutePath: { regex: "/(education)/" } }
        ) {
          totalCount
        }
      }
    `
  )

  return (
    <section>
      <header id={id} ref={ref}>
        <h2>Education</h2>
      </header>
      <StyledEducationPosts>
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
      </StyledEducationPosts>
      <p>
        <Link to="/education/">
          View All {data.totalCount.totalCount} Entries &rarr;
        </Link>
      </p>
    </section>
  )
})

export default Education
