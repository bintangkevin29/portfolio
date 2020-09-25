import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgBitbucket } from "react-icons/cg";
import { RiLinkedinLine, RiInstagramLine, RiGithubLine, RiDribbbleLine } from "react-icons/ri";
import { useScroll } from "../../lib/custom-hook";
import SocialMediaIcon from "../social-media-icon/social-media-icon.component";
import "./navbar.scss";

const CustomNavbar: React.FC = () => {
  const isOnWorkSection = useScroll("#work-section");

  return (
    <div className="navbar-custom">
      <Row className="navbar-custom__inner">
        <Col xs={10} className="navbar-custom__menu-container">
          <div
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
            <SocialMediaIcon href="https://github.com/bintangkevin29">
              <CgBitbucket />
            </SocialMediaIcon>
            <SocialMediaIcon href="https://dribbble.com/bkevin29">
              <RiDribbbleLine />
            </SocialMediaIcon>
            <SocialMediaIcon href="https://instagram.com/kevinsamosir29">
              <RiInstagramLine />
            </SocialMediaIcon>
          </div>
          <div className="navbar-custom__menu-items">about</div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomNavbar;
