import { connect } from "react-redux";

import { UsersList } from "../../components/UsersList";
import { fetchUsers } from "./redux";

const Users = (props) => {
  const fetchUserData = () => {
    props.fetchUsers();
  };

  const { users, isLoading, isError } = props;
  console.log(users);
  return (
    <div className="users">
      <h3 className="users--h3">Users list</h3>
      <button className="users--p" onClick={fetchUserData}>
        hola
      </button>
      {isError && <p className="users--p">An error occurred.</p>}

      {isLoading && <p className="users--p">Loading...</p>}

      <UsersList users={users} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
