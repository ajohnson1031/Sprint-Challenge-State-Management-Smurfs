import React from "react";
import { Card, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const SmurfCard = ({ smurfdetails, deleteSmurf }) => {
  return (
    <Card className="smurf-card ">
      <Icon name="close" onClick={() => deleteSmurf(smurfdetails.id)}></Icon>
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
