require('dotenv').config();
const express = require('express')
const { setUpConnection } = require('./utils/dataBase.utils.js');
const routes = require('./v1/routes.js');

const serverPort = process.env.SERVER_PORT || "8000";

const app = express();

setUpConnection();

app.use(express.json())

app.use("/", routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`)
})