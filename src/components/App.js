import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import User from './User';
import Repo from './Repo';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/user/:username" component={User}></Route>
            <Route
              exact
              path="/:username/repository/:repositoryName"
              component={Repo}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
