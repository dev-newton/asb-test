import {
  GET_DIVISION_SUMMARY,
  GET_METRICS,
  GET_MODULE_HISTORY,
  GET_TABLE_DATA,
} from "../actions/types";

const initialState = {
  division_summary: {},
  metrics: {},
  module_history: [],
  table_data: [],
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
    case GET_TABLE_DATA:
      return {
        ...state,
        table_data: action.payload,
      };
    default:
      return state;
  }
};
