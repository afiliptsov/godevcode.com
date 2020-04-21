import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import links from "../constants/links"
// import { FaAdobe } from "react-icons/fa"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  height: 100px;

  .logo {
    cursor: pointer;
  }
`

const NavBar = () => {
  console.log(links)
  const linkList = links.map(item => {
    return (
      <li key={item.id}>
        <Link to={item.path}>{item.text}</Link>
      </li>
    )
  })

  return (
    <Nav style={{ display: "flex" }}>
      {/* <FaAdobe /> */}
      <div style={{ width: "20%", marginRight: "10%" }}>
        <Link to="/" className="logo">
          <img src={logo} alt="GoDevCode logo" />
        </Link>
      </div>
      <div style={{ width: "70%" }}>
        <ul style={{ display: "flex" }}>{linkList}</ul>
      </div>
    </Nav>
  )
}

export default NavBar
