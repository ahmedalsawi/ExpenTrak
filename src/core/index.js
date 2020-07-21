const express = require('express');
const router = express.Router();

router.use('/transactions', require('./controllers/transaction.controller'));
router.use('/accounts', require('./controllers/account.controller'));

module.exports = router;
