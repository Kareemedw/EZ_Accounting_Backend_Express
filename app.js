const express = require("express");
const mongoose = require("mongoose");
const { PORT = 4001 } = process.env;
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/eza_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
