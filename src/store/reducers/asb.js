import {
  GET_DIVISION_SUMMARY,
  GET_METRICS,
  GET_MODULE_HISTORY,
} from "../actions/types";

const initialState = {
  division_summary: {},
  metrics: {},
  module_history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DIVISION_SUMMARY:
      return {
        ...state,
        division_summary: action.payload,
      };
    case GET_METRICS:
      return {
        ...state,
        metrics: action.payload,
      };
    case GET_MODULE_HISTORY:
      return {
        ...state,
        module_history: action.payload,
      };

    default:
      return state;
  }
};
