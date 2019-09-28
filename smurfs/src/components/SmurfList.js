import React from "react";
import SmurfCard from "./SmurfCard";

const SmurfList = ({ state }) => {
  return (
    <div className="smurf-list">
      {state.smurfs.map(smurf => (
        <SmurfCard key={smurf.id} smurfdetails={smurf} />
      ))}
    </div>
  );
};

export default SmurfList;
