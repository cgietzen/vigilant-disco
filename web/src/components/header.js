/** @jsx jsx */
import { jsx, MenuButton, Close } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useSpring } from "react-spring"
import Menu from "./Menu"

function Header(siteTitle) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isMenuOpenTransition = useSpring({
    transform: isMenuOpen ? `translateY(0)` : `translateY(-100%)`,
    opacity: isMenuOpen ? 1 : 0,
  })

  return (
    <header
      sx={{
        position: "sticky",
        top: "0",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        bg: "transparent",
        p: [4, null, null],
      }}
    >
      <div>
        <h1>
          <Link
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "black",
              fontSize: [4],
              textDecoration: "none",
              width: "46px",
              height: "46px",
              borderRadius: "50% 50%",
              border: "1px solid black",
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
          }}
          sx={{
            display: `${isMenuOpen ? "none" : "flex"}`,
            height: "46px",
            width: "46px",
            zIndex: "105",
            color: "background",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "1px solid background",
          }}
        />
        <Close
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
          sx={{
            display: `${isMenuOpen ? "flex" : "none"}`,
            position: "relative",
            height: "46px",
            width: "46px",
            zIndex: "105",
            color: "background",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "1px solid background",
          }}
        />
        <Menu isMenuOpen={isMenuOpen} style={isMenuOpenTransition} />
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
