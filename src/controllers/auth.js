const authService = require('../services/auth');

const getLogin = (req, res) => {
  res.render('login', { csrf: req.csrfToken() });
};

const postLogin = (req, res, next) => {
  // Issue a remember me cookie if the option was checked
  // if (!req.body.remember_me) { return next(); }
  
  authService.issueToken(req.user, (err, token) => {
    if (err) { return next(err); }
    res.cookie('remember_me', token, { path: '/', httpOnly: true, maxAge: 604800000 });
    res.redirect('/');
  });
  
};

const logout = (req, res) => {
  // clear the remember me cookie when logging out
  res.clearCookie('remember_me');
  req.logout();
  res.redirect('/');
};

module.exports = {
  getLogin,
  postLogin,
  logout,
};
