const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Transaction', schema);
