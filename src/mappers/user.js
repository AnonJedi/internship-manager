const userFields = {
  _id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  role: 'role',
};

module.exports = (userModel) => {
  return Object.keys(userFields).reduce((result, field) => {
    result[userFields[field]] = userModel[field];
    return result;
  }, {});
};
