var express = require("express");
var routes = require("./routes/routes");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var app = express();
var logger = require("morgan");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "client/build")));

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/parsjadval");

const db = mongoose.connection;

db.on("error", err => {
  console.error("connection error:", err);
});

db.once("open", () => {
  console.log("DB connection successful!");
});

app.use("/", routes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(process.env.PORT || 5000);
