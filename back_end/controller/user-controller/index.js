const usersDB = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const { passwordValidation } = require("../../validate/validate");
const cloudinary = require("../../helper/cloudinaryConfig");
const ImageModel = require("../../models/imageModel");

exports.findAll = async (req, res) => {
  try {
    const data = await usersDB.find();
    return res.status(200).json({
      status: "200",
      message: "get all user successfully!",
      result: data,
    });
  } catch (error) {
    return res.status(400).json({
      status: "400",
      message: error.message,
      result: [],
    });
  }
};
exports.findByName = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: "400",
      message: "get user failed!",
      result: [],
    });
  }
  try {
    const data = await usersDB.find({ name: req.body.name });
    return res.status(200).json({
      status: "200",
      message: "get all user successfully!",
      result: data,
    });
  } catch (error) {
    return res.status(400).json({
      status: "400",
      message: error.message,
      result: [],
    });
  }
};

exports.findById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({
      status: "400",
      message: "get user failed!",
      result: [],
    });
  }
  try {
    const data = await usersDB.findById(req.params.id);
    return res.status(200).json({
      status: "200",
      message: "get user successfully!",
      result: data,
    });
  } catch (error) {
    return res.status(200).json({
      status: "400",
      message: error.message,
      result: [],
    });
  }
};
exports.updateById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({
      status: "400",
      message: "update user failed!",
      result: [],
    });
  }

  let newBody;
  if (req.body.password) {
    //validate the password
    const { error } = passwordValidation({ password: req.body.password });
    if (error)
      return res
        .status(400)
        .json({ status: 400, message: error.details[0].message, result: [] });
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    newBody = { ...req.body, password: hashedPassword };
  } else {
    newBody = { ...req.body };
  }

  try {
    const data = await usersDB.findByIdAndUpdate(req.params.id, newBody, {
      useFindAndModify: false,
      new: true,
    });
    return res.status(200).json({
      status: "200",
      message: "update user successfully!",
      result: data,
    });
  } catch (error) {
    return res.status(200).json({
      status: "400",
      message: error.message,
      result: [],
    });
  }
};
exports.deleteById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({
      status: "400",
      message: "delete user failed!",
    });
  }
  try {
    await usersDB.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: "200",
      message: "delete user successfully!",
    });
  } catch (error) {
    return res.status(200).json({
      status: "400",
      message: error.message,
    });
  }
};
// exports.deleteById = async (req, res) => {
//   if (!req.params.id) {
//     return res.status(400).json({
//       status: "400",
//       message: "delete user failed!",
//     });
//   }
//   try {
//     await usersDB.findByIdAndDelete(req.params.id);
//     return res.status(200).json({
//       status: "200",
//       message: "delete user successfully!",
//     });
//   } catch (error) {
//     return res.status(200).json({
//       status: "400",
//       message: error.message,
//     });
//   }
// };

exports.upload = async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ status: 400, message: "Content can not be empty!" });
  }
  try {
    const id = req.params.id;
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new img
    let newImage = new ImageModel({
      user_id: id,
      imageUrl: result.url,
      public_id: result.public_id,
    });

    // delete existing Image
    await ImageModel.deleteOne({ user_id: id });
    // Save img
    const image = await newImage.save();
    usersDB.findById(id, (err, result) => {
      if (err) {
        res.status(500).json({
          success: "false",
          message: "can not find product",
        });
      } else {
        result.image = image;
        result.save();
      }
    });
    res.status(200).json({ status: "200", ...image });
  } catch (err) {
    return res.status(400).json({ status: "400", message: error.message });
  }
};
exports.deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const img = await ImageModel.findById(imageId);
    if (!img) {
      return res
        .status(400)
        .json({ status: "400", message: "image not exists" });
    } else {
      // delete existing Image
      await ImageModel.findByIdAndRemove(imageId);
      // const result = await cloudinary.uploader.destroy(img.public_id);
      await usersDB.findByIdAndUpdate(
        img.id,
        { image: "" },
        {
          useFindAndModify: false,
          new: true,
        }
      );
      return res.json({ result });
    }
  } catch (error) {
    return res.status(400).json({ status: "400", message: error.message });
  }
};
