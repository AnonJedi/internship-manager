const router = require('express').Router();
const indexPageControllers = require('../controllers/index');

router.get('/', indexPageControllers.index);

module.exports = router;
