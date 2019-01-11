var express = require("express");
const mainRoutes = require("./routes");
const KerbStoneroutes = require("./routes/kerbStone");
const Blocks = require("./routes/blocks");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const logger = require("morgan");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "client/build")));

var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/parsjadval");
mongoose.connect(
  "mongodb://koory:" +
    process.env.MONGO_ATLAS_PW +
    "@pars-jadval-shard-00-00-4kkmo.mongodb.net:27017,pars-jadval-shard-00-01-4kkmo.mongodb.net:27017,pars-jadval-shard-00-02-4kkmo.mongodb.net:27017/test?ssl=true&replicaSet=pars-jadval-shard-0&authSource=admin&retryWrites=true"
);

const db = mongoose.connection;

db.on("error", err => {
  console.error("connection error:", err);
});

db.once("open", () => {
  console.log("DB connection successful!");
});

app.use("/", mainRoutes);
app.use("/admin", KerbStoneroutes);
// app.use("/admin", Blocks);

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
