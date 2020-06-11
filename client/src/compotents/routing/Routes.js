import React, { Fragment } from "react";
import RegisterForm from "../auth/RegisterForm";
import Login from "../auth/Login";

import NotFoundPage from "../layout/NotFound";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/signup" component={RegisterForm} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};
export default Routes;
