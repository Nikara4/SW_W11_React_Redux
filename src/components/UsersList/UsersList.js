import { User } from ".";

const UsersList = ({ users }) => {
  return (
    <div className="users--list">
      <ul className="users--ul">
        {users.map((user) => (
          <li key={user.user_id} className="users--li">
            <User
              img={user.picture.thumbnail}
              fullName={`${user.name.title}. ${user.name.first} ${user.name.last}`}
              address={`${user.location.city}, ${user.location.country}`}
              email={user.email}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
