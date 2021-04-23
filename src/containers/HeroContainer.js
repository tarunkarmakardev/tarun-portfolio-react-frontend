import { connect } from "react-redux";
import { getTextSections } from "../actions";
import Hero from "../components/hero/Hero";

const mapStateToProps = ({ textSectionState }) => {
  return {
    textSectionState,
  };
};

export default connect(mapStateToProps, { getTextSections })(Hero);
