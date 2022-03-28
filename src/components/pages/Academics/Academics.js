import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class Academics extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Academics;
