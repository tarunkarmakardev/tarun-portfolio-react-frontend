import {
  GET_TEXT_SECTIONS_SUCCESS,
  GET_TEXT_SECTIONS_FAILURE,
  GET_TEXT_SECTIONS_LOADING,
} from "../actions/types";

const initialState = {
  data: null,
  status: null,
  loading: false,
};

const textSectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT_SECTIONS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case GET_TEXT_SECTIONS_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case GET_TEXT_SECTIONS_LOADING:
      return {
        ...state,
        data: null,
        status: null,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default textSectionsReducer;
