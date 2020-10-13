import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Home, SignIn, SignUp } from "./pages";

//https://github.com/karlhadwen/netflix
//https://www.youtube.com/watch?v=x_EEwGe-a9o&t=4265s&ab_channel=KarlHadwen

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home></Home>
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp></SignUp>
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn></SignIn>
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse></Browse>
        </Route>
      </Switch>
    </Router>
  );
}
