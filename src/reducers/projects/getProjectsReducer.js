import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const getProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case GET_PROJECTS_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case GET_PROJECTS_LOADING:
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

export default getProjectsReducer;
