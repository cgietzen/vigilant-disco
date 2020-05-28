/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import HeaderLink from "./HeaderLink"

const Menu = props => {
  return (
    <Box
      sx={{
        display: `${props.isMenuOpen ? "flex" : "none"}`,
        fontSize: "2",
        backgroundColor: "black",
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
          paddingRight: [4],
          paddingTop: [5],
        }}
      >
        <HeaderLink to="/work">Work</HeaderLink>
        <HeaderLink to="/services">Services</HeaderLink>
        <HeaderLink to="/services">About</HeaderLink>
        <HeaderLink to="/services">Careers</HeaderLink>
        <HeaderLink to="/blog">Blog</HeaderLink>
        <HeaderLink to="/services">Contact</HeaderLink>
      </nav>
    </Box>
  )
}

export default Menu
