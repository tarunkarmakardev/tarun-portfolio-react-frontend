import React, { Component } from "react";
import ReduxForm from "../form/ReduxForm";
import LoaderFullScreen from "../loader/LoaderFullScreen";
import ThankYou from "./ThankYou";

const formRows = [
  {
    id: 1,
    label: "First Name",
    fullWidth: false,
    name: "firstname",
    type: "text",
    textarea: false,
  },
  {
    id: 2,
    label: "Last Name",
    fullWidth: false,
    name: "lastname",
    type: "text",
    textarea: false,
  },
  {
    id: 3,
    label: "Email Address",
    fullWidth: true,
    name: "email",
    type: "email",
    textarea: false,
  },
  {
    id: 4,
    label: "Message",
    fullWidth: true,
    name: "message",
    type: "textarea",
    textarea: true,
  },
];

export default class Contact extends Component {
  handleformSubmit = (formvalues) => {
    const { submitContactForm } = this.props;
    console.log(formvalues);
    submitContactForm(formvalues);
  };
  render() {
    // console.log(this.props);
    const {
      submitContactFormState: { loading, status },
    } = this.props;
    if (loading) {
      return <LoaderFullScreen message="Submitting" />;
    }
    if (status === 200) {
      return <ThankYou />;
    }
    return (
      <ReduxForm
        formRows={formRows}
        {...this.props}
        handleformSubmit={this.handleformSubmit}
      />
    );
  }
}
