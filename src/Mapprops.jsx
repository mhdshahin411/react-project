import React from "react";
import { Button, Card } from "react-bootstrap";

function Mapprops({ name, age, quali, image }) {
  return (
    <div>
      <div className="m-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{age}</Card.Text>
            <Card.Text>{quali}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Mapprops;
