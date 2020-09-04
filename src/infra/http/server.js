const express = require('express');
const server = express();


const routes = require('./routes');

server.use(express.json());
server.use(routes);


server.listen(3333, function(){
  console.log('Server is running on 3333 port!');
});