/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import styles from "modern-css-reset/dist/reset.min.css"

function Layout({ children, siteTitle }) {
  return (
    <div sx={{ bg: "#171819", px: "3" }}>
      <Header siteTitle={siteTitle} />
      <main
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          marginTop: [6],
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
