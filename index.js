const express = require("express");
const multer = require("multer");

const route = require("./routes/route");

const app = express();

app.use(multer().any());

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://user-open-to-all-trainees:AutogenerateSecurePassword@training-cluster.xohin.mongodb.net/groupCDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb running on 27017"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});