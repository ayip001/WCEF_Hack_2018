import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ toggleLogin, loggedIn }) => (
  <div className="centered">
    <Link
      to="/"
      onClick={() => toggleLogin(!loggedIn)}
    >
      <div class="google-btn">
        <div class="google-icon-wrapper">
          <img class="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p class="btn-text"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</b></p>
      </div>
    </Link>
  </div>
);

export default Login;
