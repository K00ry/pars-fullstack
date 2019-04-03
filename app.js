const express = require("express");
const path = require("path");
const mainRoutes = require("./routes");
const KerbStoneroutes = require("./routes/kerbStone");
const Blocks = require("./routes/blocks");
const Furnish = require("./routes/sites");

const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

const app = express();
// const logger = require("morgan");
//
// app.use(logger("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/parsjadval");

// mongoose.connect("process.env.MONGODB_URI");



mongoose.connect(

   // process.env.MONGODB_URI
   //  ||
  "mongodb+srv://koory:" +
    process.env.MONGO_ATLAS_PW +
    "@pars-jadval-4kkmo.mongodb.net/test?retryWrites=true",
     { useNewUrlParser: true }
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
app.use("/admin", Blocks);
app.use("/admin", Furnish);


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  });
});


app.listen(process.env.PORT || 5000);
