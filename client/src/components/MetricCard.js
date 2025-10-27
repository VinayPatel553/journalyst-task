// client/src/components/MetricCard.js
import React from "react";
import { Card, Badge } from "react-bootstrap";

const MetricCard = ({ title, value, color }) => {
  const badgeColor =
    color || (typeof value === "number" && value < 0 ? "danger" : "success");

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="fw-semibold">{title}</Card.Title>
        <h5>
          <Badge bg={badgeColor}>
            {typeof value === "number" ? value.toFixed(2) : value}
          </Badge>
        </h5>
      </Card.Body>
    </Card>
  );
};

export default MetricCard;
