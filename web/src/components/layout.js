/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header.js"

const Layout = ({ children, onHideNav, onShowNav, siteTitle, showNav }) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <main>{children}</main>
    <footer>
      <div>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.sanity.io">Sanity</a> &amp;
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  </>
)

export default Layout
