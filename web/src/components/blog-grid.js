import { Link } from "gatsby"
import React from "react"
import BlogPostPreview from "./blog-post-preview"

function BlogGrid(props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}

      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default BlogGrid
