const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  role: Number,
  email: String,
});

userSchema.checkPass = (pass) => {
  return bcrypt.compare(myPlaintextPassword, hash);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
