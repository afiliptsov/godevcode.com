import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./reset.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <a href="">Test</a>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
