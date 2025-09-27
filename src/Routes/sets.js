const express = require("express");
const router = express.Router();
const { getAllSets } = require("../Controllers/setsController");

router.get("/", (req, res) => res.json(getAllSets()));
module.exports = router;
