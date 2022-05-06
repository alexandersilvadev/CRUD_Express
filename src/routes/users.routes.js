import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import loginUserController from "../controllers/loginUser.controller";
import readUsersController from "../controllers/readUser.controller";
import readUserProfileController from "../controllers/readUserProfile.controller";
import updateUserController from "../controllers/updateUser.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();

router.post("", createUserController);
router.post("/login", loginUserController);
router.get("", verifyIsAdmMiddleware, readUsersController);
router.get("/profile", verifyAuthToken, readUserProfileController);
router.patch("/:id", verifyAuthToken, updateUserController);
router.delete("/:id", verifyAuthToken, deleteUserController);

export default router;
