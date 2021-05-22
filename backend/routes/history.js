const express = require("express");

const historyController = require("../controller/history.js");

const router = express.Router();

router.get("/history", historyController.getHistory);

module.exports = router;
