import React from "react";
import App from "../App";
import Emergency from "./emergency";
import Installation from "./installation";
import Inspec from "./inspec";
import Rewire from "./rewire";
import Lighting from "./lighting";
import Pat from "./pat";

import { Route, Switch } from "react-router-dom";

function Root() {
  return (
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={Emergency} exact path="/emergency" />
      <Route component={Installation} exact path="/installation" />
      <Route component={Inspec} exact path="/inspections" />
      <Route component={Rewire} exact path="/rewiring" />
      <Route component={Lighting} exact path="/light" />
      <Route component={Pat} exact path="/pat" />
    </Switch>
  );
}

export default Root;
