export const fetchUsers = (usersCount = 10) => {
  fetch(`https://randomuser.me/api/?results=${usersCount}`);
};
