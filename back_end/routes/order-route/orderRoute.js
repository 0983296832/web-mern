const express = require("express");
const route = express.Router();
const controller = require("../../controller/order-controller/index");
const {
  checkAuth,
  checkRole,
} = require("../../controller/auth-controller/verify");

route.post("/create/:id", controller.order);
route.get("/get-all", controller.getAll);

module.exports = route;
