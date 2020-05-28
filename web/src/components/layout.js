/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import styles from "modern-css-reset/dist/reset.min.css"
/** @jsx jsx */
import { jsx } from "theme-ui"

function Layout({ children, siteTitle }) {
  return (
    <div sx={{ bg: "white", px: "3" }}>
      <Header siteTitle={siteTitle} />
      <main
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          marginTop: [5],
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
