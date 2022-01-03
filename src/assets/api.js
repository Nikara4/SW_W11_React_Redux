export const fetchUserData = async (setUsers, setLoading, setError) => {
  await fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => {
      const newUsers = [];
      Object.entries(data.results).forEach(([key, values]) => {
        const newUser = {
          user_id: key,
          ...values,
        };
        newUsers.push(newUser);
      });

      setUsers(newUsers);
      setLoading(false);
      setError(false);
    })
    .catch((error) => {
      console.log(error);
      setError(true);
      setLoading(false);
    });
};
