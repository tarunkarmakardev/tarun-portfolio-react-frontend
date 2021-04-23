import {
  GET_SKILLS_SUCCESS,
  GET_SKILLS_FAILURE,
  GET_SKILLS_LOADING,
} from "./types";
import PortfolioAPI from "../api/PortfolioAPI";

const getSkills = () => async (dispatch) => {
  dispatch({
    type: GET_SKILLS_LOADING,
  });

  try {
    const response = await PortfolioAPI("api/skill");
    // console.log(response);

    dispatch({
      type: GET_SKILLS_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_SKILLS_FAILURE,
      payload: {
        data: err.response,
        status: err.status,
      },
    });
  }
};

export default getSkills;
