import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import HomePage from "./pages/home-page";
import "./app.scss";
import { useSelector } from "react-redux";
import { selectFirstVisit } from "./redux/misc/misc.selector";

function App() {
  const firstVisit = useSelector(selectFirstVisit);

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
