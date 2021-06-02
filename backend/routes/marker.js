const express = require("express");

const markerController = require("../controller/marker.js");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", isAuth, markerController.getMarkers);

router.get("/:mId", isAuth, markerController.getMarkerDetail);

router.post("/postmarker", isAuth, markerController.postMarker);

router.post("/postmarker/app", markerController.postMarker);

router.post("/delete/:mId", isAuth, markerController.deleteMarker);

router.post("/complete/:mId", isAuth, markerController.completeMarker);

module.exports = router;
