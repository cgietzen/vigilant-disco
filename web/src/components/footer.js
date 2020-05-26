/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "theme-ui"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle, FooterLink }) => (
  <footer>
    <nav sx={{ display: "flex", flexDirection: "column" }}>
      <Link sx={{ variant: "links.footerNav" }} to="/">
        Contact Us
      </Link>
      <Link sx={{ variant: "links.footerNav" }} to="/">
        LinkedIn
      </Link>
      <Link sx={{ variant: "links.footerNav" }} to="/">
        Instagram
      </Link>
      <Link sx={{ variant: "nav" }} to="/">
        Dribble
      </Link>
      <Link sx={{ variant: "links.footerNav" }} to="/">
        Facebook
      </Link>
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

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
