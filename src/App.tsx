import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import HomePage from "./pages/home-page";
import "./app.scss";

function App() {
  return (
    <Fragment>
      <CustomNavbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
