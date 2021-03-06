import React from 'react';
import Bridges from './Bridges.js';
import Services from './Services.js';
import Account from './Account.js';
import SideMenu from './SideMenu.js';
import { Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor () {
    super();
    this.state = {"currentMenu":"bridges","showModal":false};
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  };

  toggleMenu (currentMenu) {
    this.setState({currentMenu});
  };

  toggleModal (showModal) {
    this.setState({showModal});
  };

  render () {
    const { currentMenu, showModal } = this.state;

    const panels = {
      "bridges": <Bridges toggleMenu={this.toggleMenu}/>,
      "services": <Services />,
      "account": <Account />
    };

    const titles = {
      "bridges": <h2>Trusts</h2>,
      "services": <h2>Files</h2>,
      "account": <h2>Account</h2>
    };

    return (
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <SideMenu
            currentMenu={currentMenu}
            toggleMenu={this.toggleMenu}
            showModal={showModal}
            toggleModal={this.toggleModal}
          />
        </Col>
        <Col xs={12} md={8}>
          {titles[currentMenu]}
          <div className="dashboardPanels">
            {panels[currentMenu]}
          </div>
        </Col>
      </Row>
    );
  };
};

export default Dashboard;
