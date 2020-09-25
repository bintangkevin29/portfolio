import React, { ReactNode } from "react";

import "./section-title.style.scss";

interface Props {
  children: ReactNode;
  subTitle?: boolean;
}

const SectionTitle: React.FC<Props> = ({ children, subTitle }) => {
  return <h3 className={`section-title ${subTitle ? "section-title--sub" : ""}`}>{children}</h3>;
};

export default SectionTitle;
