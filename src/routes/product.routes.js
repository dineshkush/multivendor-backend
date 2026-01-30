const express = require("express");
const { product, getProducts, getSingleProduct } = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const productRouter = express.Router();

productRouter.post("/", authMiddleware, product)
productRouter.get("/", authMiddleware, getProducts)
productRouter.get("/:productId", authMiddleware, getSingleProduct)

module.exports = productRouter;