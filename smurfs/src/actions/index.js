import axios from "axios";

export const UPDATE_QUERY = "UPDATE_QUERY";
export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";
export const UPDATE_NEW_SMURF = "UPDATE_NEW_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const getSmurfs = (e, q) => dispatch => {
  e.preventDefault();
  dispatch({ type: GET_SMURFS_START });
  let smurfQuery = q === "" ? "smurfs" : q;

  axios
    .get(`${process.env.REACT_APP_API_URL}/${smurfQuery}`)
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_SMURFS_FAIL, payload: err }));
};

export const addSmurf = (e, newSmurf) => dispatch => {
  e.preventDefault();
  let error;

  if (newSmurf.name === "" || newSmurf.age === "" || newSmurf.height === "") {
    error = "Please smurf out all fields...";
    dispatch({ type: ADD_SMURF_FAIL, payload: error });
  } else {
    axios
      .post(`${process.env.REACT_APP_API_URL}/smurfs`, newSmurf)
      .then(res => {
        dispatch({ type: ADD_SMURF });
        axios
          .get(`${process.env.REACT_APP_API_URL}/smurfs`)
          .then(res =>
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
          )
          .catch(err => dispatch({ type: GET_SMURFS_FAIL, payload: err }));
      })
      .catch(err => {
        error = `Ya gone did smurfed! ${newSmurf.name} already exists in the smurf DB.`;
        dispatch({ type: ADD_SMURF_FAIL, payload: error });
      });
  }
};

export const updateNewSmurf = newSmurf => dispatch => {
  dispatch({ type: UPDATE_NEW_SMURF, payload: newSmurf });
};
