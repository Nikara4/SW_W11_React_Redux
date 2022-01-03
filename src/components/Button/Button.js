const Button = (props) => {
  return (
    <button onClick={props.handleClick} type="button" className="home--button">
      {props.children}
    </button>
  );
};

export default Button;
