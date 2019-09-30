import { initialState } from "../stores";
import {
  UPDATE_QUERY,
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  UPDATE_NEW_SMURF,
  ADD_SMURF,
  ADD_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL
} from "../actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload,
        isLoading: false,
        err: null
      };
    case GET_SMURFS_START:
      return { ...state, isLoading: true };
    case GET_SMURFS_SUCCESS:
      return { ...state, isLoading: false, smurfs: action.payload };
    case GET_SMURFS_FAIL:
      return {
        ...state,
        isLoading: false,
        smurfs: [],
        err: "There was a problem smurfing smurfs. Please try again."
      };
    case UPDATE_NEW_SMURF:
      return {
        ...state,
        err: null,
        newSmurf: {
          ...state.newSmurf,
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height,
          id: state.smurfs.length
        }
      };
    case ADD_SMURF:
      return {
        ...state,
        newSmurf: { ...state.newSmurf, name: "", age: "", height: "" }
      };
    case ADD_SMURF_FAIL:
      return { ...state, err: action.payload };
    case DELETE_SMURF_START:
      return state;
    case DELETE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload };
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        smurfs: [],
        err: "There was a problem smurfing smurfs. Please try again."
      };
    default:
      return state;
  }
};
