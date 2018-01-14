import React from 'react';
import { Button, ListGroup, ListGroupItem, Modal, Row, Col, Grid, SplitButton, MenuItem } from 'react-bootstrap';
import db from '../assets/images/db.png';
import s3 from '../assets/images/S3.png';
import storj from '../assets/images/Storj-symbol.png';	
import drive from '../assets/images/drive.png';	


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
        
        <Modal.Body>
          <h3>Trustee's email</h3>
            <input placeholder="hact@yahoo.com" /> <br />
            <br />
		<SplitButton
			title="Time"
		>
			<MenuItem eventKey="1">5 Min</MenuItem>
			<MenuItem eventKey="2">10 Min</MenuItem>
			<MenuItem eventKey="3">1 Hour</MenuItem>
			<MenuItem eventKey="4">24 Hours</MenuItem>
		</SplitButton>

          <h3>Select a storage service</h3>
            <Grid style={{"width":"1200px","padding-right" : "0px", "padding-left" : "0px"}}>
            	<Row style={{"margin":"auto","padding-bottom":"10px"}}>
            		<Button>
            			{"ADD SERVICE"}
            		</Button>
            	</Row>
            	<Row>
            		<Col xs={1} md={2}>
            			<Button>
            				<img src={db} style={{"width":"150px","height":"150px",}}/>
            			</Button>
            		</Col>
            		<Col xs={1} md={2}>
            			<Button>
            				<img src={s3} style={{"width":"150px","height":"150px"}}/>
            			</Button>
            		</Col>
            	</Row>
            	<br></br>	
            	<Row>	
            		<Col xs={1} md={2}>
            			<Button>
            				<img src={storj} style={{"width":"150px","height":"150px",}}/>
            			</Button>
            		</Col>
            		<Col xs={1} md={2}>
            			<Button>
            				<img src={drive} style={{"width":"150px","height":"150px",}}/>
            			</Button>
            		</Col>
            	</Row>
            </Grid>
          <h3>Local Upload or import from database</h3>
          	<input placeholder="file://///" /> <br></br>
          	<br />
          <Button>Send email and generate invite link</Button>
        </Modal.Body>
      
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
