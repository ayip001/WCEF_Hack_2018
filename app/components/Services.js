import React from 'react';
import { Row, Col } from 'react-bootstrap';
import aws from '../assets/images/experian_square.jpg';	
import drive from '../assets/images/experian_square.jpg';	
import dropbox from '../assets/images/experian_square.jpg';	

const Services = () => (
  <div style={{"border-style":"solid","border-color":"#00ff00",}}>
    <img src={aws} style={{"width":"200px","height":"200px",}} />
    <img src={drive} style={{"width":"200px","height":"200px",}} />
    <img src={dropbox} style={{"width":"200px","height":"200px",}} />
    
  </div>
);

export default Services;
