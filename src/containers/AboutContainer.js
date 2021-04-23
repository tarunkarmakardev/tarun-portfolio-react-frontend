import { connect } from "react-redux";
import About from "../components/about/About";
import { getSkills, getTextSections } from "../actions";

const mapStateToProps = ({ skillState, textSectionState }) => {
  return {
    skillState,
    textSectionState,
  };
};

export default connect(mapStateToProps, { getSkills, getTextSections })(About);
