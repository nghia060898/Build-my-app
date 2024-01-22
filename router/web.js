const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const adminController = require("../controllers/adminController");

const initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/user", homeController.getUserPage);
  router.post("/signup", homeController.signup);
  router.get("/admin", adminController.getInfoSchema);
  // router.get("/users", homeController.getInfoSchema)
  return app.use("/", router);
};

module.exports = initWebRouter;
