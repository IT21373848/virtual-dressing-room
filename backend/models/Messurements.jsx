const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Measurements = new Schema(
  {
    email: {
      type: String,
    },

    gender: {
      type: String,
    },

    height: {
      type: String,
    },

    weight: {
      type: String,
      required: true,
    },

    chest: {
      type: String,
      required: true,
    },

    waist: {
      type: String,
      required: true,
    },

    hips: {
      type: String,
      required: true,
    },
  },
  {
    collection: "measurements",
  }
);

module.exports = mongoose.model("Measurements", Measurements);
