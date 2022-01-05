import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { UsersList } from "../../components/UsersList";
import { getUsers, selectUsers } from "../../redux/modules/users";

const Users = (props) => {
  const [loading, setLoading] = useState(true);
  const { users, isLoading, isError, getUsers } = props;

  useEffect(() => {
    !users.length && getUsers();
    setLoading(false);
  }, [users, getUsers]);

  return (
    <div className="users">
      <h3 className="users--h3">Users list</h3>
      {isError && <p className="users--p">An error occurred.</p>}

      {loading || isLoading ? (
        <p className="users--p">Loading...</p>
      ) : (
        <UsersList users={users} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  isLoading: state.users.isLoading,
  isError: state.users.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
