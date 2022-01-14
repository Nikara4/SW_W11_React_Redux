import { connect } from "react-redux";
import Form from "../../components/Form";
import { addSnackbar } from "../../redux/modules/snackbar";
import { sendForm } from "../../redux/modules/contact";

const errorMessage = (fieldName, errorType) => {
  switch (errorType) {
    case "required":
      return `${fieldName} is required`;
    case "pattern":
      return `${fieldName} has incorrect value`;
    case "maxLength":
      return `${fieldName} has exceeded the maximum length`;
    default:
      return `${fieldName} has error`;
  }
};

const ContactForm = ({ addSnackbar, sendForm, sending, sent }) => {
  const handleFormSubmit = (data) => {
    sendForm(data);
  };

  const handleFormError = (errors) => {
    Object.keys(errors).forEach((key) => {
      addSnackbar({
        message: errorMessage(key, errors[key].type),
        severity: "error",
      });
    });
  };
  return (
    <Form
      formSubmit={handleFormSubmit}
      formError={handleFormError}
      sending={sending}
      sent={sent}
    />
  );
};

const mapStateToProps = (state) => ({
  sending: state.contact.sending,
  sent: state.contact.sent,
});

const mapDispatchToProps = { addSnackbar, sendForm };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
