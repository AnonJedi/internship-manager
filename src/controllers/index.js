const lessonsService = require('../services/lessons');

const index = (req, res) => {
  const allLessons = lessonsService.getAllLessons();
  res.render('index', {
    lessons: allLessons,
  });
};

module.exports = {
  index,
};
