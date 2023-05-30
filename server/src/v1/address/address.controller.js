require('./Address.schema');
const mongoose = require("mongoose");
const Address = mongoose.model('Address');

const getAddressesByCustomerId = (customerId) => {
    return Address.find({ customerId })
};

const createAddress = (location, customerId) => {
    const address = new Address({
        location,
        customerId,
    });
    return address.save()
};

module.exports = {
    getAddressesByCustomerId,
    createAddress,
}