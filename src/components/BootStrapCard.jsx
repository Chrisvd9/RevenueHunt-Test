import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useRangeContext } from "../context/RangeContext";

const BootStrapCard = () => {
  const { rangeValue, color } = useRangeContext();
  const borderRadius = `${rangeValue}px`;

  return (
    <>
      <Card
        style={{
          width: "100%",
          height: "100%",
          marginRight: "50px",
        }}
      >
        <Card.Body>
          <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
          <Card.Text>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt u
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt u
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt u
          </Card.Text>
          <Button
            style={{ borderRadius, backgroundColor: color }}
            size="lg"
          >
            Est laborum
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default BootStrapCard;
