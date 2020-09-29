import React from "react";
import App from "../App";
import Emergency from "./emergency";

import { Route, Switch } from "react-router-dom";

function Root() {
  return (
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={Emergency} exact path="/emergency" />
    </Switch>
  );
}

export default Root;
