const Counter = require("../models/Counter.model");

const getNextProductId = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "product" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  return "PROD-" + String(counter.seq).padStart(6, "0");
};

module.exports = getNextProductId;
