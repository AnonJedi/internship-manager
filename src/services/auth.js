const v4 = require('uuid/v4');
// const users = require('../mocks/users');


const users = [
  { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' },
  { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' },
];

const findById = (id, fn) => {
  var idx = id - 1;
  if (users[idx]) {
    fn(null, users[idx]);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
}

const findByUsername = (username, fn) => {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}

/* Fake, in-memory database of remember me tokens */

const tokens = {};

const consumeRememberMeToken = (token, fn) => {
  var uid = tokens[token];
  // invalidate the single-use token
  delete tokens[token];
  return fn(null, uid);
}

const saveRememberMeToken = (token, uid, fn) => {
  tokens[token] = uid;
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
  findByUsername,
  consumeRememberMeToken,
  issueToken,
};
