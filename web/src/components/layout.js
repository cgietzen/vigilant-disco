/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import styles from "modern-css-reset/dist/reset.min.css"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Layout = ({ children, onHideNav, onShowNav, siteTitle, showNav }) => (
  <div sx={{ bg: "white", p: "3" }}>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <main sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
