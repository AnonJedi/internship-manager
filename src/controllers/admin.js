const adminServices = require('../services/admin');
const userServices = require('../services/user');
const userMapper = require('../mappers/user');

const getAdmin = (req, res) => {
  res.render('admin');
}

const importLessons = (req, res) => {
  adminServices.importLessons(req.body.lessons);
  res.render('admin', { successImport: true });
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
      console.log(some);
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

module.exports = {
  importLessons,
  getAdmin,
  getUsersPage,
  createUser,
  updateUser,
  deleteUser,
};
