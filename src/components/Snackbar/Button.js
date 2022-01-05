const Button = (props) => {
  const { label = "x", onClick } = props;

  return (
    <button className="snackbar--button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
