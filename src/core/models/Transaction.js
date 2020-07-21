const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = mongoose.Schema({
  title: String,
  amount: Number,
  account: { type: Schema.Types.ObjectId, ref: 'Account' },
});

module.exports = mongoose.model('Transaction', schema);
