const express = require('express');
const server = express();

server.get('/boasvindas', function(request, response){

  response.send('<h1>API ON!</h1>');

});





server.listen(3333, function(){
  console.log('O PAI TÁ ON!');
});