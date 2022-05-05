import readUserProfileService from "../services/readUserProfile";

const readUserProfileController = (req, res) => {
  const { id } = req.user;

  const user = readUserProfileService(id);

  return res.status(200).json(user);
};

export default readUserProfileController;
