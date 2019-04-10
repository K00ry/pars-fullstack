"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sizeSchema = new Schema({
    type: String,
    kg:String

});


const ProductSchema = new Schema({
    genreEn: String,
    genreFarsi: String,
    genreId: String,
    type: String,
    img: String,
    sizes: [sizeSchema]
});
const Barriers = mongoose.model("barriers", ProductSchema);
module.exports.Barriers = Barriers;