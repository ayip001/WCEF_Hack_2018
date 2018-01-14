import React from 'react';
import { Button, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';

const SideMenu = ({ currentMenu, toggleMenu, showModal, toggleModal }) => {
  return (
    <div>
      <br />
      <Button className="newbtn" onClick={() => toggleModal(!showModal)}>
        <span style={{"color":"white"}}>New trust...</span>
      </Button>
      <br />
      <Modal show={showModal} onHide={() => toggleModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>New trust</Modal.Title>
        </Modal.Header>
        {"BELOW HERE"}
        <Modal.Body>
          <h3>Trustee's email</h3>
            <input />
          <h3>Select a storage service</h3>
            <Button />
          <h3>Upload or import from database</h3>
          <Button>Send email and generate invite link</Button>
        </Modal.Body>
        {"ABOVE HERE"}
      </Modal>
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
          Files
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
