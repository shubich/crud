const mongoose = require('mongoose');

const connectionString = "mongodb+srv://shubichandrey:SLudPs5zX0FpUBqc@cluster0.jssdgla.mongodb.net/?retryWrites=true&w=majority";

function setUpConnection() {
  mongoose.connect(connectionString);
}

module.exports = {
  setUpConnection,
}