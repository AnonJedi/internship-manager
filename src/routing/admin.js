const router = require('express').Router();
const adminControllers = require('../controllers/admin');

router.get('/', adminControllers.getAdmin);
router.post('/import-lessons', adminControllers.importLessons);

module.exports = router;
