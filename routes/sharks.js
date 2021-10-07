const express = require("express");
const router = express.Router();
const shark = require("../controllers/sharks");

router.get("/", (req, res) => {
  shark.index(req, res);
});

router.post("/addshark", (req, res) => {
  shark.create(req, res);
});

router.get("/getshark", (req, res) => {
  shark.list(req, res);
});

module.exports = router;
