import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.scss";
import HomePage from "./pages/home-page";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
}

export default App;
