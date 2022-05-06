import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const deletedUser = deleteUserService(id, user);

  return res.status(200).json(deletedUser);
};

export default deleteUserController;
