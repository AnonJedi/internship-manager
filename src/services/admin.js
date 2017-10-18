const bcrypt = require('bcrypt');
const Lesson = require('../models/lesson');
const User = require('../models/user');

const importLessons = (lessons) => {
  let parsedLessons = null;
  try {
    parsedLessons = JSON.parse(lessons);
  } catch (err) {
    return;
  }

  if (parsedLessons) {
    parsedLessons.forEach((l) => {
      lesson = new Lesson(l);
      lesson.save();
    });
  }
  
};

const createUser = (user) => {
  let parsedUser = null;
  try {
    parsedUser = JSON.parse(user);
  } catch (err) {
    return;
  }

  if (parsedUser) {
    bcrypt.hash(parsedUser.password, 10)
      .then((hash) => {
        buildedUser = new User(parsedUser);
        buildedUser.password = hash;
        buildedUser.save();
      })
  }
};

module.exports = {
  importLessons,
  createUser,
};
