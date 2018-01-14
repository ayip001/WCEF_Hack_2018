import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/">NuCypher Bridge</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </div>
);

export default Header;
