import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { removeSnackbar } from "../../redux/modules";
import { getStyle } from "./snackbarStyles";

const Snackbar = (props) => {
  const { id, message, removeSnackbar, severity, autoHideTime = 5000 } = props;

  const handleOnClose = useCallback(() => {
    removeSnackbar(id);
  }, [id, removeSnackbar]);

  useEffect(() => {
    const hideSnackbarTimeout = setTimeout(() => handleOnClose(), autoHideTime);
    // hideSnackbarTimeout();
    return () => {
      clearTimeout(hideSnackbarTimeout);
    };
  }, [autoHideTime, handleOnClose]);

  return (
    <div className="snackbar" style={getStyle(severity)}>
      <p className="snackbar--text">{message}</p>
      <Button onClick={handleOnClose} />
    </div>
  );
};

const mapDispatchToProps = { removeSnackbar };

export default connect(null, mapDispatchToProps)(Snackbar);
