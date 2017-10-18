const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  isLocked: Boolean,
  task: {
    title: String,
    description: String,
    picture: String,
    resources: [
      {
        title: String,
        link: String,
      },
    ],
    exercises: [
      {
        description: String,
      },
    ],
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
