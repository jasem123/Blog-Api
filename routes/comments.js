const express = require("express");
const routre = express.Router();

routre.get("", (req, res) => {
  res.send("Comments");
});

routre.get("/:id", (req, res) => {
  res.send("Comments id");
});

routre.post("", (req, res) => {
  res.send("Comments post");
});

routre.put("", (req, res) => {
  res.send("Comments put");
});

routre.delete("", (req, res) => {
  res.send("Comments delete");
});

module.exports = routre;
