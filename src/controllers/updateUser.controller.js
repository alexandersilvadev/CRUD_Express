import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const { user } = req;

  const updatedUser = updateUserService(id, name, email, user);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
