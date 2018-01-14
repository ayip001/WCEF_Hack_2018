import React from 'react';
import Bridges from './Bridges.js';
import Services from './Services.js';
import Account from './Account.js';
import SideMenu from './SideMenu.js';
import { Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor () {
    super();
    this.state = {"currentMenu":"bridges"};
    this.toggleMenu = this.toggleMenu.bind(this);
  };

  toggleMenu (currentMenu) {
    this.setState({currentMenu});
  };

  render () {
    return (
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <SideMenu />
        </Col>
        <Col xs={12} md={8}>
          <div id="panelTitle">
          {"This is the dashboard container"}
          </div>
          <div className="dashboardPanels">
            <Bridges />
            <Services />
            <Account />
          </div>
        </Col>
      </Row>
    );
  };
};

export default Dashboard;
