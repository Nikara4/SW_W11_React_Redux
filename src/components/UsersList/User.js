const User = (props) => {
  return (
    <div className="user">
      <img src={props.img} alt={props.fullName} className="user--img" />
      <h3>{props.fullName ? props.fullName : "No name given"}</h3>
    </div>
  );
};

export default User;
