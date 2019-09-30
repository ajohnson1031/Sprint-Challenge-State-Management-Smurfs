import React from "react";
import SmurfCard from "./SmurfCard";

const SmurfList = ({ state, deleteSmurf }) => {
  return (
    <div className="smurf-list">
      {state.smurfs.map(smurf => (
        <SmurfCard
          key={smurf.id}
          smurfdetails={smurf}
          deleteSmurf={deleteSmurf}
        />
      ))}
    </div>
  );
};

export default SmurfList;
