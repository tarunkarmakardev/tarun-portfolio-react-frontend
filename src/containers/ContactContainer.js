import { connect } from "react-redux";
import Contact from "../components/contact/Contact";
import { submitContactForm } from "../actions";

const mapStateToProps = ({ form: { contactForm }, submitContactFormState }) => {
  return {
    contactFormState: contactForm,
    submitContactFormState,
  };
};

export default connect(mapStateToProps, { submitContactForm })(Contact);
