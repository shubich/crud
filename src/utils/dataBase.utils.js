const mongoose = require('mongoose');

const connectionString = process.env.ATLAS_URI || "";

function setUpConnection() {
  mongoose.connect(connectionString);
}

module.exports = {
  setUpConnection,
}