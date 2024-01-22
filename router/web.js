const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController")

const initWebRouter = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/user", homeController.getUserPage)
    router.post("/signup", homeController.getInfoSchema)
    return app.use("/", router)
}

module.exports = initWebRouter;