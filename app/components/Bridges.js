import React from 'react';
import Equifax from './Equifax';
import Experian from './Experian';
import TransUnion from './TransUnion';
import Propy from './Propy';
import { Row, Col } from 'react-bootstrap';
 
const Bridges = ({ toggleMenu }) => (
<div>
  <Row onClick={() => toggleMenu("services")}>	
  	<Col xs={6} md={4}>
      <div className="bridgePanels" style={{"margin":"auto", "padding-left":"35px"}}>  
        <Equifax />  
        <Experian />
      </div>
    </Col>
  	<Col xs={6} md={4}>
      <div className="bridgePanels" style={{"margin":"auto", "padding-right":"20px"}}>
        <TransUnion />
        <Propy />
      </div>
    </Col>
  </Row>
 </div>
);

export default Bridges;
