const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    id: { type: Schema.ObjectId },
    name: { type: String },
});

const Customer = mongoose.model('Customer', CustomerSchema);

// Customer.createCollection().then(() => {
//     console.log('Customer collection is created!')
// }).catch((err) => {
//     console.dir(err)
// })