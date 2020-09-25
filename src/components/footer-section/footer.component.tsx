import React from "react";
import CustomSection from "../custom-section";

import "./footer.style.scss";

const FooterSection: React.FC = () => {
  return (
    <CustomSection containerClassName="footer">
      &copy; 2020. Bintang Kevin Hizkia Samosir.
    </CustomSection>
  );
};

export default FooterSection;
