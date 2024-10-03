const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moment = require("moment");
var morgan = require("morgan");
require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://ealozaher:1abN5qSYwjPi0hhh@playoapp.mtmiw.mongodb.net/?retryWrites=true&w=majority&appName=PlayoApp"
  )
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/api/v1/users", userRouter);
