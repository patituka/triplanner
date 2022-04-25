import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";


const Post = ({ data }: { data: any }) => {
  console.log(data);
  const post = data.mdx

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block py-6 text-white xl:py-8">{post.frontmatter.title}</span>
      </h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  )
}

export const query = `graphql
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      id
      frontmatter {
        title
        keywords
      }
    }
  }
`

export default Post;