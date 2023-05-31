const express = require('express');
const { getCustomers, getCustomerById, createCustomer, editCustomer, deleteCustomer } = require('./customer.controller');
const { removeAddressesByCustomerId } = require('../address/address.controller');
const { workQueue } = require('../../utils/queue.utils');
const router = express.Router();

router.route('/customers').get((req, res) => {
    const search = req.query.search ? JSON.parse(req.query.search) : {};
    const curPage = req.query.page ?? 1;
    const limit = req.query.limit ?? 100;
   
    getCustomers(search, curPage, limit)
        .then(data => res.send(data))
        .catch((err) => res.send("Something went wrong").status(500));
});

router.route('/customer/:id').get((req, res) => {
    getCustomerById(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => res.send(`Cannot find customer ${customerId}`).status(500));
});

router.route('/customer').post((req, res) => {
    const { name } = req.body;
    createCustomer(name)
        .then((data) => {
            const customerId = String(data._id);
            workQueue.add({ customerId }, { repeat: { every: 60 * 1000 } })
            res.send(data)
        })
        .catch((err) => res.send(`Cannot create customer ${name}`).status(500) );
});
  
router.route('/customer').put((req, res) => {
    editCustomer(req.body.id, req.body.name)
        .then((data) => res.send(data))
        .catch((err) => res.send("Something went wrong").status(500) );
});

router.route('/customer/:id').delete((req, res) => {
    const customerId = req.params.id;

    removeAddressesByCustomerId(customerId)
        .catch((err) => res.send(`Cannot delete addresses for ${customerId}`).status(500) );

    deleteCustomer(customerId)
        .then((data) => res.send(data))
        .catch((err) => res.send(`Cannot delete customer ${customerId}`).status(500) );
});

module.exports = router;