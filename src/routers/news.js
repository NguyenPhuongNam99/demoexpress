const express = require("express");
const router = express.Router();

const newsControlers = require("../app/controlers/NewsControlers");
// NewsControlers.index()
router.use("/:shhlug", newsControlers.show);
router.use("/", newsControlers.index);

module.exports = router;
