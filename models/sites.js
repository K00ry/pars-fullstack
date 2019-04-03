"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sizeSchema = new Schema({
    type: String,
    key:String
});


const ProductSchema = new Schema({
    genreEn: String,
    genreFarsi: String,
    genreId: String,
    type: String,
    img: String,
    sizes: [sizeSchema]
});
const Sites = mongoose.model("sites", ProductSchema);

module.exports.Sites = Sites;