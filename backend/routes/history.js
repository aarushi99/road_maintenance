const express = require("express");

const historyController = require("../controller/history.js");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", isAuth, historyController.getHistory);
router.get("/:mId", isAuth, historyController.getMarkerHistory);

module.exports = router;
