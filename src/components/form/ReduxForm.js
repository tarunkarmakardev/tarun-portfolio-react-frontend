import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class ReduxForm extends Component {
  renderField = (formValues) => {
    const {
      input,
      fullWidth,
      label,
      type,
      meta: { error, touched },
    } = formValues;
    // console.log(formValues);
    const { contactFormState } = this.props;
    let focused = false;
    if (contactFormState) {
      focused =
        contactFormState.active === input.name || input.value !== ""
          ? true
          : false;
    }

    return (
      <>
        <div
          className={`form-row ${fullWidth ? "full-width" : ""} ${
            focused ? "focused" : ""
          }`}
        >
          <label>{label}</label>
          {type === "textarea" ? (
            <textarea {...input}></textarea>
          ) : (
            <input {...input} type={type} />
          )}
          {touched && error ? (
            <div className="error">{label} is required!</div>
          ) : null}
        </div>
      </>
    );
  };
  renderFormRow = () => {
    return this.props.formRows.map(({ id, label, fullWidth, name, type }) => {
      return (
        <Field
          key={id}
          name={name}
          label={label}
          type={type}
          component={this.renderField}
          fullWidth={fullWidth}
          validate={this.required}
        />
      );
    });
  };

  // Validators
  required = (value) => (value ? undefined : "Required");

  render() {
    // console.log(this.props);
    const { handleSubmit, handleformSubmit } = this.props;
    return (
      <section className="contact">
        <div className="card-section">
          <div className="card">
            <h2>Contact Me</h2>
            <form
              className="contact-form"
              autoComplete="off"
              onSubmit={handleSubmit(handleformSubmit)}
            >
              {this.renderFormRow()}
              <div className="form-row button">
                <button className="btn btn-accent">Submit </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: "contactForm",
})(ReduxForm);
