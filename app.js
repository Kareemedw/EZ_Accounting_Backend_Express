const express = require("express");
const mongoose = require("mongoose");
const { PORT = 4001 } = process.env;
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/eza_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
