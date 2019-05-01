"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
    img:String,
    type: String,
    inSquarefeet:String,
    toosi:String,
    size: String,
    red:String,
    price: String,
    yellowmix:String,
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
const Pavers = mongoose.model("pavers", ProductSchema);

module.exports.Pavers = Pavers;