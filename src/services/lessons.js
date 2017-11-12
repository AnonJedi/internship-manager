const Lesson = require('../models/lesson');

const getAllLessons = () => Lesson.find().sort('order').exec();

const getLessonById = (lessonId) => {
  return Lesson.findOne({ _id: lessonId }).exec();
};

const parseLessonData = (params) => {
  const data = {}
  data.isLocked = !!params.islocked;
  data.task = {
    title: params.title,
    description: params.description,
    picture: params.picture,
    exercises: params.exercises,
  };
  if (params.resources) {
    const mdResources = params.resources.split(',');
    data.task.resources = mdResources.map((r) => {
      if (!r) return null;
      const splitedResource = r.trim().split('](');
      return {
        title: splitedResource[0].substring(1),
        link: splitedResource[1].substring(0, splitedResource[1].length - 1),
      };
    });
  }

  return data;
}

const createLesson = (lessonData) => {
  const newLesson = parseLessonData(lessonData);
  return Lesson.count({}).exec()
    .then((count) => {
      newLesson.order = count + 1; 

      return new Lesson(newLesson).save();
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
      lesson.order += 1;
      currentLesson.order -= 1;
      return Promise.all([lesson.save(), currentLesson.save()]);
    });
};

const orderDown = (lessonId) => {
  let currentLesson;
  let lessonCount;
  return Promise.all([
    Lesson.findOne({ _id: lessonId }).exec(),
    Lesson.count({}).exec(),
  ])
    .then(([lesson, count]) => {
      if (lesson.order === count) return Promise.resolve(null);
      currentLesson = lesson;
      return Lesson.findOne({ order: lesson.order + 1 }).exec();
    })
    .then((lesson) => {
      lesson.order -= 1;
      currentLesson.order += 1;
      return Promise.all([lesson.save(), currentLesson.save()]);
    });
};

const updateLesson = (lessonId, data) => {
  return Lesson.update(
    { _id: lessonId },
    {
      $set: parseLessonData(data),
    }
  ).exec();
};

const removeLesson = (lessonId) => {
  return Lesson.remove({ _id: lessonId });
}

module.exports = {
  getAllLessons,
  getLessonById,
  createLesson,
  orderUp,
  orderDown,
  updateLesson,
  removeLesson,
};
