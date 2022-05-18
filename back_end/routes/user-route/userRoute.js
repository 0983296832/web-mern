const route = require("express").Router();
const {
  checkAuth,
  checkRole,
} = require("../../controller/auth-controller/verify");
const controller = require("../../controller/user-controller");

route.get("/get-all", checkAuth, checkRole, controller.findAll);
route.get("/:id", checkAuth, checkRole, controller.findById);
route.post("/get-name", checkAuth, checkRole, controller.findByName);
route.put("/update/:id", checkAuth, controller.updateById);
route.delete("/delete/:id", checkAuth, checkRole, controller.deleteById);
route.post("/upload/:id", checkAuth, controller.upload);
route.delete("/delete-image/:id", checkAuth, controller.deleteImage);

module.exports = route;
