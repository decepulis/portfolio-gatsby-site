const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const _ = require(`lodash`);

// Page Creation
const getDirFromSlug = (slug) => {
  // turns "/education/ms/" into ["", "education" "ms", ""] ...
  const slugArr = slug.split("/");
  // ... into ["", "education", ""] and then "/education/""
  return slugArr.filter((s, idx) => idx !== slugArr.length - 2).join("/");
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Create slug for every MarkdownRemark
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const directory = getDirFromSlug(slug);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `directory`,
      value: directory,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create page for each directory, tag, and MarkdownRemark
  const resultMarkdown = await graphql(`
    query {
      directoryGroup: allMarkdownRemark {
        group(field: fields___directory) {
          fieldValue
        }
      }

      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  resultMarkdown.data.directoryGroup.group.forEach((directory) => {
    createPage({
      path: `${directory.fieldValue}`,
      component: path.resolve(`./src/templates/directory.jsx`),
      context: {
        slug: `${directory.fieldValue}`,
      },
    });
  });

  resultMarkdown.data.tagsGroup.group.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tags.jsx`),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  resultMarkdown.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.jsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
