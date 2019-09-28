import React from "react";
import { getSmurfs, updateQuery } from "../actions";
import "./App.css";
import { connect } from "react-redux";
import Form from "./Form";

function App({ state, getSmurfs, updateQuery }) {
  return (
    <div className="App">
      <Form
        query={state.query}
        getSmurfs={getSmurfs}
        updateQuery={updateQuery}
      />
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  { getSmurfs, updateQuery }
)(App);
