const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const adminController = require("../controllers/adminController");
const apiController = require("../controllers/apiController");

const initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/user", homeController.getUserPage);
  router.post("/signup", homeController.signup);
  router.get("/admin", adminController.getInfoSchema);
  router.post("/edit/:id", adminController.editInfo);
  router.post("/update/:id", adminController.updateInfo);
  router.post("/delete/:id", adminController.deleteInfo);

  // test API

  router.get("/api/test-api", apiController.test);

  return app.use("/", router);
};

module.exports = initWebRouter;
