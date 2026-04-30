const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  isFaculty: {
    type: Boolean,
    required: true,
    default: false   // ✅ prevents validation error
  },
  aadharNumber: {
    type: String
  },
  phoneNumber: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  username: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);