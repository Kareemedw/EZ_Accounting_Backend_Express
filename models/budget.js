const mongoose = require("mongoose");
//const validator = require("validator");

const budget = new mongoose.Schema({
  isOpen: {
    type: Boolean,
    default: false,
  },
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

  groceryBudget: {
    type: Number,
    default: 0,
  },

  groceryItems: [
    {
      id: String,
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

  trainPassBudget: {
    type: Number,
    default: 0,
  },

  trainPassItems: [
    {
      id: String,
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
