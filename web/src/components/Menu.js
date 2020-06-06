/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import ReactDOM from "react-dom"
import HeaderLink from "./HeaderLink"
import { animated } from "react-spring"

const Menu = ({ isMenuOpen, style }) => {
  return (
    <animated.div
      style={style}
      sx={{
        // display: `${isMenuOpen ? "block" : "block"}`,
        fontSize: "2",
        bg: "text",
        textDecoration: "none",
        lineHeight: "1.125",
        height: "100vh",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        zIndex: "100",
        position: "absolute",
      }}
    >
      <nav
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "right",
          pr: [4, null, null],
          pt: "5rem",
        }}
      >
        <HeaderLink to="/work">Work</HeaderLink>
        <HeaderLink to="/services">Services</HeaderLink>
        <HeaderLink to="/services">About</HeaderLink>
        <HeaderLink to="/services">Careers</HeaderLink>
        <HeaderLink to="/blog">Blog</HeaderLink>
        <HeaderLink to="/services">Contact</HeaderLink>
      </nav>
    </animated.div>
  )
}

export default Menu
