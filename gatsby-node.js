const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Create slug for every MarkdownRemark
  if (
    node.internal.type === `MarkdownRemark` ||
    node.internal.type === `Directory`
  ) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create page for each folder
  const resultDirectories = await graphql(`
    query {
      allDirectory(filter: { fields: { slug: { ne: "/" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  resultDirectories.data.allDirectory.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/directory.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create page for each MarkdownRemark
  const resultMarkdown = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  resultMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
