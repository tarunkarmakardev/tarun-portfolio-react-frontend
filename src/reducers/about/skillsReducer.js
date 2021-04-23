import {
  GET_SKILLS_SUCCESS,
  GET_SKILLS_FAILURE,
  GET_SKILLS_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case GET_SKILLS_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case GET_SKILLS_LOADING:
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

export default skillsReducer;
