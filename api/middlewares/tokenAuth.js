import jwt from "jsonwebtoken";
import { createError } from "../utils/AppError.js";

export const verifyToken = (req, res, next) => {
  console.log("IN TOKEN AUTH");
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "Not AUNTHENTICATED"));

  jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
    if (err) return next(createError(403, "Token Not Valid"));
    req.user = userInfo;
    console.log(req.user, "userINFO");
    next();
  });
};

export const verifyUser = (req, res, next) => {
  console.log("user");
  verifyToken(req, res, () => {
    console.log("in user");
    console.log(req.user.id, req.params);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      console.log("in if");
      next();
    } else {
      return next(createError(403, "You not authorized to carry this action"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You not authorized to carry this action"));
    }
  });
};
