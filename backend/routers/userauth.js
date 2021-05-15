const express = require("express");
const db = require("../models");
const app = require("../app");
const passwordHash = require("password-hash");

const router = express.Router();

app.post("/admin/signin", async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user === null) {
      return res.status(404).send("User not found!");
    } else if (
      passwordHash.verify(req.body.password, user.dataValues.hash_password)
    ) {
      return res.status(200).send(user);
    }
    return res.status(401).send("UnAuthorized!");
  } catch (err) {
    console.log(err);
  }
  return res.status(500).send("Internal Server Error!");
});

app.post("/admin/signup", async (req, res) => {
  console.log(req.body);
  try {
    const user = await db.User.create({
      email: req.body.email,
      hash_password: passwordHash.generate(req.body.password),
      username: req.body.username,
      phone: "9999999999",
    });
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
  return res.status(500).send("Internal Server Error!");
});

module.exports = router;
