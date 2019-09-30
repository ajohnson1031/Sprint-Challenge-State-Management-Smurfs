import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const SmurfCard = ({ smurfdetails }) => {
  return (
    <Card className="smurf-card ">
      <p>
        <strong>Name:</strong> {smurfdetails.name}
      </p>
      <p>
        <strong>Age:</strong> {smurfdetails.age}
      </p>
      <p>
        <strong>Height:</strong> {smurfdetails.height}
      </p>
    </Card>
  );
};

export default SmurfCard;
