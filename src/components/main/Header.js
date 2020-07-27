import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import './Header.scss'

const links = [
  { href: '/game', text: 'Game', key: 1 },
  { href: '/rank', text: 'Rank', key: 2 },
];

const createNavItem = ({ href, text, key }) => (
    <NavItem key={key}>
    <NavLink to={href} tag={Link} className="item">
        {text}
    </NavLink>
  </NavItem>
);

const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return(
      <div className="header">
        <Container fluid={true}>
          <Navbar id="menu" light expand="md">
            <NavbarBrand href="/" className="title"><h1>Match Memory Game</h1></NavbarBrand>
            <NavbarToggler className="btn-menu" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {links.map(createNavItem)}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
  )
}

export default Header;