import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./navbar.scss";

const CustomNavbar: React.FC = () => (
  <div className="navbar-custom">
    <Container>
      <Row className="navbar-custom__inner">
        <Col xs={4} className="navbar-custom__menu-container">
          <div className="navbar-custom__menu-items navbar-custom__menu-items--selected">About</div>
          <div className="navbar-custom__menu-items">Portfolio</div>
          <div className="navbar-custom__menu-items">Contacts</div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CustomNavbar;
