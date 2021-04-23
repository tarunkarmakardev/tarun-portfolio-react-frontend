import { connect } from "react-redux";
import { getProjects } from "../actions";
import ProjectsView from "../components/projectsView/ProjectsView";

const mapStateToProps = ({ projectState }) => {
  return {
    projectState,
  };
};

export default connect(mapStateToProps, { getProjects })(ProjectsView);
