import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import skillState from "./about/skillsReducer";
import textSectionState from "./textSectionsReducer";
import projectState from "./projects/getProjectsReducer";
import submitContactFormState from "./contact/submitContactFormReducer";
export default combineReducers({
  form: formReducer,
  skillState,
  textSectionState,
  projectState,
  submitContactFormState,
});
