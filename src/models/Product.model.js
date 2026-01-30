const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        unique: true,
        index: true
    },
    title: String,
    price: Number,
    discription: String,
    category: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema)