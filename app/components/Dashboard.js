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
    const { currentMenu } = this.state;

    const panels = {
      "bridges": <Bridges />,
      "services": <Services />,
      "account": <Account />
    };

    return (
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <SideMenu currentMenu={currentMenu} toggleMenu={this.toggleMenu} />
        </Col>
        <Col xs={12} md={8}>
          <h3 id="panelTitle">
            {currentMenu}
          </h3>
          <div className="dashboardPanels">
            {panels[currentMenu]}
          </div>
        </Col>
      </Row>
    );
  };
};

export default Dashboard;
