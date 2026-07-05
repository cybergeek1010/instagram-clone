const express = require("express");
const { getStories } = require("../controller/storycontroller");

const router = express.Router();

router.get("/", getStories);

module.exports = router;