import React, { Fragment } from "react";
import HeaderSection from "../../components/header-section";
import WorkSection from "../../components/work-section";

import "./home-page.style.scss";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <HeaderSection />
      <WorkSection />
    </Fragment>
  );
};

export default HomePage;
