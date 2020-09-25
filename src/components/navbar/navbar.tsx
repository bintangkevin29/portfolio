import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./navbar.scss";

const CustomNavbar: React.FC = () => (
  <div className="navbar-custom">
    <Row className="navbar-custom__inner">
      <Col xs={10} className="navbar-custom__menu-container">
        <div className="navbar-custom__menu-items navbar-custom__menu-items--selected">work</div>
        <div className="navbar-custom__menu-items">about</div>
      </Col>
    </Row>
  </div>
);

export default CustomNavbar;
