"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sizeSchema = new Schema({
  type: String,
  price: String,
  shipping: String
});

var ProductSchema = new Schema({
  genreEn: String,
  genreFarsi: String,
  genreId: String,
  type: String,
  img: String,
  sizes: [sizeSchema]
});

var KerbStone = mongoose.model("kerbstone", ProductSchema);
var sampleProduct = new KerbStone({
  genreEn: "jadval",
  genreFarsi: "جدول",
  genreId: "wet",
  type: "وت پرس",
  img: "/images/jadval/mobile/1.png",
  sizes: [
    {
      type: "۵۰*۳۰*۱۰",
      price: "۴۲۳۰۰",
      shipping: "۳۰۰۰"
    }
  ]
});
// sampleProduct.save((err, product) => {
//   if (err) console.log("Error", err);
//   else console.log("product saved!");
// });
KerbStone.deleteMany({}, err => {
  if (err) console.log("Error", err);
});

module.exports.KerbStone = KerbStone;

// var Dasti = new KerbStone({
//   genreEn: "jadval",
//   genreFarsi: "جدول",
//   genreId: "wet",
//   type: "وت پرس",
//   img: "/images/jadval/mobile/1.png"
// });
