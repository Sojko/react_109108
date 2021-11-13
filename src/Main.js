import React from "react";
import Catalog from "./Catalog";
import Footer from "./Footer";
import Header from "./Header";
import Bar from "./Bar";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <Header />
      <Bar />
      <Catalog />
      <Footer />
    </Container>
  );
};

export default Main;
