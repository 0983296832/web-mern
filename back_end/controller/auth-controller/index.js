const usersDB = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  registerValidation,
  loginValidation,
} = require("../../validate/validate");

let arrRefreshToken = [];



exports.register = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "400",
      message: "Content can not be empty",
      result: null,
    });
  } else {
    const { error } = registerValidation(req.body);
    if (error)
      return res.status(400).json({
        status: "400",
        message: error.details[0].message,
        result: null,
      });

    //check email
    const emailExist = await usersDB.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).send({
        status: "400",
        message: "Email already exists",
        result: null,
      });
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const user = new usersDB({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });
    try {
      const saveUser = await user.save();
      return res
        .status(201)
        .json({ status: "201", message: "Register success", user: saveUser });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};

exports.login = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "400",
      message: "Content can not be empty",
      result: null,
    });
  } else {
    //validate the data
    const { error } = loginValidation(req.body);
    if (error)
      return res
        .status(400)
        .json({ status: 400, message: error.details[0].message, result: null });

    const user = await usersDB.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ status: 400, message: "user not found", result: null });
    }
    //check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res
        .status(400)
        .json({ status: 400, message: "Password incorrect", result: null });

    const { _id, name, email, role, ...rest } = user;

    //create token
    const token = jwt.sign(
      { _id, name, email, role },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { _id, name, email, role },
      process.env.TOKEN_REFRESH,
      {
        expiresIn: "365d",
      }
    );
    arrRefreshToken.push(refreshToken);
    res.header("auth-token", token);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    return res.status(200).json({
      status: 400,
      message: "login success",
      result: { token, refreshToken },
    });
  }
};

exports.refreshToken = async (req, res) => {
  const refreshToken = req.headers.cookie.substring(
    req.headers.cookie.indexOf("=") + 1
  );
  if (!refreshToken) {
    res.status(400).json({ status: 400, message: "You are not authenticated" });
  }
  if (!arrRefreshToken.includes(refreshToken))
    return res.status(400).json({ status: 400, message: "Token is not valid" });
  jwt.verify(refreshToken, process.env.TOKEN_REFRESH, (err, user) => {
    if (err) {
      return res.status(400).json({ status: 400, message: err.message });
    }
    const { _id, name, email, role, ...rest } = user;
    arrRefreshToken = arrRefreshToken.filter((token) => token !== refreshToken);
    const newAccessToken = jwt.sign(
      { _id, name, email, role },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const newRefreshToken = jwt.sign(
      { _id, name, email, role },
      process.env.TOKEN_REFRESH,
      {
        expiresIn: "365d",
      }
    );
    arrRefreshToken.push(newRefreshToken);
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    res.status(200).json({
      status: 400,
      message: "refresh success",
      token: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
};

exports.logout = (req, res) => {
  res.removeHeader("auth-token");
  return res.status(200).json({ status: "200", message: "logout success" });
};
