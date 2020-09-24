import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

import "./custom-section.style.scss";

interface Props {
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  fluid?: boolean;
}

const CustomSection: React.FC<Props> = ({
  className,
  containerClassName,
  children,
  fluid = false,
}) => {
  return (
    <section className={`custom-section ${className}`}>
      <Container fluid={fluid} className={`custom-section__container ${containerClassName}`}>
        {children}
      </Container>
    </section>
  );
};

export default CustomSection;
