import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Portfolio } from "../../global";
import { firestoreDB } from "../../lib/firebase";
import CustomSection from "../custom-section";
import PortfolioCard from "../portfolio-card";
import SectionTitle from "../section-title";

import "./work-section.style.scss";

const WorkSection: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>();

  useEffect(() => {
    firestoreDB
      .collection("portfolio")
      .get()
      .then((querySnapshot) => {
        const dataPortfolio: Portfolio[] = [];

        querySnapshot.forEach((query) => {
          const data = query.data();
          dataPortfolio.push({
            description: data.description,
            githubUrl: data.githubUrl,
            imageUrl: data.imageUrl,
            libraryFramework: data.libraryFramework,
            name: data.name,
            role: data.role,
            url: data.url,
            year: data.year,
          });
        });

        setPortfolios(dataPortfolio);
      });
  }, []);

  return (
    <CustomSection id="work-section" className="work-section">
      <SectionTitle>My Works</SectionTitle>
      <Row>
        {portfolios?.map((portfolio, i) => (
          <Col key={i} xs={12} md={6} className='work-section__portfolio-container'>
            <PortfolioCard portfolioData={portfolio} />
          </Col>
        ))}
      </Row>
    </CustomSection>
  );
};

export default WorkSection;
