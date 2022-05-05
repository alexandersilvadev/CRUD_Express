import users from "../database";

const readUserProfileService = (id) => {
  const user = users.find((element) => element.id === id);

  if (!user) {
    return { message: "User not found" };
  }

  return user;
};

export default readUserProfileService;
