const lessonsMock = require('../mocks/lessons.json');

const getAllLessons = () => lessonsMock;

const getLessonById = (lessonId) => {
  return lessonsMock.filter(lesson => lesson.id === lessonId)[0];
};

module.exports = {
  getAllLessons,
  getLessonById,
};
