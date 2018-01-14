import React from 'react';
import Equifax from './Equifax';
import Experian from './Experian';
import TransUnion from './TransUnion';
import Propy from './Propy';
import { Row, Col } from 'react-bootstrap';
 
const Bridges = () => (
<div>
  <Row className="Bridges-Grid">
  	<Col md={4}>
      <div className="bridgePanels">
        <Equifax />
        <Experian />
      </div>
    </Col>
  </Row>
  <Row className="Bridges-Grid">
  	<Col md={4}>
      <div className="bridgePanels">
        <TransUnion />
        <Propy />
      </div>
    </Col>
  </Row>
 </div>
);

export default Bridges;
