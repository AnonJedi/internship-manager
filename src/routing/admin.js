const router = require('express').Router();
const adminControllers = require('../controllers/admin');
const { adminAuthRequired } = require('../middleware/auth');

const methodsMap = {
  'PUT': adminControllers.updateUser,
  'DELETE': adminControllers.deleteUser,
}

router.use(adminAuthRequired);
router.get('/', adminControllers.getAdmin);
router.get('/users', adminControllers.getUsersPage);
router.post('/users', adminControllers.createUser);
router.post('/users/:id', (req, res) => { methodsMap[req.body.action](req, res); });
router.post('/import-lessons', adminControllers.importLessons);

module.exports = router;
