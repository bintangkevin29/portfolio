import React from "react";
import CustomSection from "../custom-section";
import SectionTitle from "../section-title";

import "./about-section.style.scss";

const AboutSection: React.FC = () => {
  return <CustomSection className="about-section">
      <SectionTitle>About Me</SectionTitle>
  </CustomSection>;
};

export default AboutSection;
