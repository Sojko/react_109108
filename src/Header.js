import React from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="text-center">
          <h1>Katalog filmowy</h1>
        </div>

        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
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
