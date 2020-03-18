import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PostPreview from "../../PostPreview"

import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import uc from "./logo-uc.svg"
import bmw from "./logo-bmw.svg"
import { WindowThemeContext } from "../../contexts/WindowThemeContext"

const Positions = React.forwardRef(({ id }, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        articles: allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { regex: "/(positions)/" }
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
          filter: { fileAbsolutePath: { regex: "/(positions)/" } }
        ) {
          totalCount
        }
      }
    `
  )
  const [, , currentTheme] = useContext(WindowThemeContext)

  return (
    <section className="positions" id={id} ref={ref}>
      {currentTheme?.id !== "twenty-nineteen" ? (
        <>
          <header>
            <h2>Positions</h2>
          </header>
          <section className="position-posts">
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
          <p className="positions-link">
            <Link to="/positions/">
              View All {data.totalCount.totalCount} Positions &rarr;
            </Link>
          </p>
        </>
      ) : (
        <>
          <div className="position-companies">
            <header>
              <h2>
                Join the employers who have trusted Darius with over{" "}
                <Link to="/positions/">
                  {data.totalCount.totalCount}&nbsp;positions
                </Link>
                !
              </h2>
            </header>
            <div className="position-company-logos">
              <Link
                className="position-company-logos__link"
                to="/positions/2018_microsensor"
              >
                <div className="mask microsensor" />
                <img src={microsensor} alt="Microsensor Labs" />
              </Link>
              <Link
                className="position-company-logos__link"
                to="/positions/2015_bmw/"
              >
                <div className="mask bmw" />
                <img src={bmw} alt="BMW" />
              </Link>
              <Link
                className="position-company-logos__link"
                to="/positions/2017_bosch/"
              >
                <div className="mask bosch" />
                <img src={bosch} alt="Bosch" />
              </Link>
              <Link
                className="position-company-logos__link"
                to="/projects/2018_thesis/"
              >
                <div className="mask uc" />
                <img src={uc} alt="University of Cincinnati" />
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  )
})

export default Positions
