const v4 = require('uuid/v4');
const User = require('../models/user');
const Token = require('../models/token');

const users = [
  { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' },
  { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' },
];

const findById = (id, fn) => {
  User.findById(id)
    .exec()
    .then((user) => {
      if (user) {
        fn(null, users[idx]);
      } else {
        fn(new Error('User ' + id + ' does not exist'));
      }
    });
}

const findByEmail = (username, fn) => {
  User.findOne({ email: username }).exec()
    .then((user) => {
      if (user) { return fn(null, user); } 
      return fn(null, null);
    });
}

const consumeRememberMeToken = (token, fn) => {
  Token.findOne({ token }).exec()
    .then((t) => {
      if (t) {
        fn(null, t.userId);
        t.remove().exec();
      } else {
        fn();
      }
    })
}

const saveRememberMeToken = (token, userId, fn) => {
  const newToken = new Token({ token, userId });
  newToken.save();
  return fn();
}

const issueToken = (user, done) => {
  const token = v4();
  saveRememberMeToken(token, user.id, (err) => {
    if (err) { return done(err); }
    return done(null, token);
  });
}

module.exports = {
  findById,
  findByEmail,
  consumeRememberMeToken,
  issueToken,
};
