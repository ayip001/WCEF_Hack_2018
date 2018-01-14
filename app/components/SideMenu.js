import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const SideMenu = ({ currentMenu, toggleMenu }) => {
  return (
    <div>
      <br />
      <Button className="newbtn"><span style={{"color":"white"}}>New...</span></Button>
      <br />
      <br />
      <ListGroup>
        <ListGroupItem
          href="#"
          active={currentMenu === "bridges"}
          onClick={() => toggleMenu("bridges")}
          style={{"background-color":"white"}}
        >
          Bridges
        </ListGroupItem>
        <ListGroupItem
          href="#"
          active={currentMenu === "services"}
          onClick={() => toggleMenu("services")}
          style={{"background-color":"white"}}
        >
          Services
        </ListGroupItem>
        <ListGroupItem
          href="#"
          active={currentMenu === "account"}
          onClick={() => toggleMenu("account")}
          style={{"background-color":"white"}}
        >
          Account
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default SideMenu;
