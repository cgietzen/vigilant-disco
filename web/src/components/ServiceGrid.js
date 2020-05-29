import { Link } from "gatsby"
import React from "react"
import ServicePreview from "./servicepreview"

function ServiceGrid(props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}

      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ServicePreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ServiceGrid
