import React from 'react';
import StickyHeader from 'react-sticky-header';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Header = ({ toggleLogin, loggedIn }) => {
  let menuItems = null;

  if (loggedIn) {
    menuItems = (
    <Nav pullRight>
      <NavItem>
        <Link to="/login">Login</Link>
      </NavItem>
      <NavItem>
        <Link to="/signup">Sign Up</Link>
      </NavItem>
    </Nav>
    );
  } else {
    menuItems = (
    <Nav pullRight>
      <NavItem onClick={() => {window.location.replace("/");setTimeout(() => {toggleLogin(!loggedIn)}, 2000)}}>
        Logout
      </NavItem>
    </Nav>
    );
  };

  return (
    <Navbar staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">NuCypher Bridge</Link>
        </Navbar.Brand>
      </Navbar.Header>
      {menuItems}
    </Navbar>
  );
};

export default Header;
