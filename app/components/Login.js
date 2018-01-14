import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ toggleLogin, loggedIn }) => (
  <div>
    <Link
      to="/"
      onClick={() => toggleLogin(!loggedIn)}
    >
      This is the login page
    </Link>
  </div>
);

export default Login;
