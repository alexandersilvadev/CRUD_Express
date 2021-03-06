import jwt from "jsonwebtoken";

const verifyIsAdmMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    if (!decoded.user.isAdm) {
      return res.status(401).json({ message: "User is not Adm" });
    }

    req.user = decoded.user;

    next();
  });
};

export default verifyIsAdmMiddleware;
