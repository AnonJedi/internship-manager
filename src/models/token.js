const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  token: String,
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
