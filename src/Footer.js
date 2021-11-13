import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3>Katalog filmowy</h3>
          </Col>
          <Col>
            Aplikacja grupy 5 zrealizowana na przedmiocie Wykorzystanie wzorców
            w technologiach internetowych
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
