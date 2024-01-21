const express = require("express");

const router = express.Router();

const initWebRouter = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello Nghia")
    })
    return app.use("/", router)
}

module.exports = initWebRouter;