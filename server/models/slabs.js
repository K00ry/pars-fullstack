"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
    type: String,
    size: String,
    price: String,
    shipping: String
});

const ProductSchema = new Schema({
    genreEn: String,
    genreFarsi: String,
    genreId: String,
    type: String,
    img: String,
    sizes: [sizeSchema]
});
const Slabs = mongoose.model("slabs", ProductSchema);

module.exports.Slabs = Slabs;