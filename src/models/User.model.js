const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String
  }

  // role: {
  //   type: String,
  //   enum: ["user", "vendor", "admin"],
  //   default: "user"
  // }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);