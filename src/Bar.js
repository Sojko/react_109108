import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Bar = ({ getUserPhrase }) => {
  const [phrase, setPhrase] = useState("");

  const readUserPhrase = (event) => {
    setPhrase(event.target.value);
  };

  const sendUserPhrase = () => {
    getUserPhrase(phrase);
  };

  return (
    <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
      <FormControl
        placeholder="Wpisz tytuł filmu lub nazwisko aktora bądź reżysera"
        value={phrase}
        onChange={readUserPhrase}
      />
      <Button
        variant="outline-secondary"
        style={{ marginLeft: "10px" }}
        onClick={sendUserPhrase}
      >
        Szukaj
      </Button>
    </InputGroup>
  );
};

export default Bar;
