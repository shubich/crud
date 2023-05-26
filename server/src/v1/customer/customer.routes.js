const express = require('express');
const { getCustomers, getCustomerById, createCustomer, editCustomer, deleteCustomer } = require('./customer.controller');

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
        .catch((err) => res.send("Something went wrong").status(500));
});

router.route('/customer').post((req, res) => {
    createCustomer(req.body.name)
        .then((data) => res.send(data))
        .catch((err) => res.send("Something went wrong").status(500) );
});

router.route('/customer').put((req, res) => {
    editCustomer(req.body.id, req.body.name)
        .then((data) => res.send(data))
        .catch((err) => res.send("Something went wrong").status(500) );
});

router.route('/customer/:id').delete((req, res) => {
    deleteCustomer(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => res.send("Something went wrong").status(500) );
});

module.exports = router;