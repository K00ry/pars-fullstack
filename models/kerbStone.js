"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sizeSchema = new Schema({
  type: { type: String, default: "۲۳" },
  price: { type: String, default: "۲۳" },
  shipping: { type: String, default: "۲۳" }
});

// var ProductSchema = new Schema({
//   genreEn: { type: String, default: "jadval" },
//   genreFarsi: { type: String, default: "جدول" },
//   genreId: { type: String, default: "wet" },
//   type: { type: String, default: "wet" },
//   img: { type: String, default: " " },
//   sizes: [sizeSchema]
// });

var ProductSchema = new Schema({
  genreEn: String,
  genreFarsi: String,
  genreId: String,
  type: String,
  img: String,
  sizes: [sizeSchema]
});
var KerbStone = mongoose.model("kerbstone", ProductSchema);

// sampleProduct.save((err, product) => {
//   if (err) console.log("Error", err);
//   else console.log("product saved!");
// });
// KerbStone.deleteMany({}, err => {
//   if (err) console.log("Error", err);
// });

module.exports.KerbStone = KerbStone;
