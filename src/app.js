const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const productRouter = require("./routes/product.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use("/api/auth", authRoutes);
app.use("/product", productRouter);


module.exports = app;