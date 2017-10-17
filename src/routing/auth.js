const router = require('express').Router();
const authPageControllers = require('../controllers/auth');
const passport = require('passport');

router.get('/login', authPageControllers.getLogin);
router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  authPageControllers.postLogin
);
router.get('/logout', authPageControllers.logout);

module.exports = router;
