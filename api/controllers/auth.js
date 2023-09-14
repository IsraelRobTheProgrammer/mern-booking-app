import User from "../models/Users.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
//   console.log(username, email, password);
  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json("User Has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  res.send("Hello From Auth reg Route");
};
