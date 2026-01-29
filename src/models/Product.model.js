const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    discription: String,
    category: String,
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema)