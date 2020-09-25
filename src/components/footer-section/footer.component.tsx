import React from "react";
import { CgBitbucket } from "react-icons/cg";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiGithubLine,
  RiDribbbleLine,
  RiMailLine,
} from "react-icons/ri";

import CustomSection from "../custom-section";
import SocialMediaIcon from "../social-media-icon";

import "./footer.style.scss";

const FooterSection: React.FC = () => {
  return (
    <CustomSection id="contact-section" containerClassName="footer">
      <div className="footer__connect">Let's connect.</div>
      <div className="footer__social-media-container">
        <SocialMediaIcon href="https://www.linkedin.com/in/bintangkevin">
          <RiLinkedinLine />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://github.com/bintangkevin29">
          <RiGithubLine />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://bitbucket.org/bintangkevin29">
          <CgBitbucket />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://dribbble.com/bkevin29">
          <RiDribbbleLine />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://instagram.com/kevinsamosir29">
          <RiInstagramLine />
        </SocialMediaIcon>
        <SocialMediaIcon href="mailto:bintangkevin29@gmail.com">
          <RiMailLine />
        </SocialMediaIcon>
      </div>
      &copy; 2020. Bintang Kevin Hizkia Samosir.
    </CustomSection>
  );
};

export default FooterSection;
