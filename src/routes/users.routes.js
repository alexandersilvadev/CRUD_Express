import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import loginUserController from "../controllers/loginUser.controller";

const router = Router();

router.post("", createUserController);
router.post("/login", loginUserController);

export default router;
