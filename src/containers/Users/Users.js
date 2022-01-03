import { useState, useEffect } from "react";

import { UsersList } from "../../components/UsersList";
import { fetchUserData } from "../../assets/api";

const Users = () => {
  let [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetchUserData(setUsers, setLoading, setError);
  }, []);

  return (
    <div className="users">
      <h3 className="users--h3">Users list</h3>
      {hasError && <p className="users--p">An error occurred.</p>}

      {isLoading && <p className="users--p">Loading...</p>}

      <UsersList users={users} />
    </div>
  );
};

export default Users;
