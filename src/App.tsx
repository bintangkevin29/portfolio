import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import HomePage from "./pages/home-page";
import "./app.scss";
import { setToHasVisited } from "./redux/misc/misc.action";
import store from "./redux/store";
import { useSelector } from "react-redux";
import { selectFirstVisit } from "./redux/misc/misc.selector";
import FooterSection from "./components/footer-section";

function App() {
  const firstVisit = useSelector(selectFirstVisit);

  useEffect(() => {
    setTimeout(() => {
      store.dispatch(setToHasVisited());
    }, 2000);
  }, []);

  useEffect(() => {
    if (firstVisit === false) {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    }
  }, [firstVisit]);

  return (
    <Fragment>
      <CustomNavbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      <FooterSection />
    </Fragment>
  );
}

export default App;
