const lessonsMock = require('../mocks/lessons.json');

const index = (req, res) => {
  res.render('index', {
    lessons: lessonsMock
  });
};

module.exports = {
  index
};
