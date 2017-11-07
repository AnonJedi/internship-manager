const markdown = require('markdown').markdown;
const lessonsService = require('../services/lessons');

const getLesson = (req, res) => {
  Promise.all([
    lessonsService.getAllLessons(),
    lessonsService.getLessonById(req.params.id),
  ])
    .then(([lessons, lesson]) => {
      lesson.task.exercises = markdown.toHTML(lesson.task.exercises || '');
      res.render('lesson', { lessons, lesson });
    });
};

module.exports = {
  getLesson,
};
