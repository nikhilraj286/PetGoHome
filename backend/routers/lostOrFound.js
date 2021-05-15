const express = require("express");
const db = require("../models");
const app = require("../app");
const router = express.Router();

app.post("/reportLostPet", async (req, res) => {
  console.log(req.body);
  try {
    let com = await db.LostPet.create({
      pet_name: req.body.pet_name,
      record_type: req.body.record_type,
      pet_type: req.body.pet_type,
      phone: req.body.phone,
      email: req.body.email,
      missing_date: req.body.missing_date,
      location: req.body.location,
      picture: req.body.picture,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      ownerid: req.body.ownerid,
      breed: req.body.breed,
      gender: req.body.gender,
    });
    console.log(com);
    return res.status(200).send({});
  } catch (error) {
    console.log(error);
    return res.status(500).send({});
  }
});

module.exports = router;
