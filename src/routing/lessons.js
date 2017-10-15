const router = require('express').Router();
const lessonsPageController = require('../controllers/lessons');

router.get('/:id', lessonsPageController.getLesson);

module.exports = router;
