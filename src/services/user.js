const User = require('../models/user');

const getAllUsers = () => {
  return User.find().exec();
};

const createUser = (user) => {
  return bcrypt.hash(parsedUser.password, 10)
    .then((hash) => {
      buildedUser = new User(user);
      console.log(user);
      buildedUser.password = hash;
      return buildedUser.save();
    });
};

module.exports = {
  getAllUsers,
  createUser,
};
