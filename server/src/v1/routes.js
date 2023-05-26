const express = require('express');
const customer = require('./customer/customer.routes');

const router = express.Router();

router.use(customer);
// router.use(address);

module.exports = router;