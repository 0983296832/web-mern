const express = require("express");
const route = express.Router();
const controller = require("../../controller/product-controller");
const verify = require("../../controller/auth-controller/verify");

route.get("/get-all", controller.getAll);

module.exports = route;
