const express = require("express");
const app = require("./../app");
const router = express.Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const dotenv = require("dotenv");
const AWS = require("aws-sdk");

dotenv.config({ path: __dirname + "/./../config/config.env" });

AWS.config.update({
  accessKeyId: "AKIARTWGMXKDM3XEVIGS",
  secretAccessKey: "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",
  region: "us-west-2",
});

const s3 = new AWS.S3();

let imgName = "";

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "petgohome",
    metadata: function (req, file, cb) {
      const metadataObj = Object.assign({}, req.body);
      metadataObj.content_type = file.mimetype;
      metadataObj.filename = file.originalname;
      cb(null, metadataObj);
    },
    key: function (req, file, cb) {
      imgName = file.originalname;
      console.log(file);
      cb(null, imgName); //use Date.now() for unique file keys
    },
  }),
}).single("myImage");

app.post("/uploadPic", async (req, res) => {
  //   console.log(req.body);
  upload(req, res, (err) => {
    if (err) {
      console.log("failure");
      res.status(400).send("error");
    }
    console.log("success");
    res.status(200).send(imgName);
  });
});

module.exports = router;
