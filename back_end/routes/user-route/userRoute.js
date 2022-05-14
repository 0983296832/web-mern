const route = require("express").Router();
const verify = require("../../controller/auth-controller/verify");
const controller = require("../../controller/user-controller");

route.get("/get-all", verify, controller.getAll);
