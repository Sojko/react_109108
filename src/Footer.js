import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col md={4} lg={4} sm={12}>
          Stopka lewa
        </Col>
        <Col md={4} lg={4} sm={12}>
          Stopka prawna
        </Col>
        <Col md={4} lg={4} sm={12}>
          Stopka prawna
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
