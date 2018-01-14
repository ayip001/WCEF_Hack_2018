import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Signup} exact path="/signup" />
      </Switch>
    </div>
  );
};

export default App;
