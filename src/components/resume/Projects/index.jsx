import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostPreview from "../../PostPreview"

import { Link } from "gatsby"

const Projects = React.forwardRef(({ id }, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        articles: allMarkdownRemark(
          limit: 7
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
                tags
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
    <section className="projects">
      <header id={id} ref={ref}>
        <h2>Projects</h2>
      </header>
      <section className="project-posts">
        {data.articles.edges.map(({ node }) => (
          <PostPreview
            key={node.id}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
            image={node.frontmatter.featuredimage?.childImageSharp.fluid}
            slug={node.fields.slug}
          />
        ))}
      </section>
      <p>
        <Link className="projects__link" to="/projects/">
          View All {data.totalCount.totalCount} Entries &rarr;
        </Link>
      </p>
    </section>
  )
})

export default Projects
