import {
  SUBMIT_CONTACT_FORM_LOADING,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_FAILURE,
} from "./types";
import manualDelay from "./manualDelay";
import PortfolioAPI from "../api/PortfolioAPI";

const submitContactForm = (formValues) => async (dispatch) => {
  dispatch({
    type: SUBMIT_CONTACT_FORM_LOADING,
  });
  await manualDelay();

  try {
    const response = await PortfolioAPI.post(
      "/api/contact_form",
      JSON.stringify(formValues),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(response);
    dispatch({
      type: SUBMIT_CONTACT_FORM_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (err) {
    dispatch({
      type: SUBMIT_CONTACT_FORM_FAILURE,
      payload: {
        data: err.response,
        status: err.status,
      },
    });
  }
};

export default submitContactForm;
