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

  currentBalance: {
    type: Number,
    default: 0,
  },

  date: {
    type: String,
    default: "",
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
      currentBalance: {
        type: Number,
        default: 0,
      },
      paid: {
        type: Boolean,
        default: false,
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
      currentBalance: {
        type: Number,
        default: 0,
      },
      paid: {
        type: Boolean,
        default: false,
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
      currentBalance: {
        type: Number,
        default: 0,
      },
      paid: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model("Budget", budget);
