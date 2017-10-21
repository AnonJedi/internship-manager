const adminServices = require('../services/admin');
const userServices = require('../services/user');

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
      res.render('admin_users', { users, csrf: req.csrfToken() });  
    });
}

const createUser = (req, res) => {
  userServices.createUser(req.body);
  userServices.getAllUsers()
    .then((users) => {
      res.render('admin_users', { users, csrf: req.csrfToken() });  
    });
}

module.exports = {
  importLessons,
  getAdmin,
  getUsersPage,
  createUser,
};
