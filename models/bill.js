const mongoose = require("mongoose");
const validator = require("validator");

const bill = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },

  category: {
    type: String,
    required: true,
    enum: ["utility", "recurring", "additional"],
  },

  isRecurring: {
    type: Boolean,
    default: false,
  },

  dueDate: {
    type: Date,
  },

  date: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Bill", bill);
