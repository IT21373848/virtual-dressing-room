const express = require("express");
const messurementRoutes = express.Router();

let Messurements = require("../models/Messurements.jsx");

//insert
messurementRoutes.route("/add").post(function (req, res) {
  let messuremnts = new Messurements(req.body);
  messuremnts
    .save()
    .then((messuremnts) => {
      res.status(200).json({ messuremnts: "messuremnts added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("Unable to save");
    });
});

//read
// messurementRoutes.route("/").get(async function (req, res) {
//   try {
//     const messuremnts = await Messurements.find();
//     res.json(messuremnts);
//   } catch (err) {
//     console.log(err);
//   }
// });

messurementRoutes.route("/").get(async function (req, res) {
  try {
    const email = req.query.email; // Get the email from the query parameters
    let messuremnts;
    if (email) {
      messuremnts = await Messurements.findOne({ email: email });
    } else {
      messuremnts = await Messurements.find();
    }
    if (!messuremnts) {
      // Handle the case when no measurements are found
      return res.status(404).json({ error: "No measurements found" });
    }

    res.json(messuremnts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//delete
messurementRoutes.route("/delete/:id").get(async (req, res) => {
  try {
    const messuremnts = await Messurements.findByIdAndRemove({
      _id: req.params.id,
    });
    if (messuremnts) {
      res.json("Successfully removed");
    } else {
      res.json("messuremnts not found");
    }
  } catch (err) {
    res.json(err);
  }
});

// Update
messurementRoutes.route("/update/:id").put(async (req, res) => {
  try {
    const measurement = await Messurements.findById(req.params.id);

    if (!measurement) {
      return res.status(404).json({ error: "messuremnts not found" });
    }

    if (!req.body.height || !req.body.weight) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    measurement.email = req.body.email;
    measurement.gender = req.body.gender;
    measurement.height = req.body.height;
    measurement.weight = req.body.weight;
    measurement.chest = req.body.chest;
    measurement.waist = req.body.waist;
    measurement.hips = req.body.hips;
    await measurement.save();
    res.json(measurement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = messurementRoutes;
