const express = require("express");

const historyController = require("../controller/history.js");

const router = express.Router();

router.get("/history", historyController.getHistory);
router.get("/history/:mId", historyController.getMarkerHistory);

module.exports = router;
