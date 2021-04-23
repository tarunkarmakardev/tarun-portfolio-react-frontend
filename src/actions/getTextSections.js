import {
  GET_TEXT_SECTIONS_SUCCESS,
  GET_TEXT_SECTIONS_FAILURE,
  GET_TEXT_SECTIONS_LOADING,
} from "./types";
import PortfolioAPI from "../api/PortfolioAPI";

const getTextSections = () => async (dispatch) => {
  dispatch({
    type: GET_TEXT_SECTIONS_LOADING,
  });

  try {
    const response = await PortfolioAPI("/api/textsection");
    // console.log(response);
    dispatch({
      type: GET_TEXT_SECTIONS_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_TEXT_SECTIONS_FAILURE,
      payload: {
        data: err.response,
        status: err.status,
      },
    });
  }
};

export default getTextSections;
