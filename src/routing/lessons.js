const router = require('express').Router();
const lessonsPageController = require('../controllers/lessons');
const { authRequired } = require('../middleware/auth');

// router.use(authRequired);
router.get('/:id', lessonsPageController.getLesson);

module.exports = router;
