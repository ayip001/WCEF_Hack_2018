import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { Grid } from 'react-bootstrap';

class App extends React.Component {
  constructor () {
    super();
    this.state = {"loggedIn":false};
    this.toggleLogin = this.toggleLogin.bind(this);
  };

  toggleLogin (loggedIn) {
    this.setState({loggedIn});
  };

  render () {
    const { loggedIn } = this.state;

    return (
      <div>
        <Header toggleLogin={this.toggleLogin} loggedIn={loggedIn}/>
        <Grid>
          <Switch>
            <Route component={Dashboard} exact path="/" />
            <Route component={Login} exact path="/login" />
            <Route component={Signup} exact path="/signup" />
          </Switch>
        </Grid>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
        <p>ph</p>
      </div>
    );
  }
};

export default App;
