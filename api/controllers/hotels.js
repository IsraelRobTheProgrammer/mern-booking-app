import Hotel from "../models/Hotels.js";
import { createError } from "../utils/AppError.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  const failed = true;
  if (failed)
    return next(createError(401, "You need to be Logged In to continue"));

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    await Hotel.findByIdAndDelete(id);
    res.status(204).json("Hotel succesfully deleted");
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const foundHotel = await Hotel.findById(id);
    res.status(200).json(foundHotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const foundHotels = await Hotel.find();
    res.status(204).json(foundHotels);
  } catch (err) {
    next(err);
  }
};