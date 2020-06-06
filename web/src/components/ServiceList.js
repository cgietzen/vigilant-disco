/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { Link } from "gatsby"
import React from "react"

function ServiceList(props) {
  return (
    <section sx={{ px: [4], mb: [7] }}>
      <Heading as="h2" sx={{ pb: [3], fontSize: [1], fontWeight: "body" }}>
        Our Services
      </Heading>
      <ul sx={{ display: "flex", flexWrap: "wrap" }}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <Link
                to={`/services/${node.slug.current}`}
                sx={{
                  textDecoration: "none",
                  listStyleType: "none",
                  color: "text",
                  pr: [2],
                  fontSize: [3, null, null],
                  letterSpacing: "-.05rem",
                }}
              >
                {node.title}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default ServiceList
