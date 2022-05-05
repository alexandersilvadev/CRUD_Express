import jwt from "jsonwebtoken";

const verifyIsAdmMiddleware = (req, res, next) => {
  const toke = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    if (!decoded.user.isAdmin) {
      return res.status(401).json({ message: "User is not Adm" });
    }
    next();
  });
};

export default verifyIsAdmMiddleware;
