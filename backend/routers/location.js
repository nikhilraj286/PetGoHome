const express = require("express");
const db = require("../models");
const app = require("../app");
const { Op } = require("sequelize");
const router = express.Router();
const Promise = require("bluebird");
const moment = require("moment");
const sequelize = require("./../SQL");

app.post("/getLocations", async (req, res) => {
  try {
    const loc = await db.Data.findAll({
      limit: 10,
      where: {
        location: {
          [Op.and]: [
            { [Op.substring]: req.body.city || "" },
            {
              [Op.substring]: req.body.state ? " " + req.body.state + " " : "",
            },
            { [Op.substring]: req.body.pin || "" },
          ],
        },
      },
      attributes: [
        "id",
        "record_type",
        "type",
        "gender",
        "color",
        "breed",
        "missing_date",
        "latitude",
        "longitude",
        "location",
        "image",
      ],
    });
    res.status(200).send(loc);
  } catch (error) {
    console.log(error);
  }
});

app.post("/getAllLocations", async (req, res) => {
  try {
    const loc = await db.Data.findAll({
      where: {
        location: {
          [Op.and]: [
            { [Op.substring]: req.body.city || "" },
            {
              [Op.substring]: req.body.state ? " " + req.body.state + " " : "",
            },
            { [Op.substring]: req.body.pin || "" },
          ],
        },
      },
      attributes: [
        "id",
        "record_type",
        "type",
        "gender",
        "color",
        "breed",
        "missing_date",
        "latitude",
        "longitude",
        "location",
        "image",
      ],
    });
    res.status(200).send(loc);
  } catch (error) {
    console.log(error);
  }
});
app.post("/getShelters", async (req, res) => {
  try {
    let sheltrs = await db.Shelters.findAll({});
    let output = [];
    sheltrs.forEach((item) => {
      let distance =
        ((Math.acos(
          Math.sin((req.body.latitude * Math.PI) / 180) *
            Math.sin((item.latitude * Math.PI) / 180) +
            Math.cos((req.body.latitude * Math.PI) / 180) *
              Math.cos((item.latitude * Math.PI) / 180) *
              Math.cos(((req.body.longitude - item.longitude) * Math.PI) / 180)
        ) *
          180) /
          Math.PI) *
        60 *
        1.1515;
      if (distance < 5) {
        output.push(item);
      }
    });
    res.status(200).send(output);
  } catch (error) {
    res.status(400).send({});
  }
});

app.post("/getLocationsForFeed", async (req, res) => {
  // console.log(req.body);
  try {
    // let qry = {};
    // if (req.body.pet_type !== "All") {
    //   qry["pet_type"] = req.body.pet_type;
    // }
    // if (req.body.record_type !== "All") {
    //   qry["record_type"] = req.body.record_type;
    // }
    // qry["missing_date"] = {
    //   [Op.gte]: moment().subtract(req.body.missing_date, "days").toDate,
    // };
    // console.log(qry);
    const loc = await db.LostPet.findAll({
      limit: 20,
      where: {
        pet_type: {
          [Op.substring]: req.body.pet_type !== "All" ? req.body.pet_type : "",
        },
        record_type: {
          [Op.substring]:
            req.body.record_type !== "All" ? req.body.record_type : "",
        },
        missing_date: {
          [Op.gte]:
            req.body.missing_date !== "All"
              ? moment().subtract(req.body.missing_date, "days").toDate()
              : moment().subtract("1000", "days").toDate(),
        },
      },
      include: [db.User],
    });
    // console.log(loc);
    res.status(200).send(loc);
  } catch (error) {
    console.log(error);
  }
});

// app.post("/dogPopulate", async (req, res) => {
//   try {
//     const loc = await db.Data.destroy({
//       where: {
//         image: { [Op.eq]: null },
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post("/setLatLong", async (req, res) => {
//   console.log(req.body);
//   try {
//     await db.Data.update(
//       { latitude: 2, longitude: 2 },
//       {
//         where: { id: { [Op.eq]: 22 } },
//       }
//     ).then((result) => {
//       console.log(result);
//       res.status(200).send(result);
//     });
//   } catch (error) {
//     console.log(err);
//   }
// });

app.post("/setLatLong", async (req, res) => {
  console.log(req.body);
  try {
    await db.Data.update(
      {
        location: req.body.loc,
      },
      {
        where: { id: req.body.id },
      }
    ).then((result) => {
      console.log(result);
      res.status(200).end();
    });
  } catch (error) {
    console.log(err);
  }
});

app.post("/getLatLong", async (req, res) => {
  try {
    await db.Data.findOne({
      where: { id: req.body.id },
    }).then((result) => {
      res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/postSighting", async (req, res) => {
  console.log(req.body);
  try {
    const sight = await db.Sightings.create({
      name: req.body.name,
      userid: req.body.userid,
      petid: req.body.petid,
      time_stamp: sequelize.fn("NOW"),
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      location: req.body.location,
    });
    // console.log(sight);
    res.status(200).send(sight);
  } catch (error) {
    console.log(error);
    res.status(400).send({});
  }
});

app.post("/getSightings", async (req, res) => {
  try {
    const sight = await db.Sightings.findAll({
      where: { petid: req.body.petid },
      order: [["time_stamp", "ASC"]],
    });
    // console.log(sight);
    res.status(200).send(sight);
  } catch (error) {
    console.log(error);
    res.status(400).send({});
  }
});

app.post("/postSighting", async (req, res) => {
  // console.log(req.body);
  try {
    const sight = await db.Sightings.create({
      name: req.body.name,
      userid: req.body.userid,
      petid: req.body.petid,
      time_stamp: sequelize.fn("NOW"),
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      location: req.body.location,
    });
    // console.log(sight);
    res.status(200).send(sight);
  } catch (error) {
    console.log(error);
    res.status(400).send({});
  }
});

app.post("/getSightings", async (req, res) => {
  try {
    const sight = await db.Sightings.findAll({
      where: { petid: req.body.petid },
      order: [["time_stamp", "ASC"]],
    });
    // console.log(sight);
    res.status(200).send(sight);
  } catch (error) {
    console.log(error);
    res.status(400).send({});
  }
});

app.post("/petFound", async (req, res) => {
  try {
    await db.LostPet.update(
      { record_type: "Found" },
      { where: { petid: req.body.petid } }
    );
  } catch (error) {
    res.status(200).send({});
  }
});

app.post("/getShelters", async (req, res) => {
  try {
    let sheltrs = await db.Shelters.findAll({});
    let output = [];
    sheltrs.forEach((item) => {
      let distance =
        ((Math.acos(
          Math.sin((req.body.latitude * Math.PI) / 180) *
            Math.sin((item.latitude * Math.PI) / 180) +
            Math.cos((req.body.latitude * Math.PI) / 180) *
              Math.cos((item.latitude * Math.PI) / 180) *
              Math.cos(((req.body.longitude - item.longitude) * Math.PI) / 180)
        ) *
          180) /
          Math.PI) *
        60 *
        1.1515;
      if (distance < 5) {
        output.push(item);
      }
    });
    res.status(200).send(output);
  } catch (error) {
    res.status(400).send({});
  }
});

app.post("/searchPets", async (req, res) => {
  console.log(req.body);
  try {
    let pets = await db.LostPet.findAll({
      where: {
        pet_type: {
          [Op.substring]: req.body.pet_type !== "All" ? req.body.pet_type : "",
        },
        record_type: {
          [Op.substring]:
            req.body.record_type !== "All" ? req.body.record_type : "",
        },
        missing_date: {
          [Op.gte]:
            req.body.missing_date !== "All"
              ? moment().subtract(req.body.missing_date, "days").toDate()
              : moment().subtract("1000", "days").toDate(),
        },
      },
      include: [db.User],
    });
    let output = [];
    pets.forEach((item) => {
      let distance =
        ((Math.acos(
          Math.sin((req.body.latitude * Math.PI) / 180) *
            Math.sin((item.latitude * Math.PI) / 180) +
            Math.cos((req.body.latitude * Math.PI) / 180) *
              Math.cos((item.latitude * Math.PI) / 180) *
              Math.cos(((req.body.longitude - item.longitude) * Math.PI) / 180)
        ) *
          180) /
          Math.PI) *
        60 *
        1.1515;
      if (distance < req.body.radius) {
        output.push(item);
      }
    });
    res.status(200).send(output);
  } catch (error) {
    res.status(400).send({});
  }
});

module.exports = router;
