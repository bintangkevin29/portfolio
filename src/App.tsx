import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import HomePage from "./pages/home-page";
import "./app.scss";
import { setToHasVisited } from "./redux/misc/misc.action";
import store from "./redux/store";

function App() {

  useEffect(() => {
    setTimeout(() => {
      store.dispatch(setToHasVisited());
    }, 2000);
  }, []);

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
