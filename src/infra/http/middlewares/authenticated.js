// const { verify } = require('jsonwebtoken');

function authenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json({ error: 'JWT token is missing!' });
  }

  return next();
}

module.exports = authenticated;
