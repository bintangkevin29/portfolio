import React, { ReactNode } from "react";

import "./social-media-icon.style.scss";

interface Props {
  children: ReactNode;
  href: string;
}

const SocialMediaIcon: React.FC<Props> = ({ children, href }) => {
  return (
    <a href={href} className="social-media-icon" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default SocialMediaIcon;
