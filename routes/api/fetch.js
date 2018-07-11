// importing router from express package
var router = require("express").Router();

// importing fetch js from controllers
var fetchController = require("../../controllers/fetch");

// initiating GET using scraperHeadlines function
router.get("/", fetchController.scrapeHeadlines);

module.exports = router;
