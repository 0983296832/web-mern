const express = require("express");
const route = express.Router();
const controller = require("../../controller/product-controller");
const {
  checkAuth,
  checkRole,
} = require("../../controller/auth-controller/verify");

route.get("/get-all", checkAuth, checkRole, controller.getAll);

module.exports = route;
