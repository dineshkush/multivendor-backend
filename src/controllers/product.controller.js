const Product = require("../models/Product.model");
const getNextProductId = require("../utils/getNextProductId");


exports.product = async (req, res) => {
    try {
        const {title, price, discription, category} = req.body;

        const productId = await getNextProductId();

        const product = await Product.create({
            productId,
            title,
            price,
            discription,
            category,
            createdBy: req.user.id
        });

        res.status(201).json({message: "Product created successfully"})

    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: products.length,
      products
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findOne({ productId })
      .populate("createdBy", "name email");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};