const HistoryModel = require("../models/History");

exports.getHistory = (req, res, next) => {
  HistoryModel.find()
    .then((marker_history) => {
      console.log("Fetched history successfully");
      marker_history.map((marker) => {
        marker.latitude = marker.latitude / 10000;
        marker.longitude = marker.longitude / 10000;
      });
      res.status(200).json({
        message: "Fetched markers successfully",
        marker_history: marker_history,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getMarkerHistory = (req, res, next) => {
  console.log("mid history component BACKEND:", req.params.mId);

  HistoryModel.find({ markerId: req.params.mId })
    .then((markers) => {
      console.log("Fetched marker history successfully");
      markers.map((marker) => {
        marker.latitude = marker.latitude / 10000;
        marker.longitude = marker.longitude / 10000;
      });
      res.status(200).json({
        message: "Fetched marker history successfully",
        marker_history: markers,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postHistory = (req, res, next) => {
  const latitude = Math.round(req.body.latitude * 10000);
  const longitude = Math.round(req.body.longitude * 10000);
  const address = req.body.address;
};
