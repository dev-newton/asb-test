import axios from "axios";
import { API_URL } from "../../config";

import { GET_DIVISION_SUMMARY, GET_METRICS } from "./types";

export const getDivisionSummary = () => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}/division_summary`);

    if (response.status !== 200) {
      const err = response;
      console.log("failure: ", err.message);
      throw new Error(response);
    }

    const { data } = await response;

    dispatch({
      type: GET_DIVISION_SUMMARY,
      payload: data[0],
    });
  };
};

export const getMetrics = () => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}/metrics`);

    if (response.status !== 200) {
      const err = response;
      console.log("failure: ", err.message);
      throw new Error(response);
    }

    const { data } = await response;

    dispatch({
      type: GET_METRICS,
      payload: data[0],
    });
  };
};
