import axios from "axios";
import { API_URL } from "../../config";

import { GET_DIVISION_SUMMARY } from "./types";

export const getDivisionSummary = (pageNum, limit) => {
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
