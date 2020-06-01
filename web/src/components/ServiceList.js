/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { Link } from "gatsby"
import React from "react"

function ServiceList(props) {
  console.log(props)
  return (
    <section>
      <Heading as="h2">Our Services</Heading>
      <ul sx={{ p: "0", display: "flex", flexWrap: "wrap" }}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <Link
                to={`/services/${node.slug.current}`}
                sx={{
                  textDecoration: "none",
                  listStyleType: "none",
                  color: "background",
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
