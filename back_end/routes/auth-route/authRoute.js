const route = require("express").Router();
const verify = require("../../controller/auth-controller/verify");
const controller = require("../../controller/auth-controller");

route.post("/register", controller.register);
route.post("/login", controller.login);
route.post("/refresh", controller.refreshToken);
route.get("/logout", verify, controller.logout);
route.post("/forgotpassword", controller.forgotPassword);
route.put("/resetpassword", controller.resetPassword);

module.exports = route;
