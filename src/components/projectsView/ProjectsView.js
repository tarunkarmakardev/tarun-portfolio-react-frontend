import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Loader from "../loader/Loader";

export default class ProjectsView extends Component {
  componentDidMount() {
    const { getProjects, projectState } = this.props;
    if (projectState.status !== 200) {
      getProjects();
    }
  }
  renderProjectCard = (data) => {
    return data.map(
      ({ id, title, description, imageUrl, github_url, proj_url }) => {
        return (
          <ProjectCard
            key={id}
            imageUrl={imageUrl}
            title={title}
            description={description}
            github={github_url}
            visit={proj_url}
          />
        );
      }
    );
  };
  render() {
    // console.log(this.props);
    const {
      projectState: { data, loading },
    } = this.props;

    return (
      <section className="project">
        <div className="card-section">
          {loading ? <Loader /> : this.renderProjectCard(data)}
        </div>
      </section>
    );
  }
}
