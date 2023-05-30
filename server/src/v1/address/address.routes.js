const express = require('express');
const { getAddressesByCustomerId, createAddress } = require('./address.controller');
const { Socket } = require('../../utils/socket.utils');

const router = express.Router();

router.route('/address/:customerId').get((req, res) => {
    getAddressesByCustomerId(req.params.customerId)
        .then((data) => res.send(data))
        .catch((err) => res.send("Something went wrong").status(500));
});

router.route('/address').post((req, res) => {
    createAddress(req.body.location, req.body.customerId)
        .then((data) => {
            Socket.emit(req.body.customerId, data);
            res.send(data)
        })
        .catch((err) => res.send("Something went wrong").status(500) );
});

module.exports = router;