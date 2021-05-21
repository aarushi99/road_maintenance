const express = require("express");

const markerController = require("../controller/marker.js");

const router = express.Router();

router.get("/markers", markerController.getMarker);

router.post("/postmarker", markerController.postMarker);

module.exports = router;
