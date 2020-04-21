import React from "react"

import NavBar from "./NavBar"
import Footer from "./footer"
import "./layout.css"
import "./reset.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <a href="">Test</a>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
