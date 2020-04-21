import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import links from "../constants/links"

const Button = styled.button`
  width: 30px;
  background-color: red;
  height: 30px;
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
    <nav style={{ display: "flex" }}>
      <Link to="/">
        <img src={logo} alt="GoDevCode logo" />
      </Link>
      <ul style={{ display: "flex" }}>{linkList}</ul>
    </nav>
  )
}

export default NavBar
