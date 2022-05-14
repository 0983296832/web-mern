const route = require("express").Router();
const verify = require("../../controller/auth-controller/verify");
const controller = require("../../controller/user-controller");

route.get("/get-all", verify, controller.findAll);
route.get("/:id", verify, controller.findById);
route.post("/get-name", verify, controller.findByName);
route.put("/update/:id", verify, controller.updateById);
route.delete("/delete/:id", verify, controller.deleteById);

module.exports = route;
