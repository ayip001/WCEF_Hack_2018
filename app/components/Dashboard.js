import React from 'react';
import Bridges from './Bridges.js';
import Services from './Services.js';
import Account from './Account.js';

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
      <div style={{"border-style":"solid"}}>
        {"This is the dashboard container"}
        <Bridges />
        <Services />
        <Account />
      </div>
    );
  };
};

export default Dashboard;
