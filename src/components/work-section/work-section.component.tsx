import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomSection from "../custom-section";
import PortfolioCard from "../portfolio-card";

import "./work-section.style.scss";

const WorkSection: React.FC = () => {
  return (
    <CustomSection id="work-section" className="work-section">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <PortfolioCard />
        </Col>
      </Row>
    </CustomSection>
  );
};

export default WorkSection;
