import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    id: uuidv4(),
    isAdm,
    createdAt: new Date(),
    updatedAt: new Date(),
    password: hashedPassword,
  };

  users.push(newUser);

  const { password: passwordHidden, ...userWithoutPassword } = newUser;

  return userWithoutPassword;
};

export default createUserService;
