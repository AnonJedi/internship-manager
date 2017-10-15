const lessonsService = require('../services/lessons');

const getLesson = (req, res) => {
  const lessonId = parseInt(req.params.id);
  const lesson = lessonsService.getLessonById(lessonId);
  res.render('lesson', {
    lessons: lessonsService.getAllLessons(),
    lesson,
  });
}

module.exports = {
  getLesson,
}
