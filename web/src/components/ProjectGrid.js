/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import ProjectPostPreview from "./ProjectPostPreview"

function ProjectGrid(props) {
  let gap = 7

  return (
    <div sx={{ mb: [7] }}>
      {props.title && <h2>{props.title}</h2>}

      <ul sx={{ display: "grid", gridGap: [gap] }}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} sx={{}}>
              <ProjectPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ProjectGrid
