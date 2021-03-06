import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgBitbucket } from "react-icons/cg";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiGithubLine,
  RiDribbbleLine,
  RiMailLine,
} from "react-icons/ri";
import { useScroll } from "../../lib/custom-hook";
import SocialMediaIcon from "../social-media-icon/social-media-icon.component";
import { scrollToElement } from "../../lib/helpers";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { selectFirstVisit } from "../../redux/misc/misc.selector";

const CustomNavbar: React.FC = () => {
  const firstVisit = useSelector(selectFirstVisit);
  const isOnWorkSection = useScroll("#work-section");
  const isOnAboutSection = useScroll("#about-section");

  return (
    <div className={`navbar-custom ${firstVisit ? "navbar-custom--hidden" : ""}`}>
      <Row className="navbar-custom__inner">
        <Col xs={10} className="navbar-custom__menu-container">
          <div
            onClick={() => scrollToElement("#work-section")}
            className={`navbar-custom__menu-items ${
              isOnWorkSection ? "navbar-custom__menu-items--selected" : ""
            }`}
          >
            work
          </div>
          <div className="navbar-custom__social-media-container">
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
          <div
            onClick={() => scrollToElement("#about-section")}
            className={`navbar-custom__menu-items ${
              isOnAboutSection ? "navbar-custom__menu-items--selected" : ""
            }`}
          >
            about
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomNavbar;
