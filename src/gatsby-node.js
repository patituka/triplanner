require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    console.log(node);

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise(resolve => {
        graphql(`
      {
        allMdx {
            nodes {
                slug
            }
          }
      }`
        ).then(result => {
            console.log(result)
            result.data.allMdx.edges.forEach(({ node }) => {
                createPage({
                    path: `${node.slug}` ,
                    component: path.resolve('./src/templates/post.tsx'),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            resolve()
        })
    })
}