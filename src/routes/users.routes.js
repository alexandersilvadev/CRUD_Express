import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import loginUserController from "../controllers/loginUser.controller";
import readUsersController from "../controllers/readUser.controller";
import readUserProfileController from "../controllers/readUserProfile.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();

router.post("", createUserController);
router.post("/login", loginUserController);
router.get("", verifyIsAdmMiddleware, readUsersController);
router.get("/profile", verifyAuthToken, readUserProfileController);

export default router;
