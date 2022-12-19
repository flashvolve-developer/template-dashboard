const express = require("express");
const path = require("path");
const routes = require("./routes/routes");

const server = express();

server.use(express.static(path.resolve(__dirname, 'public')))
server.use(express.json());
server.use(routes);
server.listen(3000, ()=> console.log('http://localhost:3000'));
