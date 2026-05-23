const mongoose = require("mongoose");
//const validator = require("validator");

const budget = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "New Budget",
  },

  salary: {
    type: Number,
    default: 0,
  },

  utilityBills: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        default: 0,
      },
    },
  ],

  recurringBills: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        default: 0,
      },
    },
  ],

  additionalBills: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = mongoose.model("Budget", budget);
