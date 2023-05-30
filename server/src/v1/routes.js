const express = require('express');
const customer = require('./customer/customer.routes');
const address = require('./address/address.routes');

const router = express.Router();

router.use(customer);
router.use(address);

module.exports = router;