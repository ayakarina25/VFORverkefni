const express = require("express");
const router = express.Router();

// Matseðill page
router.get("/", (req, res) => {
  res.render("index");
});

// Skógafoss page
router.get("/skogafoss", (req, res) => {
  res.render("skogafoss");
});

module.exports = router;
