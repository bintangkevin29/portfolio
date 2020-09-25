import React, { Fragment } from "react";
import AboutSection from "../../components/about-section";
import HeaderSection from "../../components/header-section";
import WorkSection from "../../components/work-section";

import "./home-page.style.scss";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <HeaderSection />
      <WorkSection />
      <AboutSection />
    </Fragment>
  );
};

export default HomePage;
