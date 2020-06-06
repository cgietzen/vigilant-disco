/** @jsx jsx */
import { jsx, Flex, Heading } from "theme-ui"
import { Link } from "gatsby"
import React from "react"

const IndexHero = () => (
  <Flex
    sx={{
      minHeight: "90vh",
      flexDirection: "column",
      justifyContent: "center",
      px: [4],
    }}
  >
    <Heading
      as="h1"
      sx={{ fontSize: [5], fontWeight: "body", letterSpacing: "-1" }}
    >
      Generic Agency is a performance agency with expertise in
      <span sx={{ color: "highlight" }}> all things digital.</span>
    </Heading>
  </Flex>
)

export default IndexHero
