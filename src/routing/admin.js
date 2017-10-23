const router = require('express').Router();
const adminControllers = require('../controllers/admin');
const { adminAuthRequired } = require('../middleware/auth');

const methodsMap = {
  'PUT': adminControllers.updateUser,
  'DELETE': adminControllers.deleteUser,
}

// router.use(adminAuthRequired);
router.get('/', adminControllers.getAdmin);
router.get('/users', adminControllers.getUsersPage);
router.post('/users', adminControllers.createUser);
router.post('/users/:id', (req, res) => { methodsMap[req.body.action](req, res); });

router.get('/lessons', adminControllers.getLessonsPage);
router.post('/lessons', adminControllers.createLesson);
router.post('/lessons/:id/order-up', adminControllers.lessonOrderUp);
router.post('/lessons/:id/order-down', adminControllers.lessonOrderDown);

module.exports = router;
