const mongoose = require('mongoose');

const canteenSchema = new mongoose.Schema({
  FoodName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Canteen", canteenSchema);














