import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Homepage";
import Log from "./Pages/Login";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Log} />
      </Switch>
    </div>
  </Router>
);

export default App;
