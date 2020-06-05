/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"

export default props => (
  <Link
    {...props}
    sx={{
      fontSize: "4",
      textDecoration: "none",
      lineHeight: 1.125,
      color: "text",
    }}
  />
)
