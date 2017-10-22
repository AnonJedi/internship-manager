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

module.exports = {
  importLessons,
};
