import { useEffect, useCallback } from "react";
import Button from "./Button";

const Snackbar = (props) => {
  const { id, message, removeSnackbar, styles } = props;

  const handleOnClose = useCallback(() => {
    removeSnackbar(id);
  }, [id, removeSnackbar]);

  useEffect(() => {
    const hideSnackbarTimeout = setTimeout(() => handleOnClose(), 5000);
    return () => {
      clearTimeout(hideSnackbarTimeout);
    };
  }, [handleOnClose]);

  return (
    <div className="snackbar">
      <p className="snackbar--text">{message}</p>
      <Button onClick={handleOnClose} />
    </div>
  );
};

export default Snackbar;
