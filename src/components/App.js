import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import User from './User';
import Repo from './Repo';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar />
          {isLoading && <ProgressBar />}
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

function mapStateToProps(state) {
  console.log(state);
  return { isLoading: state.progress.isLoading };
}
export default connect(mapStateToProps)(App);
