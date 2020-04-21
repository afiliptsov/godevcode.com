import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Button = styled.button`
  width: 30px;
  background-color: red;
  height: 30px;
`

const Header = () => (
  <header>
    <Button>Test</Button>
    <h1>Header</h1>
  </header>
)

export default Header
