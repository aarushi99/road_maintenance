const express = require("express");

const historyController = require("../controller/history.js");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/history", isAuth, historyController.getHistory);
router.get("/history/:mId", isAuth, historyController.getMarkerHistory);

module.exports = router;
