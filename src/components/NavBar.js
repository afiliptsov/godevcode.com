import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

const Button = styled.button`
  width: 30px;
  background-color: red;
  height: 30px;
`

const NavBar = () => {
  return (
    <nav style={{ display: "flex" }}>
      <Link to="/">
        <img src={logo} alt="GoDevCode logo" />
      </Link>
      <ul style={{ display: "flex" }}>
        <li>This is one test</li>
        <li>Two</li>
        <li>Three</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
