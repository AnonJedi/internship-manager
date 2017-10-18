const lessonsMock = require('../mocks/lessons.json');
const Lesson = require('../models/lesson');

const getAllLessons = () => Lesson.find().exec();

const getLessonById = (lessonId) => {
  return lessonsMock.filter(lesson => lesson.id === lessonId)[0];
};

module.exports = {
  getAllLessons,
  getLessonById,
};
