const MarkerModel = require("../models/Marker");
const HistoryModel = require("../models/History");
const axios = require("axios");

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
  const filter = { latitude: latitude, longitude: longitude };

  const params = {
    access_key: "b4d46c5b7faf3275796f247daa1457f6",
    query: `${latitude / 10000},${longitude / 10000}`,
  };

  axios
    .get("http://api.positionstack.com/v1/reverse", { params })
    .then((response) => {
      //   console.log(response.data);
      return response.data.data;
    })
    .then((resData) => {
      console.log("resData: ", resData);
      const new_marker = new MarkerModel({
        latitude: latitude,
        longitude: longitude,
        no_of_flags: 0,
        priority: priority,
        isCompleted: false,
        address:
          resData[0].name +
          "," +
          resData[0].neighbourhood +
          "," +
          resData[0].region +
          "," +
          resData[0].country,
        isFalse: false,
      });
      MarkerModel.findOne(filter)
        .then((result) => {
          if (!result) {
            new_marker
              .save()
              .then((result_marker) => {
                console.log("Marker Added Successfully");
                const new_entry = new HistoryModel({
                  latitude: latitude,
                  longitude: longitude,
                  address:
                    resData[0].name +
                    "," +
                    resData[0].neighbourhood +
                    "," +
                    resData[0].region +
                    "," +
                    resData[0].country,
                  markerId: result_marker._id,
                  priority: priority,
                });
                new_entry.save().then((result) => {
                  console.log("Entry added successfully");
                });
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
                const new_entry = new HistoryModel({
                  latitude: latitude,
                  longitude: longitude,
                  address:
                    resData[0].name +
                    "," +
                    resData[0].neighbourhood +
                    "," +
                    resData[0].region +
                    "," +
                    resData[0].country,
                  markerId: found_marker._id,
                });
                new_entry.save().then((result) => {
                  console.log("Entry added successfully");
                });
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
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getMarkerDetail = (req, res, next) => {
  HistoryModel.find({ markerId: req.params.mId })
    .then((markers) => {
      console.log("Fetched related markers successfully");
      markers.map((marker) => {
        marker.latitude = marker.latitude / 10000;
        marker.longitude = marker.longitude / 10000;
      });
      res.status(200).json({
        message: "Fetched related markers successfully",
        markers: markers,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
