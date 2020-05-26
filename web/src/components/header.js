/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from "./header-logo"

const Header = ({ siteTitle }) => (
  <header
    sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
  >
    <div>
      <h1>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "black",
            fontSize: [5],
            textDecoration: "none",
            width: "50px",
            height: "50px",
            borderRadius: "50% 50%",
            border: "1px dotted black",
          }}
          to="/"
        >
          C
        </Link>
      </h1>
    </div>
    <nav
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ul sx={{ display: "flex" }}>
        <li>
          <Link variant="nav" to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link variant="nav" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link variant="nav" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
