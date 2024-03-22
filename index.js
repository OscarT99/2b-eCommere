require('dotenv').config()

const Server = require('./backend/server')

const server = new Server();

server.listen()