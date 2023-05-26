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
        name: data.name,
    });
    return customer.save()

};

const deleteCustomer = (id) => {
    return Customer
        .findById(id)
        .remove()
};

module.exports = {
    getCustomers,
    getCustomerById,
    createCustomer,
    deleteCustomer
}