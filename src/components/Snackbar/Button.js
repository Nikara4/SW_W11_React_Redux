const Button = (props) => {
  const { label = "x", onClick } = props;

  const handleClose = () => {
    onClick && onClick();
  };

  return (
    <button className="snackbar--button" onClick={handleClose}>
      {label}
    </button>
  );
};

export default Button;
