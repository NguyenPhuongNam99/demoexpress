const express = require("express");
const router = express.Router();

const newsCoureses = require('../app/controlers/Coureses');
// router.get("/courses", newsCoureses.index);
router.get("/:slug", newsCoureses.index);
module.exports = router;