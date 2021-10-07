const express = require("express");
const router = express.Router();
const path = require("path");

router.use((req, _res, next) => {
  console.log("/" + req.method); // eslint-disable-line no-console
  next();
});

router.get("/", (_req, res) => {
  res.sendFile(path.resolve("views/index.html"));
});

module.exports = router;
