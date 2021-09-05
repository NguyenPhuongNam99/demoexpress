const express = require("express");
const router = express.Router();

const site = require('../app/controlers/SiteControler');

router.get("/home",site.index)
router.get("/search",site.search);
// router.use("/search",site.search);
module.exports = router;