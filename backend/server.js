const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const markerRoutes = require("./routes/marker");
const historyRoutes = require("./routes/history");
const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/markers", markerRoutes);
app.use("/history", historyRoutes);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log("Connected Successfuly");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log("HERE IS AN ERROR");
    console.log(err);
  });
