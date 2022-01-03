const User = (props) => {
  return (
    <div className="user">
      <img src={props.img} alt={props.fullName} className="user--img" />
      <h3>{props.fullName ? props.fullName : "No name given"}</h3>
      <div className="user--address">
        <span>From:</span> <p>{props.address ? props.address : "no address"}</p>
      </div>
      <p>
        <span>Email:</span> <a href={`mailto: ${props.email}`}>{props.email}</a>
      </p>
    </div>
  );
};

export default User;
