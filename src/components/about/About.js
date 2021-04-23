import React, { Component } from "react";
import Loader from "../loader/Loader";
import Resume from "../resume/Resume";

export default class About extends Component {
  componentDidMount() {
    const {
      getSkills,
      getTextSections,
      textSectionState,
      skillState,
    } = this.props;
    if (skillState.status !== 200) {
      getSkills();
    }
    if (textSectionState.status !== 200) {
      getTextSections();
    }
  }
  renderList = () => {
    const {
      skillState: { data },
    } = this.props;
    return data.map(({ id, skill_name }) => {
      return (
        <li key={id} className="list-item">
          {skill_name}
        </li>
      );
    });
  };
  renderAboutText = () => {
    const { textSectionState } = this.props;
    if (textSectionState.status === 200) {
      const aboutTextData = textSectionState.data.filter(({ title }) => {
        return title === "About me";
      });
      // console.log(aboutTextData);
      return <p>{aboutTextData[0].detail}</p>;
    }
  };
  render() {
    // console.log(this.props);
    const { skillState, textSectionState } = this.props;
    const loading = skillState.loading || textSectionState.loading;

    return (
      <section className="about">
        <div className="card-section">
          <div className="card">
            {this.renderAboutText()}
            {loading ? (
              <Loader />
            ) : (
              <>
                <ul className="list-group">{this.renderList()}</ul>
                <Resume />
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}
