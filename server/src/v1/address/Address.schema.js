const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    id: { type: Schema.ObjectId },
    location: { type: String },
    customerId: { type: Number },
});

mongoose.model('Address', AddressSchema);