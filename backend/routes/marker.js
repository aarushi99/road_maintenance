const express = require("express");

const markerController = require("../controller/marker.js");

const router = express.Router();

router.get("/markers", markerController.getMarkers);

router.get("/markers/:mId", markerController.getMarkerDetail);

router.post("/postmarker", markerController.postMarker);

module.exports = router;
