import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const SideMenu = ({ currentMenu, toggleMenu }) => {
  return (
    <ListGroup>
      <ListGroupItem
        href="#"
        active={currentMenu === "bridges"}
        onClick={() => toggleMenu("bridges")}
      >
        Bridges
      </ListGroupItem>
      <ListGroupItem
        href="#"
        active={currentMenu === "services"}
        onClick={() => toggleMenu("services")}
      >
        Services
      </ListGroupItem>
      <ListGroupItem
        href="#"
        active={currentMenu === "account"}
        onClick={() => toggleMenu("account")}
      >
        Account
      </ListGroupItem>
    </ListGroup>
  );
};

export default SideMenu;
