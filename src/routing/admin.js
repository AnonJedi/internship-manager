const router = require('express').Router();
const adminControllers = require('../controllers/admin');

router.get('/', adminControllers.getAdmin);
router.get('/users', adminControllers.getUsersPage);
router.post('/users', adminControllers.createUser);
router.post('/import-lessons', adminControllers.importLessons);

module.exports = router;
