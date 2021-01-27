import { GET_DIVISION_SUMMARY } from "../actions/types";

const initialState = {
  division_summary: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DIVISION_SUMMARY:
      return {
        ...state,
        division_summary: action.payload,
      };

    default:
      return state;
  }
  //  return state;
};
