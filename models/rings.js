"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sizeSchema = new Schema({
    type: { type: String, required: true },
    price: { type: String, required: true },
    shipping: { type: String, required: true }
});


const ProductSchema = new Schema({
    genreEn: String,
    genreFarsi: String,
    genreId: String,
    type: String,
    img: String,
    sizes: [sizeSchema]
});
const Rings = mongoose.model("rings", ProductSchema);



module.exports.Rings = Rings;
