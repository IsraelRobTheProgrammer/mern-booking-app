import Hotel from "../models/Hotels.js";

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
  // const failed = true;
  // if (failed)
  //   return next(createError(401, "You need to be Logged In to continue"));

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
  console.log(id, "getHotel");
  try {
    const foundHotel = await Hotel.findById(id);
    res.status(200).json(foundHotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  console.log(others);
  try {
    const foundHotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min | 1, $lte: max || 100000000 },
    }).limit(req.query.limit);
    console.log(req.query);
    res.status(200).json(foundHotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const foundCities = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city });
      })
    );
    res.status(200).json(foundCities);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  const hotelType = await Hotel.countDocuments({ type: "Hotel" });
  const apartmentType = await Hotel.countDocuments({ type: "Apartment" });
  const resortType = await Hotel.countDocuments({ type: "Resort" });
  const villaType = await Hotel.countDocuments({ type: "Villa" });
  const cabinType = await Hotel.countDocuments({ type: "Cabin" });

  console.log("IN COUNT TYPE");
  try {
    res.status(200).json([
      { type: "hotel", count: hotelType },
      { type: "apartment", count: apartmentType },
      { type: "resort", count: resortType },
      { type: "villa", count: villaType },
      { type: "cabin", count: cabinType },
    ]);
  } catch (err) {
    next(err);
  }
};
