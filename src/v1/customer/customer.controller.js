require('./Customer.schema');
const mongoose = require("mongoose");
const Customer = mongoose.model('Customer');

const getCustomers = (search, curPage, limit) => {
    const start = curPage * limit - limit;
    return Customer
        .find(search||{})
        .skip(start)
        .limit(limit)
};

const getCustomerById = (id) => {
    return Customer
        .findById(id)
};

const createCustomer = (name) => {
    const customer = new Customer({
        name,
    });
    return customer.save()
};

const editCustomer = (id, name) => {
    return Customer
        .findById(id)
        .updateOne({ name })
};

const deleteCustomer = (id) => {
    return Customer
        .findById(id)
        .deleteOne()
};

module.exports = {
    getCustomers,
    getCustomerById,
    createCustomer,
    editCustomer,
    deleteCustomer
}