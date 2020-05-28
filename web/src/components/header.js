/** @jsx jsx */
import { jsx, MenuButton } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import HeaderLogo from "./header-logo"
import Menu from "./Menu"

function Header(siteTitle) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        border: "1px dotted black",
        p: [1, null, null],
      }}
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
      <div className="menuWrap">
        <MenuButton
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            if (isMenuOpen === false) {
              alert("menu is not open")
            } else {
              alert("menu is open")
            }
          }}
        />
        <Menu isMenuOpen={isMenuOpen} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
