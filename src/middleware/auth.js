const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const RememberMeStrategy = require('passport-remember-me').Strategy;

const authService = require('../services/auth');
const { USER_ROLE_ADMIN } = require('../constants/user');

const authRequired = (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

const adminAuthRequired = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === USER_ROLE_ADMIN) { return next(); }
  res.render('404');
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  authService.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  (username, password, done) => {
    // Find the user by username.  If there is no user with the given
    // username, or the password is not correct, set the user to `false` to
    // indicate failure and set a flash message.  Otherwise, return the
    // authenticated `user`.
    authService.findByEmail(username, (err, user) => {
      if (err) { return done(err); }
      if (!user || user.password != password) { 
        return done(null, false, { message: 'username or password is incorrect' }); 
      }
      return done(null, user);
    })
  }
));

// Remember Me cookie strategy
//   This strategy consumes a remember me token, supplying the user the
//   token was originally issued to.  The token is single-use, so a new
//   token is then issued to replace it.
passport.use(new RememberMeStrategy(
  (token, done) => {
    authService.consumeRememberMeToken(token, (err, uid) => {
      if (err) { return done(err); }
      if (!uid) { return done(null, false); }
      
      authService.findById(uid, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    });
  },
  authService.issueToken
));

module.exports = {
  authRequired,
  adminAuthRequired,
};
