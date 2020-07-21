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

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const transaction = await Transaction.findById(id);
  res.send(transaction);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const transaction = await Transaction.findByIdAndDelete(id);
  res.send(transaction);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const transaction = await Transaction.findByIdAndUpdate(id, body);
  res.send(transaction);
});

module.exports = router;
