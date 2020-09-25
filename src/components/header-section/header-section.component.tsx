import React from "react";
import CustomSection from "../../components/custom-section";

import "./header-section.style.scss";

const HeaderSection: React.FC = () => {
  return (
    <CustomSection
      className="header-section"
      containerClassName="header-section header-section__container"
    >
      <h4 className="header-section__intro header-section__intro--fade">Hello there</h4>
      <h1 className="header-section__intro header-section__intro--type-animation">
        I'm <span className="header-section header-section__highlight">Kevin</span> Samosir
      </h1>
    </CustomSection>
  );
};

export default HeaderSection;
