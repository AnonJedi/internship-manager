const v4 = require('uuid/v4');
const User = require('../models/user');
const Token = require('../models/token');

const consumeRememberMeToken = (token, fn) => {
  Token.findOne({ token }).exec()
    .then((t) => {
      if (t) {
        fn(null, t.userId);
        t.remove();
      } else {
        fn();
      }
    })
}

const saveRememberMeToken = (token, userId, fn) => {
  const newToken = new Token({ token, userId });
  newToken.save().then(() => {
    fn()
  });
}

const issueToken = (user, done) => {
  const token = v4();
  saveRememberMeToken(token, user._id, (err) => {
    if (err) { return done(err); }
    return done(null, token);
  });
}

module.exports = {
  consumeRememberMeToken,
  issueToken,
};
