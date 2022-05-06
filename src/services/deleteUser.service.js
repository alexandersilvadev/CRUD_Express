import users from "../database";

const deleteUserService = (id, user) => {
  if (user.id !== id) {
    if (!user.isAdm) {
      return "Not Allowed";
    }
  }

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users.splice(userIndex, 1);

  return "User deleted with success";
};

export default deleteUserService;
