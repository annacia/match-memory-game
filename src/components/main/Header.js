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

import style from '../../assets/style/main.module.scss'

const links = [
  { href: '/game', text: 'Game', key: 1 },
  { href: '/rank', text: 'Rank', key: 2 },
];

const createNavItem = ({ href, text, key }) => (
    <NavItem key={key}>
    <NavLink to={href} tag={Link}>
        <span className={style.item}>{text}</span>
    </NavLink>
  </NavItem>
);

const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return(
      <div className={style.header}>
        <Container fluid={true}>
          <Navbar id="menu" light expand="md">
            <NavbarBrand href="/" className={style.title}><h1>Match Memory Game</h1></NavbarBrand>
            <NavbarToggler className={style.btnmenu} onClick={toggle} />
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