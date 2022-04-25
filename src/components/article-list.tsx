import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Article from './article'

export default () => (
   <StaticQuery
      query={graphql`query {
         allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
           totalCount
           edges {
             node {
               slug
               id
               frontmatter {
                 title
                 date(formatString: "MMMM YYYY")
               }
               excerpt
             }
           }
         }
       }`
      }

      render={data => (
         <div className="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
            <div>
               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Carnet de voyages</h2>
               <p className="mt-4 text-gray-500">
                  Dans cette rubrique, évadez-vous à travers des récits de voyages, découvrez mes coups de cœur et reportages autour du monde.
               </p>

               <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {data.allMdx.edges.map(({ node }: { node: any }) => (
                     
                     <Article id={node.id}
                        to={node.slug}
                        keywords={""}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        excerpt={node.excerpt} />
                  ))}
               </dl>
            </div>
         </div>
      )} />)