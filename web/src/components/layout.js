/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import Header from "./header.js"
import Footer from "./footer.js"
import styles from "modern-css-reset/dist/reset.min.css"
// import "../typography/typography.css"

function Layout({ children, siteTitle }) {
  return (
    <div sx={{ pb: "3" }}>
      <Header siteTitle={siteTitle} />
      <main
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          p: "4",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
