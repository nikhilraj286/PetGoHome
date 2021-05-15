const express = require("express");
const app = require("../app");
const router = express.Router();

const auth = require("./userauth");
const location = require("./location");
const lostOrFound = require("./lostOrFound");
const s3Upload = require("./s3Upload");

router.use("/auth", auth);
router.use("/location", location);
router.use("/lostOrFound", lostOrFound);
router.use("/s3Upload", s3Upload);
module.exports = router;
