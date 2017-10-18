const adminServices = require('../services/admin');

const getAdmin = (req, res) => {
  res.render('admin');
}

const importLessons = (req, res) => {
  adminServices.importLessons(req.body.lessons);
  res.render('admin', { successImport: true });
};

module.exports = {
  importLessons,
  getAdmin,
};
