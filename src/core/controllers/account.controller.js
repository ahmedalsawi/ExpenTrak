const express = require('express');
const router = express.Router();

const Account = require('../models/Account');

router.get('/', async (req, res) => {
  const Accounts = await Account.find();
  res.send(Accounts);
});

router.post('/', async (req, res) => {
  const trans = new Account({
    title: req.body.title,
  });
  await trans.save();
  res.send(trans);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const Account = await Account.findById(id);
  res.send(Account);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const Account = await Account.findByIdAndDelete(id);
  res.send(Account);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const Account = await Account.findByIdAndUpdate(id, body);
  res.send(Account);
});

module.exports = router;
