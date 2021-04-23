import React, { Component } from "react";
import LoaderFullScreen from "../loader/LoaderFullScreen";
import Resume from "../resume/Resume";

export default class Hero extends Component {
  componentDidMount() {
    const { getTextSections } = this.props;
    const {
      textSectionState: { status },
    } = this.props;
    if (status !== 200) {
      getTextSections();
    }
  }

  renderText = () => {
    const {
      textSectionState: { data },
    } = this.props;
    if (data) {
      const text = data.filter(({ title }) => title === "Hero");
      // console.log(text[0].detail);
      const [h1, h2] = text[0].detail.split(".");
      return (
        <>
          <h1 id="hero-content-title">{h1}</h1>
          <h2 id="hero-content-subtitle">
            Meet <span>{h2}</span>
          </h2>
        </>
      );
    }

    return null;
  };

  render() {
    // console.log(this.props);
    const {
      textSectionState: { loading },
    } = this.props;
    if (loading) {
      return (
        <LoaderFullScreen message="please wait, heroku free services take time to load at first!" />
      );
    }
    return (
      <section id="home" className="hero">
        <div className="hero-content">
          {this.renderText()}
          <Resume />
        </div>
      </section>
    );
  }
}
