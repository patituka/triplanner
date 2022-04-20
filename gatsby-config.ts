
module.exports = {
  siteMetadata: {
    title: `Triplanner`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
   `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "src",
        "path": "./src/"
      },
    }
  ]
};
