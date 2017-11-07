const router = require('express').Router();
const passport = require('passport');
const authPageControllers = require('../controllers/auth');

router.get('/login', authPageControllers.getLogin);
router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  authPageControllers.postLogin
);
router.get('/logout', authPageControllers.logout);

module.exports = router;
