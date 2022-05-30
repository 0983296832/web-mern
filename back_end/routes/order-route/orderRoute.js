const express = require("express");
const route = express.Router();
const controller = require("../../controller/order-controller/index");
const {
  checkAuth,
  checkRole,
} = require("../../controller/auth-controller/verify");

route.post("/create/:id", checkAuth, checkRole, controller.order);
route.put("/update/:id", checkAuth, checkRole, controller.update);
route.get("/get-all", checkAuth, checkRole, controller.getAll);

module.exports = route;
