import React from "react";
import CustomSection from "../../components/custom-section";
import { FiArrowDown } from "react-icons/fi";

import { useScroll } from "../../lib/custom-hook";

import "./header-section.style.scss";

const HeaderSection: React.FC = () => {
  const isOnHeader = useScroll("#header-section", true);
  return (
    <CustomSection
      id="header-section"
      className="header-section"
      containerClassName="header-section header-section__container"
    >
      <h4 className="header-section__intro header-section__intro--fade">Hello there</h4>
      <h1 className="header-section__intro">
        I'm <span className="header-section__highlight">Kevin</span>{" "}
        <span className="header-section__type-animation">Samosir</span>
      </h1>
      <FiArrowDown
        className={`header-section__scroll-icon ${
          !isOnHeader ? "header-section__scroll-icon--hidden" : ""
        }`}
      />
    </CustomSection>
  );
};

export default HeaderSection;
