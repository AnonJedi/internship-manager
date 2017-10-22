const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  role: Number,
  email: String,
});

userSchema.methods.checkPass = function (pass) {
  return bcrypt.compare(pass, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
