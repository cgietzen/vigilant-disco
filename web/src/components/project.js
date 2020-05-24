import { format, distanceInWords, differenceInDays } from "date-fns"
import React from "react"
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import BlockContent from "./block-content"
import Container from "./container"

function Project(props) {
  const { _rawBody, title, mainImage, publishedAt } = props
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <h1>{title}</h1>
        {_rawBody && <BlockContent blocks={_rawBody} />}
        {/* {publishedAt && (
          <div>
            {differenceInDays(new Date(publishedAt), new Date()) > 3
              ? distanceInWords(new Date(publishedAt), new Date())
              : format(new Date(publishedAt), "MMMM Do YYYY")}
          </div>
        )} */}
      </Container>
    </article>
  )
}

export default Project
