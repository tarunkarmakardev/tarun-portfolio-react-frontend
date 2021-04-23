import React, { Component } from "react";

export default class ProjectCard extends Component {
  render() {
    const { imageUrl, title, description, github, visit } = this.props;
    return (
      <div className="card">
        <h2>{title}</h2>
        <iframe src={imageUrl} title={title} className="thumbnail"></iframe>
        <p>{description}</p>
        <a
          href={github}
          className="btn-accent"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a href={visit} className="btn-accent" target="_blank" rel="noreferrer">
          Visit
        </a>
      </div>
    );
  }
}
