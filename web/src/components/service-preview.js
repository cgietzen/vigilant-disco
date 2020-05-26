import { Link } from "gatsby"
import React from "react"
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
// import BlockText from "./block-text"

function ServicePreview(props) {
  return (
    <Link to={`/services/${props.slug.current}`}>
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
      <h3>{props.title}</h3>
      <p>{props.excerpt}</p>
      {/* {props._rawExcerpt && (
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )} */}
    </Link>
  )
}

export default ServicePreview
