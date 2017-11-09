const router = require('express').Router();
const indexPageControllers = require('../controllers/index');
// const { authRequired } = require('../middleware/auth');

// router.use(authRequired);
router.get('/', indexPageControllers.index);

module.exports = router;
