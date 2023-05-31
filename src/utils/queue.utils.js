const Queue = require('bull');
const { getCustomerById } = require('../v1/customer/customer.controller');
const { createAddress } = require('../v1/address/address.controller');
const { Socket } = require('../utils/socket.utils');

// Connect to a local redis intance locally, and the Heroku-provided URL in production
const  REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

const workQueue = new Queue('upwork', REDIS_URL);

const removeJobById = (jobId) => {
    workQueue.getJobFromId(jobId)
        .then((job) => {
            job?.remove();
        })
}

// You can listen to global events to get notified when jobs are processed
workQueue.on('global:completed', (jobId, result) => {
    const { customerId, address } = JSON.parse(result);

    if (customerId) {
        getCustomerById(customerId)
            .then((user) =>  {
                if (user) {
                    createAddress(address, customerId)
                        .then((data) => {
                            Socket.emit(customerId, data);
                        })
                        .catch((err) => console.error(err) );
                } else {
                    removeJobById(jobId);
                }
            })
            .catch(() => {
                removeJobById(jobId);
            });
    }
});

module.exports = {
    workQueue
}