/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import BlockText from "./blocktext"

function ProjectPostPreview(props) {
  return (
    <Link
      to={`/work/${props.slug.current}`}
      sx={{ textDecoration: "none", color: "text" }}
    >
      <div>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <Box sx={{ pt: [5], px: [6], color: "body" }}>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "body", mb: [3] }}>
          {props.title}
        </Heading>
        {props._rawExcerpt && (
          <div sx={{ fontSize: [4], letterSpacing: [0] }}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
      </Box>
    </Link>
  )
}

export default ProjectPostPreview
