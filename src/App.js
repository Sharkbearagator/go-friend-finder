import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Homepage";
import Log from "./Pages/Login";
import Acc from "./Pages/Account";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Log} />
        <Route exact path="/account" component={Acc} />
      </Switch>
    </div>
  </Router>
);

export default App;
