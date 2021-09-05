const express = require("express");
const router = express.Router();

const newsControlers = require("../app/controlers/NewsControlers");
// NewsControlers.index()
router.get("/:shhlug", newsControlers.show);
router.get("/", newsControlers.index);

module.exports = router;
