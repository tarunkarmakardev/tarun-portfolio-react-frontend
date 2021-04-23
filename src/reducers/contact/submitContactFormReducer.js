import {
  SUBMIT_CONTACT_FORM_LOADING,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_FAILURE,
} from "../../actions/types";

const initialState = {
  data: [],
  loading: false,
  status: null,
};

const submitContactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SUBMIT_CONTACT_FORM_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SUBMIT_CONTACT_FORM_LOADING:
      return {
        ...state,
        data: [],
        status: null,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default submitContactFormReducer;
