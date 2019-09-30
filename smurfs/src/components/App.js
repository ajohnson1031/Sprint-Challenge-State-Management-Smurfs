import React from "react";
import { getSmurfs, addSmurf, updateNewSmurf, deleteSmurf } from "../actions";
import "./App.css";
import { connect } from "react-redux";
import Form from "./Form";
import SmurfList from "./SmurfList";
import AddForm from "./AddForm";

function App({ state, getSmurfs, addSmurf, updateNewSmurf, deleteSmurf }) {
  return (
    <div className="App">
      <h1>Smurf-tastic App</h1>
      <Form query={state.query} getSmurfs={getSmurfs} /> <h4>- OR -</h4>
      <AddForm
        state={state}
        addSmurf={addSmurf}
        updateNewSmurf={updateNewSmurf}
      />
      {state.err && <div className="err">{state.err}</div>}
      {state.smurfs.length > 0 && (
        <SmurfList state={state} deleteSmurf={deleteSmurf} />
      )}
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, updateNewSmurf, deleteSmurf }
)(App);
