const adminServices = require('../services/admin');
const userServices = require('../services/user');
const userMapper = require('../mappers/user');
const lessonService = require('../services/lessons');

const getAdmin = (req, res) => {
  res.render('admin');
};

const getUsersPage = (req, res) => {
  userServices.getAllUsers()
    .then((users) => {
      const mappedUsers = users.map(userMapper);
      res.render('admin_users', { users: mappedUsers, csrf: req.csrfToken() });  
    });
};

const createUser = (req, res) => {
  userServices.createUser(req.body)
    .then((some) => {
      req.flash('Успех!');
      res.redirect('/admin/users');
    })
    .catch((err) => {
      console.error(err);
      req.flash('Что-то пошло не так...');
      res.redirect('/admin/users');
    });
};

const updateUser = (req, res) => {
  const userData = {
    ...req.body,
    id: req.params.id,
  }
  delete userData._csrf;
  userServices.updateUser(userData)
    .then((success) => {
      if (success) {
        req.flash('Успех!');
        res.redirect('/admin/users');
      }
    })
    .catch((err) => {
      console.log(err);
      req.flash(err);
      res.redirect('/admin/users');
    });
};

const deleteUser = (req, res) => {
  userServices.deleteUser(req.params.id)
    .then((success) => {
      if (success) {
        res.redirect('/admin/users');
      }
    });
};

const getLessonsPage = (req, res) => {
  lessonService.getAllLessons()
    .then((lessons) => {
      res.render('admin_lessons_list', { lessons, csrf: req.csrfToken() })
    })
};

const createLesson = (req, res) => {
  lessonService.createLesson(req.body)
    .then((result) => {
      res.redirect('/admin/lessons');
    });
};

const lessonOrderUp = (req, res) => {
  lessonService.orderUp(req.params.id)
    .then((result) => {
      res.redirect('/admin/lessons');
    });
};

const lessonOrderDown = (req, res) => {
  lessonService.orderDown(req.params.id)
    .then((result) => {
      res.redirect('/admin/lessons');
    })
    .catch((err) => {
      console.log(err)
    });
};

const getLessonPage = (req, res) => {
  lessonService.getLessonById(req.params.id)
    .then((lesson) => {
      const resources = lesson.task.resources.map((r => (`[${r.title}](${r.link})`))).join(',');
      res.render('admin_lesson_edit', { lesson, resources, csrf: req.csrfToken() });
    });
};

const updateLesson = (req, res) => {
  const { _csrf, action, ...data } = req.body;
  lessonService.updateLesson(req.params.id, data)
    .then(() => {
      res.redirect(`/admin/lessons/${req.params.id}`);
    });
};

const removeLesson = (req, res) => {
  lessonService.removeLesson(req.params.id)
    .then(() => {
      res.redirect('/admin/lessons');
    });
};

module.exports = {
  getAdmin,
  getUsersPage,
  createUser,
  updateUser,
  deleteUser,
  getLessonsPage,
  createLesson,
  lessonOrderUp,
  lessonOrderDown,
  getLessonPage,
  updateLesson,
  removeLesson,
};
