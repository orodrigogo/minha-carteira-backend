const { verify } = require('jsonwebtoken');

function authenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json({ error: 'JWT token is missing!' });
  }

  try {
    const [, token] = authHeader.split(' ');
    const decoded = verify(token, process.env.KEY_SECRET_TOKEN);

    request.user = {
      id: decoded,
    };
  } catch {
    return response.json({ error: 'invalid token!' });
  }

  return next();
}

module.exports = authenticated;
