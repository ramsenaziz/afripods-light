import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Home } from "./features/Home";
import { Podcast } from "./features/Podcast";
import { Episode } from "./features/Episode";

import "./App.css";

const App = () => (
  <div>
    <div className="site-header">
      <a href="/">
        <h1>AFRIPODS LIGHT</h1>
      </a>
    </div>
    <div className="site-container">
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route
          path="/podcast/:handle"
          render={props => <Podcast {...props} />}
        />
        <Route
          path="/episode/:handle"
          render={props => <Episode {...props} />}
        />
      </Switch>
    </div>
  </div>
);

export default withRouter(App);
