const MarkerModel = require("../models/Marker");
const HistoryModel = require("../models/History");

exports.getMarkers = (req, res, next) => {
  MarkerModel.find()
    .then((markers) => {
      console.log("Fetched markers successfully");
      markers.map((marker) => {
        marker.latitude = marker.latitude / 10000;
        marker.longitude = marker.longitude / 10000;
      });
      res.status(200).json({
        message: "Fetched markers successfully",
        markers: markers,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postMarker = (req, res, next) => {
  const latitude = Math.round(req.body.latitude * 10000);
  const longitude = Math.round(req.body.longitude * 10000);
  const priority = req.body.priority;
  const address = req.body.address;
  const filter = { latitude: latitude, longitude: longitude };

  const new_marker = new MarkerModel({
    latitude: latitude,
    longitude: longitude,
    no_of_flags: 0,
    priority: priority,
    isCompleted: false,
    address: address,
    isFalse: false,
  });
  const new_entry = new HistoryModel({
    latitude: latitude,
    longitude: longitude,
    address: address,
  });
  new_entry.save().then((result) => {
    console.log("Entry added successfully");
  });

  MarkerModel.findOne(filter)
    .then((result) => {
      if (!result) {
        new_marker
          .save()
          .then((result_marker) => {
            console.log("Marker Added Successfully");
            res.status(201).json({
              message: "Marker created successfully",
              marker: result_marker,
            });
          })
          .catch((err1) => {
            console.log(err1);
          });
      } else {
        result.no_of_flags = result.no_of_flags + 1;
        result
          .save()
          .then((found_marker) => {
            console.log("Marker Updated successfully");
            res.status(201).json({
              message: "Marker Updated successfully",
              marker: found_marker,
            });
          })
          .catch((err2) => {
            console.log(err2);
          });
      }
    })
    .catch((err3) => {
      console.log(err3);
    });

};
