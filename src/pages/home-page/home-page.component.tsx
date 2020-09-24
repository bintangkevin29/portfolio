import React from "react";
import CustomSection from "../../components/custom-section";

import "./home-page.style.scss";

const HomePage: React.FC = () => {
  return (
    <CustomSection className="home-page" containerClassName="home-page home-page__container">
      <h4 className="home-page__intro home-page__intro--fade">Hello there</h4>
      <h1 className="home-page__intro home-page__intro--type-animation">
        I'm <span className="home-page home-page__highlight">Kevin</span> Samosir
      </h1>
    </CustomSection>
  );
};

export default HomePage;
