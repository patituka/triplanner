import React from 'react'
import { Link } from 'gatsby'

export default (props: any) => (

   <Link to={props.to}>
      <article key={props.id}>
         <div className="pt-4 border-t border-gray-200">
            <dt className="font-medium text-gray-900">{props.title}</dt>
            <dd className="mt-2 text-sm text-gray-500">{props.date}</dd>
            <dd className="mt-2 text-sm text-gray-500">{props.excerpt}</dd>
         </div>
      </article>
   </Link>

)

