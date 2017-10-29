const lessonsService = require('../services/lessons');

const getLesson = (req, res) => {
  Promise.all([
    lessonsService.getAllLessons(),
    lessonsService.getLessonById(req.params.id),
  ])
    .then(([lessons, lesson]) => {
      console.log(lessons, lesson);
      res.render('lesson', { lessons, lesson });
    });
};

module.exports = {
  getLesson,
}
