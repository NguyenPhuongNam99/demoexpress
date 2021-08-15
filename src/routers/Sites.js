const express = require("express");
const router = express.Router();

const site = require('../app/controlers/SiteControler');

router.use("/home",site.index)
router.use("/search",site.search);

module.exports = router;