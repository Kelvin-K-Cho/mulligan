import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css"

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById(`root`));
serviceWorker.unregister();
