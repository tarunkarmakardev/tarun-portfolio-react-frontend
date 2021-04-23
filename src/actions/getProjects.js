import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_LOADING,
} from "./types";

import PortfolioAPI from "../api/PortfolioAPI";

const getProjects = () => async (dispatch) => {
  dispatch({
    type: GET_PROJECTS_LOADING,
  });

  try {
    const response = await PortfolioAPI("/api/project");
    // console.log(response);
    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_PROJECTS_FAILURE,
      payload: {
        data: err.response,
        status: err.status,
      },
    });
  }
};

export default getProjects;
