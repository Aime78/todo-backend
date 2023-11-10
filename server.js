const express = require("express");
const studentRoutes = require("./routes");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3000;

// app.use(express.json())

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
