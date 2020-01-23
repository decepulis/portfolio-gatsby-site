module.exports = {
  siteMetadata: {
    siteUrl:
      process.env.NODE_ENV === "production"
        ? "https://decepulis.netlify.com"
        : "http://localhost:8000",
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
  ],
}
