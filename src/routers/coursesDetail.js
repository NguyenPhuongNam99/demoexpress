const express = require('express')
const router = express.Router();

const courseDetail = require('../app/controlers/CoursesDetail');
router.get('/:slug', courseDetail.index);
module.exports = router;