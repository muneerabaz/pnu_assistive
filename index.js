console.log("here we go");
require("dotenv").config();
const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require('method-override');
// const morgan = require('morgan');
// const SweetAlert = require('react-bootstrap-sweetalert');

const app = express();

const authController = require("./controllers/authController");
const clubsController = require("./controllers/clubsController");
const announcementsController = require("./controllers/announcementsController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride('_method'));
app.use("/", authController);

app.get("/", (req, res) => {
  res.send("Hey");
});

app.use("/clubs", clubsController);
app.use("/auth", authController);
app.use("/announcements", announcementsController);

// ADD YOUR CONTROLLER HERE!!!

app.listen(port, () => {
  console.log("---------------------------------------");
  console.log("Express listening on localhost:" + port);
  console.log("---------------------------------------");
});
