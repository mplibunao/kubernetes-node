const path = require("path");
const Shark = require("../models/sharks");

exports.index = function (_req, res) {
  res.sendFile(path.resolve("views/sharks.html"));
};

exports.create = function (req, res) {
  const newShark = new Shark(req.body);
  console.log("req.body", req.body); // eslint-disable-line no-console
  newShark.save((err) => {
    if (err) {
      res.status(400).send("Unable to save shark to database");
    } else {
      res.redirect("/sharks/getshark");
    }
  });
};

exports.list = (_req, res) => {
  Shark.find({}).exec((err, sharks) => {
    if (err) {
      return res.send(500, err);
    }

    res.render("getshark", {
      sharks,
    });
  });
};
