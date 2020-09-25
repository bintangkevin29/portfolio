import React from "react";

import "./section-title.style.scss";

const SectionTitle: React.FC = ({ children }) => {
  return <h3 className="section-title">{children}</h3>;
};

export default SectionTitle;
