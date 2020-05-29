import { Link } from "gatsby"
import React from "react"
import ProjectPostPreview from "./ProjectPostPreview"

function ProjectGrid(props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}

      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ProjectGrid
