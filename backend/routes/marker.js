const express = require("express");

const markerController = require("../controller/marker.js");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/markers", isAuth, markerController.getMarkers);

router.get("/markers/:mId", isAuth, markerController.getMarkerDetail);

router.post("/postmarker", isAuth, markerController.postMarker);

module.exports = router;
