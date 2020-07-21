const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = mongoose.Schema({
  title: String,
  balance: Number,
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
});

module.exports = mongoose.model('Account', schema);
