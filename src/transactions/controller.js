const express = require('express');
const router = express.Router();

const Transaction = require('./models/Transaction');

router.get('/', async (req, res) => {
  const transactions = await Transaction.find();
  res.send(transactions);
});

router.post('/', async (req, res) => {
  const trans = new Transaction({
    title: req.body.title,
  });
  await trans.save();
  res.send(trans);
});

module.exports = router;
