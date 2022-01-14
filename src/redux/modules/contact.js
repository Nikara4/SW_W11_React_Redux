import { contactFormSend } from "../../assets/contactForm";
import { addSnackbar } from "./snackbar";

const CONTACT_FORM_SEND = "contact/CONTACT_FORM_SEND";
const CONTACT_FORM_SUCCESS = "contact/CONTACT_FORM_SUCCESS";
const CONTACT_FORM_ERROR = "contact/CONTACT_FORM_ERROR";

const INITIAL_STATE = {
  sending: false,
  error: false,
  sent: false,
};

export function send() {
  return { type: CONTACT_FORM_SEND };
}

export function success() {
  return { type: CONTACT_FORM_SUCCESS };
}

export function error() {
  return { type: CONTACT_FORM_ERROR };
}

export const sendForm = (form) => {
  return function (dispatch) {
    dispatch(send);
    contactFormSend(form)
      .then((response) => {
        if (response.ok) {
          dispatch(success());
          dispatch(
            addSnackbar({
              message: "Message sent",
              severity: "success",
            })
          );
        } else {
          dispatch(error());
          dispatch(
            addSnackbar({
              message: "Error sending the message",
              severity: "error",
            })
          );
        }
      })
      .catch((e) => dispatch(error()));
  };
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONTACT_FORM_SEND:
      return { ...state, sent: true, sending: true, error: false };
    case CONTACT_FORM_SUCCESS:
      return { ...state, sent: true, sending: false, error: false };
    case CONTACT_FORM_ERROR:
      return { ...state, sent: false, sending: false, error: true };
    default:
      return state;
  }
}
