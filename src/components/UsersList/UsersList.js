import { User } from ".";

const UsersList = ({ users }) => {
  return (
    <div className="users--list">
      <ul className="users--ul">
        {users.map((user) => (
          <li className="users--li">
            <User
              key={user.id.value}
              img={user.picture.thumbnail}
              fullName={`${user.name.title}. ${user.name.first} ${user.name.last}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
