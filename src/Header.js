import React from "react";
import { Button } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="text-center">
          <h1>Katalog filmowy</h1>
        </div>
        <p>{title}</p>
        <div className="text-center">
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
