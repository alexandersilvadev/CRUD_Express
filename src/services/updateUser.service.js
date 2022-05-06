import users from "../database";

const updateUserService = (id, name, email, user) => {
  const updatedUser = {
    id,
    name,
    email,
  };

  if (user.id !== id) {
    if (!user.isAdm) {
      return "Not Allowed";
    }
  }

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex].updatedAt = new Date();

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return users[userIndex];
};

export default updateUserService;
