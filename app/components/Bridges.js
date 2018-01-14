import React from 'react';
import Equifax from './Equifax';
import Experian from './Experian';
import TransUnion from './TransUnion';
import Propy from './Propy';
import { Row, Col } from 'react-bootstrap';
 
const Bridges = () => (
<div>
  <Row>	
  	<Col xs={6} md={4} style={{'padding':'0px'}} >
      <div className="bridgePanels">
        <Equifax />
        <Experian />
      </div>
    </Col>
  	<Col xs={6} md={4} style={{'padding':'0px'}}>
      <div className="bridgePanels">
        <TransUnion />
        <Propy />
      </div>
    </Col>
  </Row>
 </div>
);

export default Bridges;
