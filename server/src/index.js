const { runDB } = require('./utils/dataBase.utils.js');
const { serverPort } = require('../config/default.json');
const routes = require('./v1/routes.js');

const express = require('express')

const app = express();
runDB();

app.use("/", routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`)
})