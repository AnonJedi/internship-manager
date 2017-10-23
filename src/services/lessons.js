const lessonsMock = require('../mocks/lessons.json');
const Lesson = require('../models/lesson');

const getAllLessons = () => Lesson.find().sort('order').exec();

const getLessonById = (lessonId) => {
  return lessonsMock.filter(lesson => lesson.id === lessonId)[0];
};

const createLesson = (lessonData) => {
  let lessonOrder;
  let newLesson = new Lesson();
  return Lesson.count({}).exec()
    .then((count) => {
      lessonOrder = count + 1;
      newLesson.order = lessonOrder;
      newLesson.isLocked = !!lessonData.islocked;
      newLesson.task = {
        title: lessonData.title,
        descrition: lessonData.descrition,
        picture: lessonData.picture,
      }
      if (lessonData.resources) {
        const mdResources = lessonData.resources.split(',');
        newLesson.task.resources = mdResources.map((r) => {
          const splitedResource = r.trim().split('](');
          return {
            title: splitedResource[0].substring(1),
            link: splitedResource[1].substring(0, splitedResource[1].length - 1),
          };
        });
      }

      newLesson.task.exercises = [];
      return newLesson.save();
    });
};

const orderUp = (lessonId) => {
  let currentLesson;
  return Lesson.findOne({ _id: lessonId }).exec()
    .then((lesson) => {
      if (lesson.order === 1) return Promise.resolve(null);
      currentLesson = lesson;
      return Lesson.findOne({ order: lesson.order - 1 }).exec();
    })
    .then((lesson) => {
      lesson.order = lesson.order + 1;
      currentLesson.order - 1;
      return Promise.all(lesson.save(), currentLesson.save());
    });
};

const orderDown = (lessonId) => {
  let currentLesson;
  let lessonCount;
  return Promise.all(
    Lesson.findOne({ _id: lessonId }).exec(),
    Lesson.count({}).exec(),
  )
    .then(([lesson, count]) => {
      if (lesson.order === count) return Promise.resolve(null);
      currentLesson = lesson;
      return Lesson.findOne({ order: lesson.order + 1 }).exec();
    })
    .then((lesson) => {
      lesson.order = lesson.order - 1;
      currentLesson.order + 1;
      return Promise.all(lesson.save(), currentLesson.save());
    });
};

module.exports = {
  getAllLessons,
  getLessonById,
  createLesson,
  orderUp,
  orderDown,
};
