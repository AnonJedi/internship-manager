module.exports = (lesson) => ({
  id: lesson._id,
  isLocked: lesson.isLocked,
  order: lesson.order,
  task: {
    title: lesson.task.title,
    description: lesson.task.description,
    picture: lesson.task.picture,
    resources: lesson.task.resources.map(({ title, link }) => ({ title, link })),
    exercises: lesson.task.exercises.map(({ description }) => ({ description })),
  },
});