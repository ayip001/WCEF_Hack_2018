import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ toggleLogin, loggedIn }) => (
  <div className="centered">
    <Link
      to="/"
      onClick={() => toggleLogin(!loggedIn)}
    >
      <a href="#">key path=(default)</a>
      <h2>Key located!</h2>
      <div class="google-btn">
        <div class="google-icon-wrapper">
        </div>
        <p class="btn-text"><b>Sign in with your key</b></p>
      </div>
    </Link>
  </div>
);

export default Login;
