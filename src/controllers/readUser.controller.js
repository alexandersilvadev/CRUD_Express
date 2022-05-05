import readUserService from "../services/readUser.service";

const readUsersController = (req, res) => {

  const users = readUserService();

  return res.status(200).json(users);
};

export default readUsersController;