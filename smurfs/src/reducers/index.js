import { initialState } from "../stores";
import {
  UPDATE_QUERY,
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL
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
        err: "There was a problem loading smurfs. Please try again."
      };
    default:
      return state;
  }
};
