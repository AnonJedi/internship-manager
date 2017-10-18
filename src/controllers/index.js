const lessonsService = require('../services/lessons');

const index = (req, res) => {
  lessonsService
    .getAllLessons()
    .then((allLessons) => {
      res.render('index', {
        lessons: allLessons,
      });
    });
};

module.exports = {
  index,
};
