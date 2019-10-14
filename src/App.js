import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Homepage";
import Log from "./Pages/Login";
import Acc from "./Pages/Account";
import Group from "./Pages/Groups";
import Gallery from "./Pages/Gallery";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Log} />
        <Route exact path="/account" component={Acc} />
        <Route exact path="/groups" component={Group} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </div>
  </Router>
);

export default App;
