/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"

import FooterLink from "./FooterLink"

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <nav
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: [5, null, null],
        }}
      >
        <FooterLink to="/">Contact Us</FooterLink>
        <FooterLink to="/">LinkedIn</FooterLink>
        <FooterLink to="/">Instagram</FooterLink>
        <FooterLink to="/">Dribble</FooterLink>
        <FooterLink to="/">Facebook</FooterLink>
      </nav>
      <div sx={{ display: "flex", justifyContent: "center", fontSize: [0] }}>
        © {new Date().getFullYear()} Generic Agency. Detroit-ish
      </div>
      <div
        sx={{
          fontSize: [0, null, null],
          display: "flex",
          justifyContent: "center",
        }}
      >
        Built with <a href="https://www.sanity.io">Sanity</a> &amp;
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
