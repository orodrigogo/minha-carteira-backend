require('dotenv/config');

const express = require('express');

const server = express();

const routes = require('./routes');

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 8080, () => {
  /* eslint-disable-next-line */
  console.log('Server is running on 3333 port!');
});
