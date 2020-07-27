import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const links = [
  { href: '/game', text: 'Game', key: 1 },
  { href: '/rank', text: 'Rank', key: 2 },
];

const createNavItem = ({ href, text, className, key }) => (
    <NavItem key={key}>
    <NavLink to={href} tag={Link} className={className}>
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
      <div>
        <Navbar id="menu" light expand="md">
          <NavbarBrand href="/">Match Memory Game</NavbarBrand>
          <NavbarToggler className="btn-menu" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
}

export default Header;