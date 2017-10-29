const router = require('express').Router();
const adminControllers = require('../controllers/admin');
const { adminAuthRequired } = require('../middleware/auth');

const userMethodsMap = {
  'PUT': adminControllers.updateUser,
  'DELETE': adminControllers.deleteUser,
};

const lessonMethodsMap = {
  'PUT': adminControllers.updateLesson,
  'DELETE': adminControllers.removeLesson,
};

// router.use(adminAuthRequired);
router.get('/', adminControllers.getAdmin);
router.get('/users', adminControllers.getUsersPage);
router.post('/users', adminControllers.createUser);
router.post('/users/:id', (req, res) => { userMethodsMap[req.body.action](req, res); });

router.get('/lessons', adminControllers.getLessonsPage);
router.post('/lessons', adminControllers.createLesson);
router.post('/lessons/:id/order-up', adminControllers.lessonOrderUp);
router.post('/lessons/:id/order-down', adminControllers.lessonOrderDown);
router.get('/lessons/:id', adminControllers.getLessonPage);
router.post('/lessons/:id', (req, res) => { lessonMethodsMap[req.body.action](req, res); });

module.exports = router;
