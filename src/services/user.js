const bcrypt = require('bcrypt');
const User = require('../models/user');



const getAllUsers = () => {
  return User.find().exec();
};

const createUser = (user) => {
  return bcrypt.hash(user.password, 10)
    .then((hash) => {
      const newUser = new User(user);
      newUser.password = hash;
      return newUser.save();
    });
};

const updateUser = (user) => {
  if (user.password) {
    user.password = bcrypt.hashSync(user.password, 10);
  } else {
    delete user.password;
  }

  const { id, ...userData } = user;
  return User.update({ _id: id }, userData).exec()
    .then(({ ok }) => {
      if (ok === 0) throw new Error('User is not found');
      return Promise.resolve(true);
    });
};

const deleteUser = (userId) => {
  return User.remove({ _id: userId })
    .then(({ result }) => {
      if (result.ok === 0) throw new Error('User is not found');
      return Promise.resolve(true);
    });
};

const getById = (userId) => {
  return User.findOne({ _id: userId }).exec();
};

const getByEmail = (username) => {
  return User.findOne({ email: username }).exec();
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getById,
  getByEmail,
};
