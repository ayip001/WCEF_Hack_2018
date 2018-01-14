import React from 'react';
import StickyHeader from 'react-sticky-header';
import { Link } from 'react-router-dom';

const Header = ({ toggleLogin, loggedIn }) => {
  let menuItems = null;

  if (loggedIn) {
    menuItems = (
        <span>
      <li className="Header_link">
        <Link to="/login">Login</Link>
      </li>
      <li className="Header_link">
        <Link to="/signup">Sign Up</Link>
      </li>
        </span>
    );
  } else {
    menuItems = (
      <li className="Header_link" onClick={() => toggleLogin(!loggedIn)}>
        <a href="/">Logout</a>
      </li>
    );
  };

  return (
    <div>
      <StickyHeader
        headerOnly
        header={
          <div className="Header_root">
            <h2 className="Header_title">NuCypher Bridge</h2>
            <ul className="Header_links">
              <li className="Header_link">
                <Link to="/">NuCypher Bridge</Link>
              </li>
              {menuItems}
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Header;
