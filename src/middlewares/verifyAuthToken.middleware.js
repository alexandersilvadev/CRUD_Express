import jwt from "jsonwebtoken";

const verifyAuthToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    req.user = decoded.user;

    next();
  });
};

export default verifyAuthToken;
