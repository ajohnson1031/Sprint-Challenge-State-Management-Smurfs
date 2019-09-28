import axios from "axios";

export const UPDATE_QUERY = "UPDATE_QUERY";
export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";

export const getSmurfs = (e, q) => dispatch => {
  e.preventDefault();
  dispatch({ type: GET_SMURFS_START });
  let smurfQuery = q === "" ? "smurfs" : q;
  console.log("aj: actions: getSmurfs: ", q);

  axios
    .get(`http://localhost:3333/${smurfQuery}`)
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_SMURFS_FAIL, payload: err }));
};

export const updateQuery = newQuery => dispatch => {
  dispatch({ type: UPDATE_QUERY, payload: newQuery });
};
