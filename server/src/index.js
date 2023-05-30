require('dotenv').config();
const express = require('express')
const cors = require('cors');
const socket = require("socket.io");

const { setUpConnection } = require('./utils/dataBase.utils.js');
const routes = require('./v1/routes.js');
const { Socket } = require('./utils/socket.utils.js');

const serverPort = process.env.SERVER_PORT || "8000";

const app = express();

setUpConnection();

app.use(express.json())
app.use(cors({ origin: '*' }));

app.use("/", routes);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

const server = app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`)
})

// Socket setup
const io = socket(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", function (socket) {
  console.log("Made socket connection");
  Socket.socket = socket;  
});