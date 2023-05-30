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

const removeAddressesByCustomerId = (customerId) => {
    return Address.find({ customerId }).deleteMany();
};


module.exports = {
    getAddressesByCustomerId,
    createAddress,
    removeAddressesByCustomerId,
}